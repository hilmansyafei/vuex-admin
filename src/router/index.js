import Vue from "vue";
import Router from "vue-router";
import store from "@/store";

let dataMenu = store.getters.allMenu;
let routing = [
  {
    path: "",
    name: "Dashboard",
    component: () => import("@/components/Dashboard"),
    meta: { reuse: false }
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
        component: () => import("@/components/" + data[i].subMenu[j].component)
      };
      routing.push(route);
    }
  }
  return routing;
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "",
      component: () => import("@/views/Admin"),
      children: generateMenu(dataMenu)
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login")
    }
  ]
});
