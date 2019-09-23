import ApiService from "@/common/api.service";
import JwtService from "@/common/jwt.service";
import store from "@/store";
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  UPDATE_USER
} from "./actions.type";
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from "./mutations.type";
//import { StringDecoder } from "string_decoder";

const state = {
  errors: null,
  isLoadingUser: true,
  user: {},
  isAuthenticated: !!JwtService.getToken(),
  isLoginError: false,
  messageErrorLogin: "",
  testData: []
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
  isLoadingUser(state) {
    return state.isLoadingUser;
  },
  testData(state) {
    return state.testData;
  },
  messageErrorLogin(state) {
    return state.messageErrorLogin;
  },
  isLoginError(state) {
    return state.isLoginError;
  }
};

const actions = {
  [LOGIN](context, credentials) {
    context.commit("setIsLoginError", false);
    return new Promise((resolve, reject) => {
      ApiService.setHeader();
      ApiService.post("login", credentials)
        .then(({ data }) => {
          context.commit("deleteData");
          context.dispatch("setTestData", "hilman");
          context.commit(SET_AUTH, data.data);
          resolve(data);
        })
        .catch(({ response }) => {
          reject(response);
          context.commit("setIsLoginError", true);
          context.commit(SET_ERROR, response.data.data);
        });
    });
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [REGISTER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post("users", { user: credentials })
        .then(({ data }) => {
          context.commit(SET_AUTH, data.user);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
          reject(response);
        });
    });
  },
  [CHECK_AUTH](context) {
    // if (JwtService.getToken()) {
    //   return new Promise((resolve, reject) => {
    //     ApiService.get("mock/user")
    //       .then(({ data }) => {
    //         context.commit(SET_AUTH, data);
    //         context.commit("setLoadingUser", false);
    //         resolve(data);
    //       })
    //       .catch(({ response }) => {
    //         context.commit(SET_ERROR, response.data.errors);
    //         reject(response);
    //       });
    //   });
    // } else {
    //   context.commit(PURGE_AUTH);
    // }
    if (!JwtService.getToken()) {
      context.commit(PURGE_AUTH);
    }
  },
  [UPDATE_USER](context, payload) {
    const { email, username, password, image, bio } = payload;
    const user = {
      email,
      username,
      bio,
      image
    };
    if (password) {
      user.password = password;
    }
    return ApiService.put("user", user).then(({ data }) => {
      context.commit(SET_AUTH, data.user);
      return data;
    });
  },
  setTestData(context, data) {
    let en = context.dispatch("encryptData", data);
    console.log(en);
    en.then(() => {
      console.log(en);
      context.commit("setTestData", en);
    });
  },
  encryptData(context, payload) {
    let result = [];
    let passcode = "12345678";
    let passLen = passcode.length;
    let content = JSON.stringify(payload);
    for (var i = 0; i < content.length; i++) {
      let passOffset = i % passLen;
      let calAscii = content.charCodeAt(i) + passcode.charCodeAt(passOffset);
      result.push(calAscii);
    }
    return JSON.stringify(result);
  },
  dencryptData(context, payload) {
    return JSON.stringify(payload);
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.messageErrorLogin = error;
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
    JwtService.saveToken(state.user.token);
  },
  setLoadingUser(state, loading) {
    state.isLoadingUser = loading;
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
    store.dispatch("cleanDashboard");
  },
  setTestData(state, data) {
    state.testData = data;
  },
  deleteData(state) {
    state.testData = [];
  },
  setMessageErrorLogin(state) {
    state.messageErrorLogin = state;
  },
  setIsLoginError(state, status) {
    state.isLoginError = status;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
