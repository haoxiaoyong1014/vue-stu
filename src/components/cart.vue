<template id="cart">
  <div class="cart">
  <!--  <el-input class="inp" type="text" v-model.lazy="message"/>
    <input class="inp" type="text" v-model.trim="message2"/>
    <p>{{message2}}</p>
    <my-com message="来自父组件"></my-com>
    <input class="inp" type="text" v-model="parentMessage"/>-->
   <!-- <p>{{message}}</p>-->
    <p>{{total}}</p>
    <my-component :message="parentMessage"></my-component>
    <my-component2 @increase="handleGetTotal" @reduce="handleGetTotal"></my-component2>
    <my-component3 v-model="total"></my-component3>
    <my-component4 v-model="total"></my-component4>
    <el-button @click="handleReduce">点我—1</el-button>
    <h3>子组件cart数据</h3>
    <ul>
      <li>
        <label>姓名</label>
        <span>{{myName}}</span>
        <input type="text" v-model="myName"/>
      </li>
      <li>
        <label>年龄</label>
        <span>{{myAge}}</span>
        <input type="text" v-model="myAge"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      message2: '',
      parentMessage: 'dfs',
      total: 0
    }
  },
  props: {
    myAge: {
      type: Number,
      default: 13
    },
    myName: {
      type: String,
      default: '默认'
    }
  },
  methods: {
    handleGetTotal: function (total) {
      this.total = total
    },
    handleReduce () {
      this.total--
    }
  }
}

</script>

<style scoped>
  .inp {
    width: auto;
    height: auto;
  }
</style>
