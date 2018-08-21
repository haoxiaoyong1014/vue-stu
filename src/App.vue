<template>
  <div id="app">
    <img :src="imgUrl">
    <h1 id="h1">{{msg}}</h1>
    {{isfalse ? '好吗':'好的'}}
    <HelloWorld></HelloWorld>
    <!--<secondcomponent :text="text"></secondcomponent>-->
    <ul>
      <li>
        <router-link :to="{path:'/first'}">点我跳转到第一页</router-link>
      </li>
      <li>
        <router-link :to="{path: '/second/' + text2 }" >点我跳转到第二页</router-link>
      </li>
      <li>
        <router-link :to="{path: '/third'}" >点我跳转到第三页</router-link>
      </li>
      <li>
        <router-link :to="{path: '/cart'}">点我跳转到第四页</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import secondcomponent from '@/components/secondcomponent.vue'
import cart from './components/cart.vue'
import Third from './components/Third'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)
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
      path: '/second/:text2',
      component: secondcomponent
    },
    {
      path: '/third',
      component: Third
    },
    {
      path: '/cart',
      component: cart
    }
  ]
})
export default {
  data () {
    return {
      msg: 'Hello Vue',
      isfalse: true,
      imgUrl: require('./assets/logo.png'),
      text2: '123,4567'
    }
  },
  components: {Third, HelloWorld, secondcomponent, cart},
  router
}
/* Vue.component('my-com', {
  props: ['message'],
  template: '<div>{{message}}</div>'
}), */
Vue.component('my-component', {
  props: ['message'],
  template: '<div>{{message}}</div>'
})
Vue.component('my-component2', {
  template: '<div>' +
  '<el-button @click="handleIncrease">+1</el-button>' +
  '<el-button @click="handleReduce">-1</el-button>' +
  '</div>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    handleIncrease: function () {
      this.counter++
      this.$emit('increase', this.counter)
    },
    handleReduce: function () {
      this.counter--
      this.$emit('reduce', this.counter)
    }
  }
})
Vue.component('my-component3', {
  template: '<el-button @click="handleClick">+1</el-button>',
  data () {
    return {
      counter2: 0
    }
  },
  methods: {
    handleClick: function () {
      this.counter2++
      this.$emit('input', this.counter2)
    }
  }
})
Vue.component('my-component4', {
  props: ['value'],
  template: '<input :value="value" @input="updateValue"/>',
  methods: {
    updateValue (event) {
      this.$emit('input', event.target.value)
    }
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
