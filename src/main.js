// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/*import VueRouter from "vue-router";*/
Vue.config.productionTip = false
/*Vue.use(VueRouter)*/
/*import secondcomponent from './components/secondcomponent.vue'
const First = {template: '<div><h2>我是第一页的子页面</h2></div>'}
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: secondcomponent
    }
  ]
});*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
