import Vue from "vue";
import Router from "vue-router";
import store from "@/store";

let dataMenu = store.getters.allMenu;
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
  },
  {
    path: "/settings/userManagement/editUser",
    name: "Edit User",
    component: () => import("@/components/EditPrivilege")
  },
  {
    path: "/settings/groupManagement/editGroup",
    name: "Edit Group",
    component: () => import("@/components/EditGroup")
  },
  {
    path: "/generals/merchantManagement/add",
    name: "Add Merchant",
    component: () => import("@/components/merchant/MerchantWizard")
  },
  {
    path: "/generals/methodManagement/add",
    name: "Add Method",
    component: () => import("@/components/merchant/MethodWizard")
  },
  {
    path: "/transactions/virtualAccountTransaction/:va",
    name: "Detial Transaction",
    component: () =>
      import("@/components/transactions/DetialVirtualAccountTransaction")
  },
  {
    path: "/transactions/virtualAccountTransaction/:va/notification",
    name: "Notification Transaction",
    component: () => import("@/components/transactions/NotificationVA")
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
