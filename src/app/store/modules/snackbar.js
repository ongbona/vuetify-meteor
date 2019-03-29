import _ from "lodash";
export default {
  namespaced: true,
  state: {
    msg: "",
    color: "",
    absolute: false
  },
  mutations: {
    setSnack(state, snackOpts) {
      if (!_.isEmpty(snackOpts.msg) || snackOpts.msg == "") {
        state.msg = snackOpts.msg;
      }
      if (!_.isEmpty(snackOpts.color) || snackOpts.color == "") {
        state.color = snackOpts.color;
      }
      if (!_.isEmpty(snackOpts.absolute) || snackOpts.absolute == false) {
        state.absolute = snackOpts.absolute;
      }
    }
  }
};
