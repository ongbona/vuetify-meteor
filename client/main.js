import './main.html';
import Vue from 'vue';
import App from '/client/src/Layout/Vuetify';
// import App from '/client/src/Layout/App'
import router from './src/routes'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
const opts = {}
Vue.use(Vuetify)

Meteor.startup(()=>{
  new Vue({
    router,
    vuetify: new Vuetify(opts),
    render: h => h(App)
  }).$mount('#app')
})