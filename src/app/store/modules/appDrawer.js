import { Meteor } from "meteor/meteor";

export default {
  namespaced: true,
  state: {
    mini: false,
    activeRouter: "/",
    activeGroup: null
  },
  getters: {},
  mutations: {
    TOGGLE_MINI_DRAWER(state, val) {
      state.mini = val;
    },
    SET_ACTIVE_ROUTER(state, val) {
      state.activeRouter = val;
    },
    SET_ACTIVE_GROUP(state, val) {
      state.activeGroup = val;
    }
  },
  actions: {
    toggleMiniDrawer({ commit }, val) {
      commit("TOGGLE_MINI_DRAWER", val);
    },
    setActiveRouter({ commit }, val) {
      commit("SET_ACTIVE_ROUTER", val);
    },
    setActiveGroup({ commit }, val) {
      commit("SET_ACTIVE_GROUP", val);
    }
  }
};
