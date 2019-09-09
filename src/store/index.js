import Vue from "vue";
import Vuex from "vuex";

import sidebar from "./sidebar.module";
import auth from "./auth.module";
import dashboard from "./dashboard";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sidebar,
    auth,
    dashboard
  },
  plugins: [new VuexPersistence().plugin]
});
