import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
import store from "./store";
// import router from "./router";
//import { sync } from "vuex-router-sync";
//import "./registerServiceWorker";
// import axios from "axios";
import ApiService from "@/common/api.service";

import { CHECK_AUTH } from "./store/actions.type";
import DateFilter from "./common/date.filter";
import ErrorFilter from "./common/error.filter";

Vue.config.productionTip = false;
Vue.filter("date", DateFilter);
Vue.filter("error", ErrorFilter);
// console.log(router);

ApiService.init();
store.dispatch("getMenu").then(() => {
  {
    let routing = [
      {
        path: "",
        name: "Dashboard",
        component: () => import("@/components/Dashboard")
      },
      {
        path: "/404",
        name: "404",
        component: () => import("@/components/Err404")
      }
    ];

    let generateMenu = data => {
      for (let i = 0; i < data.length; i++) {
        var module = data[i].module;
        for (let j = 0; j < data[i].subMenu.length; j++) {
          let route = {
            path: "/" + module + "/" + data[i].subMenu[j].path,
            name: data[i].subMenu[j].name,
            component: () =>
              import("@/components/" + data[i].subMenu[j].component)
          };
          routing.push(route);
        }
      }
      return routing;
    };

    Vue.use(Router);

    const childrens = generateMenu(store.getters.menus);

    let router = new Router({
      // mode: "history",
      routes: [
        {
          path: "/",
          component: () => import("@/views/Admin"),
          children: childrens
        },
        {
          path: "/login",
          name: "login",
          component: () => import("@/views/Login")
        }
      ]
    });

    // Ensure we checked auth before each page load.
    router.beforeEach((to, from, next) => {
      let allowAccess = ["/404", "/login", "/"];
      if (allowAccess.indexOf(to.path) == -1) {
        let checkAccess = store.getters.currentUser.priviledge.filter(
          priviledge =>
            "/" + priviledge.menu + "/" + priviledge.subMenu == to.path
        );
        if (checkAccess.length == 0) {
          return next("/404");
        }
      }
      Promise.all([store.dispatch(CHECK_AUTH)]).then(next);
    });

    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
