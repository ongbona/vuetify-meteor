import { Meteor } from "meteor/meteor";

export default {
  namespaced: true,
  state: {
    counter: 0,
    employee: {}
  },
  getters: {},
  mutations: {
    INCREASE_COUNTER(state, val) {
      state.counter += val;
    },
    SET_EMPLOYEE(state, val) {
      state.employee = val;
    }
  },
  actions: {
    increaseCounter({ commit }, val) {
      commit("INCREASE_COUNTER", val);
    },
    getEmployee({ commit }) {
      return new Promise((resolve, reject) => {
        Meteor.call("getEmployee", (err, res) => {
          if (err) {
            reject(err);
          } else {
            commit("SET_EMPLOYEE", res);
            resolve(res);
          }
        });
      });
    }
  }
};
