import state from "./state";
import mutations from "./getters";
import getters from "./mutations";
import actions from "./actions";

// Modules
import location from "./modules/location/index";

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  modules: {
    location
  }
};
