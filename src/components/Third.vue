<template>
  <div id="third" :style="styles">
    <v-html :url="url2"></v-html>
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
      <el-input placeholder="请输入用户名" title="请输入用户名" clearable class="inp" key="key-name" v-model="name"></el-input>
    </template>
    <template v-else>
      <label :style="styless">邮箱</label>
      <el-input placeholder="请输入邮箱" title="请输入邮箱" class="inp" key="key-mail" v-model="email"></el-input>
    </template>
    <el-button type="primary" @click="hanldTog">切换输入类型</el-button>
    <ul :style="styless">
      <!-- of 可以代替in -->
      <template v-for="(book,index) in filterBooks">
        <li :key="index"> 书名: {{book.name}}</li>
        <li :key="index"> 作者: {{book.author}}</li>
      </template>
      <!-- <li v-for="(book ,index) in books" :key="index">{{book.name}}</li>-->
    </ul>
    <ul>
      <!-- 除了数组外,对象属性也是可以遍历的 有两个可选参数: index key-->
      <li v-for="(value,key,index) in user" :key="index">{{key}} : {{value}}</li>
    </ul>
    <div :style="styless">
      点击次数: {{ counter }}
    </div>
    <br/>
    <el-button type="info" @click="handleAdd()">点我 +1</el-button>
    <el-button type="info" round @click="handleAdd(10)">点我 +10</el-button>
    <el-button type="warning" round @click="handleDel()">点我 -1</el-button>
    <br/>
    <br/>
    <a class="a_1" href="https://github.com/haoxiaoyong1014?tab=repositories" @click="hanldClick('禁止打开',$event)">打开连接</a>
    <br/>
    <br/>
    <el-input placeholder="请点击回车键(Enter)" clearable class="inp" v-model="EN" @keyup.enter.native="subm()"></el-input>
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
      EN: 'enter',
      books: [
        {
          name: '《云边有个小卖部-时间》',
          author: '张嘉佳'
        },
        {
          name: '《时间简史》',
          author: '霍金'
        },
        {
          name: '《你坏》',
          author: '大冰'
        }
      ],
      iscolor: true,
      user: {
        name: '大冰',
        gender: '男',
        age: '26'
      },
      counter: 0,
      url2: ''
    }
  },
  methods: {
    hanldTog: function () {
      this.type = this.type === 'name' ? 'mail' : 'name'
    },
    handleAdd: function (count) {
      /* 如果count存在, count=count  否则count=1 神, 都不传默认值是1 */
      count = count || 1
      this.counter += count
    },
    open3 (message) {
      this.$message({
        message: message,
        type: 'warning'
      })
    },
    open4 (message) {
      this.$message({
        message: message,
        type: 'success'
      })
    },
    handleDel: function (count) {
      count = count || 1
      if (this.counter === 0) {
        this.counter = 0
        this.open3('警告哦，不能再减了')
      } else {
        this.counter -= count
      }
    },
    hanldClick: function (message, event) {
      /* 取消事件的默认动作  说明: 该方法将通知 Web 浏览器不要执行与事件关联的默认动作（如果存在这样的动作） event.cancelable默认值是 false ,当设置为 true 的时候preventDefault()方法失效 */
      // event.cancelable = true
      event.preventDefault()
      this.open3(message)
    },
    subm: function () {
      this.open4('恭喜你，这是一条成功消息')
    }
  },
  created: function () {
    /* 向数组中添加对象 */
    this.books.push({
      name: '《烟火人间》',
      author: '老舍'
    })
    this.$set(this.books, 4, {
      name: '《解忧杂货店》',
      author: '东野圭吾'
    })
    this.books.splice(4, 1, {
      name: '《七宗罪-间》',
      author: '安东尼·布鲁诺'
    })
    /* 改变数组的长度 */
    /* this.books.splice(1) */
    console.log(this.books.length)
    /* this.url2 = '/src/cart.html' */
  },
  computed: {
    /* 把带有时间二字的书名过滤出来  计算属性 filterBooks 依赖 books,但是不会修改 books */
    filterBooks: function () {
      return this.books.filter(function (book) {
        return book.name.match(/间/)
      })
    }
    /* sortedBooks: function () {
      return this.books.sort(function (a, b) {
        return a.name.length < b.name.length
      })
    } */
  }
}
</script>

<style scoped>
  .inp {
    width: auto;
    height: auto;
  }

  a:link {
    background-color: #B2FF99;
  }

  /* 未访问链接 */
  a:visited {
    background-color: #FFFF85;
  }

  /* 已访问链接 */
  a:hover {
    background-color: #FF704D;
  }

  /* 鼠标移动到链接上 */
  a:active {
    background-color: #FF704D;
  }

  /* 鼠标点击时 */
  a {
    text-decoration: none
  }
</style>
