<template>
  <div id="app">
    {{isOK ? '确定':'取消'}}
    <img src="./assets/logo.png"><!-- v-bind:src="imgUrl"-->
    <h1 id="h1">{{msg}}</h1>
    {{isfalse ? '好吗':'好的'}}
    <HelloWorld></HelloWorld>
    <!--<secondcomponent></secondcomponent>-->
    <ul>
      <li>
        <router-link to="/first">点我跳转到第一页</router-link>
      </li>
      <li>
        <router-link to="/second">点我跳转到第二页</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import secondcomponent from './components/secondcomponent.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

const First = {template: '<div><h2>我是第一页的子页面</h2></div>'}

Vue.use(VueRouter)

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
})

export default {
  data () {
    return {
      msg: 'Hello Vue',
      isfalse: true
    }
  },
  components: {HelloWorld, secondcomponent},
  router
}
new Vue({
  el: '#app',
  data: {
    isOK: false
    /* imgUrl: 'https://avatars0.githubusercontent.com/u/32768756?s=460&v=4' */
  }
})

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
