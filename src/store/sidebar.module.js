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
    // let OldlistMenu = [
    //   {
    //     name: "Data",
    //     module: "data",
    //     subMenu: [
    //       {
    //         path: "data-management",
    //         name: "Data Management",
    //         component: "MasterView"
    //       },
    //       {
    //         path: "form-management",
    //         name: "Form Management",
    //         component: "Test"
    //       },
    //       {
    //         path: "gudang-management",
    //         name: "Gudang Management",
    //         component: "MasterView2"
    //       },
    //       {
    //         path: "canopus-management",
    //         name: "Canopus Management",
    //         component: "MasterView"
    //       },
    //       {
    //         path: "hilman-management",
    //         name: "Hilman Management",
    //         component: "MasterView"
    //       }
    //     ]
    //   },
    //   {
    //     name: "Report",
    //     module: "report",
    //     subMenu: [
    //       {
    //         path: "report-management",
    //         name: "Monthly Management",
    //         component: "MasterView"
    //       },
    //       {
    //         path: "daily-management",
    //         name: "Daily Management",
    //         component: "MasterView"
    //       }
    //     ]
    //   },
    //   {
    //     name: "Settings",
    //     module: "settings",
    //     subMenu: [
    //       {
    //         path: "user-management",
    //         name: "User Management",
    //         component: "UserManagement"
    //       },
    //       {
    //         path: "menu-management",
    //         name: "Menu Management",
    //         component: "MasterView"
    //       },
    //       {
    //         path: "group-management",
    //         name: "Group Management",
    //         component: "MasterView"
    //       }
    //     ]
    //   }
    // ];

    let listMenu = [
      {
        _id: "5d7b3a29837e7f3994f603e4",
        name: "Settings",
        module: "settings",
        subMenu: [
          {
            _id: "5d7b3aea837e7f3a3840e85b",
            name: "User Management",
            path: "user-management",
            component: "UserManagement"
          },
          {
            _id: "5d7b3af5837e7f3a3840e85c",
            name: "Menu Management",
            path: "menu-management",
            component: "MenuManagement"
          },
          {
            _id: "5d7b3b02837e7f3a3840e85d",
            name: "Group Management",
            path: "group-management",
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
