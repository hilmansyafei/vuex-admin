import store from "@/store";
import ApiService from "@/common/api.service";

const state = {
  menus: []
};

const getters = {
  menus(state) {
    let userPriviledge = store.getters.currentUser.priviledge;
    return state.menus.filter(menu => {
      if (userPriviledge.find(data => data.menu == menu.module) !== undefined) {
        menu.subMenu = menu.subMenu.filter(submenu => {
          if (
            userPriviledge.find(
              dataSubmenu => dataSubmenu.subMenu == submenu.path
            ) !== undefined
          ) {
            return submenu;
          }
        });
        return menu;
      }
    });
  }
};

const actions = {
  getMenu(context) {
    console.log("mulai jalan");
    ApiService.get("mock/menu").then(data => {
      context.commit("setMenu", data.data);
      console.log("selesai");
    });
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  setMenu(state, menus) {
    state.menus = menus;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
