<template id="cart">
  <div class="cart">
  <!--  <el-input class="inp" type="text" v-model.lazy="message"/>
    <p>{{message}}</p>
    <input class="inp" type="text" v-model.trim="message2"/>
    <p>{{message2}}</p>
    <my-com message="来自父组件"></my-com>
    <input class="inp" type="text" v-model="parentMessage"/>
    <my-component :message="parentMessage"></my-component>-->
    <h3>子组件cart数据</h3>
    <ul>
      <li>
        <label>姓名</label>
        <span>{{myName}}</span>
      </li>
      <li>
        <label>年龄</label>
        <span>{{myAge}}</span>
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
      parentMessage: ''
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
  }
}

</script>

<style scoped>
  .inp {
    width: auto;
    height: auto;
  }
</style>
