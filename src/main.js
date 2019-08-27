import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
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

ApiService.init();

// Ensure we checked auth before each page load.
router.beforeEach((to, from, next) => {
  Promise.all([store.dispatch(CHECK_AUTH)]).then(() => {
    let allowAccess = ["/404", "/login", "/"];
    let isAuth = store.getters.isAuthenticated;

    if (to.path != "/login" && !isAuth) {
      next("/login");
    } else if (isAuth && to.path == "/login") {
      return (window.location.href = "/");
    }

    if (allowAccess.indexOf(to.path) == -1) {
      let checkAccess = store.getters.currentUser.priviledge.filter(
        priviledge =>
          "/" + priviledge.menu + "/" + priviledge.subMenu == to.path
      );
      if (checkAccess.length == 0) {
        return next("/404");
      }
    }
    next();
  });
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
