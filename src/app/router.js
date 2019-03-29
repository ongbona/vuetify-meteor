import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

// Lodash 
import _ from 'lodash'

// App
import app from "./startup/routes";
// Microfic
import microfic from "./modules/microfic/startup/routes";

// Merge routes module
const routes = _.concat(app, microfic);

export default function createRouter() {
  return new Router({
    mode: "history",
    routes: [...routes]
  });
}
