import ApiService from "@/common/api.service";
import store from "@/store";

const state = {
  listMenu: [],
  listMenuGroup: [],
  responseGroup: {}
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
  },
  allMenuGroup(state) {
    return state.listMenuGroup;
  },
  createGroup(state) {
    return state.responseGroup;
  }
};

const actions = {
  setMenu(context) {
    let listMenu = [
      {
        _id: "5d7b3a29837e7f3994f603e4",
        name: "Transactions",
        module: "transactions",
        subMenu: [
          {
            _id: "5d7b3aea837e7f3a3840e85b",
            name: "VA Transactions",
            path: "virtualAccountTransaction",
            component: "transactions/VirtualAccountTransaction"
            // component: "merchant/MerchantManagement"
            // component: "transactions/VirtualAccountTransaction"
          }
        ]
      },
      {
        _id: "5d7b3a29837e7f3994f603e4",
        name: "Generals",
        module: "generals",
        subMenu: [
          {
            _id: "5d7b3aea837e7f3a3840e85b",
            name: "Merchants",
            path: "merchantManagement",
            component: "merchant/MerchantManagement"
          },
          {
            _id: "5d7b3aea837e7f3a3840e85b",
            name: "Methods",
            path: "methodManagement",
            component: "merchant/MethodManagement"
          }
        ]
      },
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
            _id: "5d7b3b02837e7f3a3840e85d",
            name: "Group Management",
            path: "groupManagement",
            component: "GroupManagement"
          },
          {
            _id: "5d7b3b02837e7f3a3840e85d",
            name: "Recent Activity",
            path: "recentActivity",
            component: "Activity"
          },
          {
            _id: "5d7b3b02837e7f3a3840e85d",
            name: "Audit Trail",
            path: "auditTrail",
            component: "AuditTrail"
          }
        ]
      }
    ];
    context.commit("setMenu", listMenu);
  },
  getMenu(context) {
    return new Promise((resolve, reject) => {
      ApiService.get("/menu")
        .then(({ data }) => {
          context.commit("setMenuGroup", data);
          resolve(data);
        })
        .catch(({ response }) => {
          reject(response);
        });
    });
  },
  createGroup(context, dataRequest) {
    return new Promise((resolve, reject) => {
      ApiService.post("/userGroup", dataRequest)
        .then(({ data }) => {
          context.commit("setResponseGroup", data);
          resolve(data);
        })
        .catch(({ response }) => {
          reject(response);
        });
    });
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  setMenu(state, menuGet) {
    state.listMenu = menuGet;
  },
  setMenuGroup(state, menuGet) {
    state.listMenuGroup = menuGet;
  },
  setResponseGroup(state, response) {
    state.responseGroup = response;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
