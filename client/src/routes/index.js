import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../components/Home'
import Customer from '../components/Customer'
import ListCustomer from '../components/ListCustomer'
import MyTab from '../components/MyTab'
const router = new VueRouter({
  mode: 'history',
  routes: [
    // dynamic segments start with a colon
    {
      path: '/',
      component: Home,
      meta:{
        title:"Home"
      }
    },
    {
      path: '/customer',
      component: Customer,
      meta:{
        title:"Customer"
      }
    //   children: [
        
    // ]
    },
    {
      meta:{
        title:'List Customer'
      },
      path: '/customer/list',
      component: ListCustomer,
    },
    {
      meta:{
        title:'My Tab'
      },
      path: '/tab',
      component: MyTab,
    },
  ]
})
export default router