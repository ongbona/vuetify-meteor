import Vue from "vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import Vuex from "vuex";
Vue.use(Vuex);

// Meteor Tracker integration
import VueMeteorTracker from "vue-meteor-tracker";
Vue.use(VueMeteorTracker);
Vue.config.meteor.freeze = true;

import * as filters from "./filters";
for (const key in filters) {
  Vue.filter(key, filters[key]);
}

Vue.mixin({
  beforeMount() {
    // console.log('beforeMount');
    const { asyncData } = this.$options;
    if (asyncData) {
      // assign the fetch operation to a promise
      // so that in components we can do `this.dataPromise.then(...)` to
      // perform other tasks after data is ready
      this.dataPromise = asyncData({
        store: this.$store,
        route: this.$route
      });
    }
  }
});
