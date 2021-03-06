import store from "@/store";

const state = {
  listMenu: []
};

const getters = {
  accessMenu(state) {
    let userPriviledge = store.getters.currentUser.privilege;
    if (userPriviledge !== undefined) {
      var menusGet = JSON.parse(JSON.stringify(state.listMenu));
      return menusGet.filter(menu => {
        if (
          userPriviledge.find(data => data.module == menu.module) !== undefined
        ) {
          menu.subMenu = menu.subMenu.filter(submenu => {
            let checkPriv = userPriviledge.find(
              dataSubmenu => dataSubmenu.idSubMenu == submenu._id
            );
            if (checkPriv !== undefined) {
              submenu.access = checkPriv.grantAccess;
              return submenu;
            }
          });
          return menu;
        }
      });
    }
  },
  allMenu(state) {
    return state.listMenu;
  }
};

const actions = {
  setMenu(context) {
    let listMenu = [
      {
        _id: "5d7b3a29837e7f3994f603e4",
        name: "Settings",
        module: "settings",
        subMenu: [
          {
            _id: "5d7b3aea837e7f3a3840e85b",
            name: "User Management",
            path: "userManagement",
            component: "UserManagement"
          },
          {
            _id: "5d7b3af5837e7f3a3840e85c",
            name: "Menu Management",
            path: "menuManagement",
            component: "MenuManagement"
          },
          {
            _id: "5d7b3b02837e7f3a3840e85d",
            name: "Group Management",
            path: "groupManagement",
            component: "GroupManagement"
          }
        ]
      }
    ];
    context.commit("setMenu", listMenu);
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  setMenu(state, menuGet) {
    state.listMenu = menuGet;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
