<template>
  <div id="secondcomponent">
    <ul>
      <li>
        <label>姓名</label>
        <span>{{name}}</span>
        <input type="text" v-model="name"/>
      </li>
      <li>
        <label>年龄</label>
        <span>{{age}}</span>
        <input type="text" v-model="age"/>
      </li>
    </ul>
    <cart :myName= "name"  :my-age= "age"></cart> <!--组件之间的复用-->
    <h1>I am another page</h1>
    <a v-bind:href="author">博客链接教程</a>
    总价: {{prices}} 折后价: {{ text2 }}
    <p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
    <div :class="{'actice': isActice}">这是一个 div</div>
    <div class="static" :class="{'active':isActice,'error': isError}">这个 div 的 class 是动态的而且有多个</div>
    <div :class="classes">这也是一个div</div>
    <p v-if="show">这是一段文本</p>
    <button v-on:click="handleColse">点击隐藏上面的一段文本</button>
    <button :class="clazz">点我改变class属性</button>
    <!--<ul>
    <li v-for ="(article,index) in articles" :key="index">
      {{article.title}}`
    </li>
  </ul>-->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h1 style="line-height: 36px; color: #20A0FF">豆瓣电影排行榜</h1>
      </div>
      <div v-for="(article,index) in articles" :key="index" class="text item">
        {{article.title}}

      </div>
    </el-card>
  </div>
</template>

<script>
import cart from './cart.vue'
export default {
  /* name: 'secondcomponent', */
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
      isError: true,
      error: null,
      size: 'large',
      disabled: true,
      name: 'haoxy',
      age: 23
    }
  },
  components: {cart},
  /* 计算属性 */
  computed: {
    prices: function () {
      var prices = 0
      for (var i = 0; i < this.package1.length; i++) {
        prices += this.package1[i].price * this.package1[i].count
      }
      for (var j = 0; j < this.package2.length; j++) {
        prices += this.package2[j].price * this.package2[j].count
      }
      return prices
    },
    classes: function () {
      return {
        active: this.isActice && !this.error,
        'text_fail': this.error && this.error.type === 'fail'

      }
    },
    /* 示例中的样式btn会始终应用，当数据size不为空的时候，
        * 会应用样式前缀btn- 后加上size的值，当数据disabled为真时
        * 会应用样式btn-disabled,所以结果是：<button class="btn btn-large btn-disabled">点我改变class属性</button>
        * */
    clazz: function () {
      return [
        'btn',
        {
          ['btn-' + this.size]: this.size !== '',
          'btn-disabled': this.disabled
        }

      ]
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
  },
  created: function () {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
      headers: {},
      emulateJSON: true
    }).then(function (response) {
      /* 这里是处理正确的回调 */
      this.articles = response.data.subjects
    }, function (response) {
      /* 这里处理错误回调 */
      console.log(response)
    }
    )
  }
}
</script>

<style>
  .actice {
    background-color: azure;
    width: auto;
    height: auto;
  }

</style>
