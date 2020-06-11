<template>
        <div id = 'banner_2' style = 'background-color:transparent;'>
        <div id = 'reg' class = 'lr'>
            <div id = 'logo'>
                <div style = 'vertical-align: middle; color: #7fc181;'>House Tour</div>
            </div>
            <div id = 'search_box'>
                <div id = 'search_logo'>
                    <svg viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" style="height:18px;width:18px;display:block;fill:currentColor">
                        <path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path>
                    </svg>
                </div>
                <div style='float:left; '>
                    <input ref = 'keyword' type=  'text' id = 'search_input' placeholder="搜索" autocomplete="off" v-on:keyup.enter = 'searchHandler'/>
                </div>
            </div>
            <button class ='btn' v-if = '!isUser' @click = 'risVisible = true, lisVisible = false' >注册</button>
          <div class = 'grey' v-if = 'risVisible | lisVisible'></div>
          <register v-if = 'risVisible'  @on-close = 'close_r' @register = 'register' ></register>
          <button class ='btn' v-if = '!isUser' @click = 'lisVisible =true,risVisible = false'>登陆</button>
          <login v-if = 'lisVisible' @on-close = 'close_l' @login = 'login'></login>
          <button class ='btn' v-if = 'isUser' @click = 'logout'>退出</button>
          <button class ='btn'  ref= 'userId' v-if = 'isUser' @click = 'myZone' >{{user_id}}</button>
          <button class ='btn' style = 'width:180px;' @click = 'newpost'>发布我的House Tour</button>
          <button class = 'btn' @click = 'returnHomePage'>返回首页</button>
        </div>
        <div>
            <card v-for='(item,index) in items' :item = 'item' :key = 'index' ></card>
        </div>
    </div>
</template>
<script>
import request from '@/server/request.js'
import Register from '@/components/register.vue'
import Login from '@/components/login.vue'
import Card from '@/components/card.vue'
export default {
  name: 'search',
  data () {
    return {
      keyword: this.$route.params.keyword,
      risVisible: false,
      lisVisible: false,
      isUser: false,
      user_id: '',
      items: []
    }
  },
  mounted: function () {
    var searchKeyword = this.$route.params.keyword
    if (searchKeyword) {
      this.$refs.keyword.value = searchKeyword
    }
  },
  components: {
    Register,
    Login,
    Card
  },
  methods: {
    close_r () {
      this.risVisible = false
    },
    register (name) {
      this.risVisible = false
      this.user_id = name
      this.isUser = true
    },
    close_l () {
      this.lisVisible = false
    },
    login (name) {
      this.lisVisible = false
      this.user_id = name
      this.isUser = true
    },
    async logout () {
      let status = await request.post('/logout')
      if (status.status === 1) {
        this.user_id = ''
        this.isUser = false
      }
    },
    newpost () {
      this.$router.push('/newhouse')
    },
    searchHandler () {
      var info = this.$refs.keyword.value
      if (info.length <= 30) {
        this.search(info)
      }
    },
    search: async function (info) {
      let items = await request.post('/search', info)
      console.log(items)
    },
    returnHomePage () {
      this.$router.push('/')
    }
  }
}
</script>
