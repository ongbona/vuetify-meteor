import state from "./state";
import mutations from "./getters";
import getters from "./mutations";
import actions from "./actions";

// Modules
import test from "./modules/test";
import snackbar from "./modules/snackbar";
import appDrawer from "./modules/appDrawer";
// Modules / Modules
import microfic from '/src/app/modules/microfic/store/index'

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  modules: {
    appDrawer,
    test,
    snackbar,
    microfic
  }
};
