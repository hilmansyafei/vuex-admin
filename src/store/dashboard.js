import ApiService from "@/common/api.service";

const state = {
  dashboard: {},
  isLoadingDashboard: true
};

const getters = {
  dataDashboard(state) {
    return state.dashboard;
  },
  isLoadingDashboard(state) {
    return state.isLoadingDashboard;
  }
};

const actions = {
  getDashboard(context) {
    return new Promise(resolve => {
      context.commit("setLoadingDashboard", false);
      ApiService.get("mock/dashboard").then(({ data }) => {
        context.commit("setDashboard", data);
        context.commit("setLoadingDashboard", true);
        resolve(data);
      });
    });
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  setDashboard(state, dashboard) {
    state.dashboard = dashboard;
  },
  setLoadingDashboard(state, status) {
    state.isLoadingDashboard = status;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
