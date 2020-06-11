<template>
  <div>
    <div ref = 'banner' id = 'banner' :style = 'bg'>
      <div id = 'reg' class = 'lr'>
          <div id = 'logo'>
              <div style = 'vertical-align: middle;'>House Tour</div>
          </div>
          <div id = 'search_box'>
              <div id = 'search_logo'>
                  <svg viewBox='0 0 16 16' role='presentation' aria-hidden='true' focusable='false' style='height:18px;width:18px;display:block;fill:currentColor'>
                      <path d='m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7'></path>
                  </svg>
              </div>
              <div style='float:left; '>
                  <input ref = 'search_info' type=  'text' id = 'search_input' placeholder='搜索' autocomplete = 'off' v-on:keyup.enter = 'searchInfo'/>
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
      </div>
  </div>
  <div id = 'card_hot' style = 'width:100%; padding-top: 575px;'>
      <div>
          <div class = 'ptitle'>最热体验</div>
      </div>
      <div>
          <card v-for='(item,index) in items' :item = 'item' :key = 'index' ></card>
      </div>
  </div>
  <div id = 'card_new' style = 'width:100%; padding-top: 125px;'>
    <div>
        <div class = 'ptitle'>最新体验</div>
    </div>
    <div>
        <card v-for='(item,index) in items' :item = 'item' :key = 'index'></card>
    </div>
  </div>
  </div>
</template>

<script>
import Register from '@/components/register.vue'
import Login from '@/components/login.vue'
import Card from '@/components/card.vue'
import request from '@/server/request.js'
export default {
  name: 'Houses',
  data () {
    return {
      risVisible: false,
      lisVisible: false,
      isUser: false,
      user_id: '',
      bg: {
        backgroundImage: 'url(' + require('../assets/img/bg.jpg') + ')',
        backgroundPosition: 'center',
        backgroundSize: '100% 650px'
      },
      items: [
        {title: '【一念情宿&潮流の物语】IMAX私人影院公寓·夫子庙•老门东•秦淮河•地铁3号线直达',
          id: 1,
          city: '上海',
          author: 'despression'
        },
        { title: '【屿岸】清新日式 夏の岚丨IMAX巨幕影院丨近市中心 新街口 德基丨近夫子庙丨地铁站...',
          id: 2,
          city: '南京',
          author: 'pol'
        },
        { title: '【掌宿77●麦田的歌】鼓楼医院/儿童医院/新街口/夫子庙/市中心/珠江路地铁/南京大学',
          id: 3,
          city: '北京',
          author: 'do'
        }
      ]
    }
  },
  components: {
    Register,
    Login,
    Card
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
      if (this.isUser === true) {
        this.$router.push('/newhouse')
      }
    },
    searchInfo () {
      var info = this.$refs.search_info.value
      if (info === '') {
        return
      }
      this.$router.push({ name: 'search', params: { keyword: info } })
    },
    myZone () {
      this.$router.push('/myZone')
    }
  }
}
</script>
