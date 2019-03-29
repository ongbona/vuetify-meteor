import "isomorphic-fetch";

import "./plugins";

import Vue from "vue";
import { sync } from "vuex-router-sync";

import App from "./layouts/App.vue";
import createRouter from "./router";
import createStore from "./store";

// Vuetify
import Vuetify from "vuetify";

import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
Vue.use(Vuetify, {
  iconfont: "mdi"
});

function createApp(context) {
  // create router and store instances
  const router = createRouter();
  const store = createStore();

  // Sync so that route state is available as part of the store
  sync(store, router);

  // Create the app instance
  const app = new Vue({
    el: "#app",
    vuetify: new Vuetify({}),
    router,
    store,
    render: h => h(App)
  });

  return { app, router, store };
}

export default createApp;
