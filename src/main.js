import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
//import { sync } from "vuex-router-sync";
//import "./registerServiceWorker";

import { CHECK_AUTH } from "./store/actions.type";
import DateFilter from "./common/date.filter";
import ErrorFilter from "./common/error.filter";

Vue.config.productionTip = false;
Vue.filter("date", DateFilter);
Vue.filter("error", ErrorFilter);
console.log(router);
// Ensure we checked auth before each page load.
router.beforeEach((to, from, next) => {
  let allowAccess = ["/404", "/login", "/"];
  if (allowAccess.indexOf(to.path) == -1) {
    let checkAccess = store.getters.currentUser.priviledge.filter(
      priviledge => "/" + priviledge.menu + "/" + priviledge.subMenu == to.path
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
