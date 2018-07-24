<template>
  <div id="third" :style="styles">
    {{granMsg}}
    <p v-if="status===1">当status为1的时候显示该行</p>
    <p v-else-if="status===2">当status为2的时候显示该行</p>
    <p v-else>否则显示该行</p>
    <!-- 可以在Vue.js内置的template元素上使用条件命令-->
    <template v-if="status===1">
      <div :style="styless">
        <p>出师表</p>
        <p>受任于败军之际,奉命于危难之间，</p>
        <p>苟全性命于乱世，不求闻达于诸侯。</p>
      </div>
    </template>
    <!-- vue 在渲染是出于效率考虑，会尽可能的复用已有的元素而非重新渲染，比如：-->
    <!-- 当加上 key 的时候输入框的文字就不会带到第二个框内-->
    <template v-if="type==='name'">
      <label :style="styless">用户名</label>
      <!-- clearable 带有 'x'号的文本框-->
      <el-input  placeholder="请输入用户名" title="请输入用户名" clearable class="inp" key="key-name" v-model ="name"></el-input>
    </template>
    <template v-else>
      <label :style="styless">邮箱</label>
      <el-input placeholder="请输入邮箱" title="请输入邮箱" class="inp" key="key-mail" v-model ="email"></el-input>
    </template>
    <el-button type="primary" @click="hanldTog">切换输入类型</el-button>
    <ul :style="styless">
      <!-- of 可以代替in -->
      <li v-for="(book,index) in books" :key="index">{{book.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Third',
  data () {
    return {
      granMsg: 'First meet (初次见面)',
      styles: {
        color: 'red',
        fontSize: 14 + 'px'
      },
      status: 1,
      styless: {
        color: 'LightSlateGray',
        fontSize: 14 + 'px'
      },
      type: 'name',
      name: '郝晓勇',
      email: 'haoxy@163.com',
      books: [
        {name: '《时间简史》'},
        {name: '《你坏》'},
        {name: '《云边有个小卖部》'}
      ]
    }
  },
  methods: {
    hanldTog: function () {
      this.type = this.type === 'name' ? 'mail' : 'name'
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
