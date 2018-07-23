<template>
  <div id="secondcomponent">
    <h1>I am another page</h1>
    <a v-bind:href="author">博客链接教程</a>
    总价: {{prices}} 折后价: {{ text2 }}
    <p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
    <div :class="{'actice': isActice}">这是一个 div</div>
    <div class="static" :class="{'active':isActice,'error': isError}">这个 div 的 class 是动态的而且有多个</div>
    <p v-if="show">这是一段文本</p>
    <button v-on:click="handleColse">点击隐藏上面的一段文本</button>
  </div>
</template>

<script>
export default {
  name: 'secondcomponent',
  data () {
    return {
      author: 'http://www.runoob.com/w3cnote/vue2-start-coding.html',
      articles: [],
      show: true,
      package1: [{
        name: 'iPhone7',
        price: 7199,
        count: 2
      },
      {
        name: 'iPad',
        price: 2888,
        count: 2
      }
      ],
      package2: [{
        name: 'apple',
        price: 3000,
        count: 5
      },
      {
        name: 'HuaWei per20',
        price: 4500,
        count: 10
      }
      ],
      text2: '123,45',
      isActice: true,
      isError: true
    }
  },
  // props: {
  //   text: {
  //     type: String,
  //     default: '12345'
  //   }
  // },
  computed: {
    prices: function () {
      var prices = 0
      for (var i = 0; i < this.package1.length; i++) {
        prices += this.package1[i].price * this.package1[i].count
      }
      for (var i = 0; i < this.package2.length; i++) {
        prices += this.package2[i].price * this.package2[i].count
      }
      return prices
    }
  },

  methods: {
    handleColse: function () {
      this.show = false
    },
    init: function (text) {
      console.log(text)
    }
  },

  mounted: function () {
    this.init('在初始化的时候调用')
    this.text2 = this.$route.params.text2
  }
}
</script>

<style>
  .actice{
    background-color: azure;
    width: auto;
    height: auto;
  }

</style>
