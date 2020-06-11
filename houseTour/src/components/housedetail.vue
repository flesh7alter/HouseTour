<template>
<div>
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
                <div style='float:left;'>
                    <input type=  'text' ref = 'search_info' id = 'search_input' placeholder="搜索" autocomplete="off" v-on:keyup.enter = 'searchInfo'/>
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
    </div>
    <!-- <div>
        <img class = 'pic_card' />
    </div> -->
    <div class = 'small_banner' style = 'padding-top:100px; margin-top:-10px; height:60px;'>
        <a href='#detail'>
            <button class = 'btn' style = 'color:black; float:left; text-align:left;'>详情</button>
        </a>
        <button class = 'btn' style = 'color:black; float:left; text-align:left;'>评论</button>
    </div>
    <div class = 'small_banner'>
        <div id = 'house_title'>【屿岸】清新日式 夏の岚丨IMAX巨幕影院丨近市中心 新街口 德基丨近夫子庙丨地铁站设计师民宿
        </div>
    </div>
    <div class = 'small_banner' style = 'padding-top:0;height:30px;'>
        <span class = "city">南京市</span>
        <span class = "city">公寓</span>
    </div>
    <div id = 'post'>
        <a name = 'detail'></a>
        <post></post>
    </div>
</div>
</template>
<script>
import Register from '@/components/register.vue'
import Login from '@/components/login.vue'
import Post from '@/components/post.vue'
import request from '@/server/request.js'
export default {
  name: 'housedetail',
  data () {
    return {
      risVisible: false,
      lisVisible: false,
      isUser: false,
      user_id: ''
    }
  },
  components: {
    Register,
    Login,
    Post
  },
  async mounted () {
    let currentuser = await request.post('/getcurrentuser')
    if (currentuser.id !== '') {
      this.isUser = true
      this.user_id = currentuser.id
    }
  },
  methods: {
    close_r () {
      this.risVisible = false
    },
    close_l () {
      this.lisVisible = false
    },
    register (name) {
      this.risVisible = false
      this.user_id = name
      this.isUser = true
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
    searchInfo () {
      var info = this.$refs.search_info.value
      if (info === '') {
        return
      }
      this.$router.push({ name: 'search', params: { keyword: info } })
    },
    returnHomePage () {
      this.$router.push('/')
    }
  }
}
</script>
