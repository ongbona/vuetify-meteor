import state from "./state";
import mutations from "./getters";
import getters from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
