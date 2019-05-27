import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
// local storage
// import createPersistedState from "vuex-persistedstate";

import app from "./store/index";
import microfic from "./modules/microfic/store/index";
export default function createSore() {
  return new Vuex.Store({
    // plugins: [createPersistedState()],
    modules: {
      app,
      microfic
    }
  });
}
