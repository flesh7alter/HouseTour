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
          <button class ='btn'  @click = 'logout'>退出</button>
          <!-- <button class ='btn' >{{user_id}}</button> -->
          <button class ='btn' style = 'width:180px;' @click = 'newpost'>发布我的House Tour</button>
          <button class = 'btn' @click = 'returnHomePage'>返回首页</button>
        </div>
    </div>
    <div id = 'card_hot' style = 'width:100%; padding-top: 110px;'>
      <div>
          <div class = 'ptitle'>我的帖子</div>
      </div>
  </div>
  <div id = 'card_new' style = 'width:100%; padding-top: 70px;'>
    <div>
        <div class = 'ptitle'>我的草稿</div>
    </div>
  </div>
  </div>
</template>
<script>
import request from '@/server/request.js'
export default {
  name: 'housedetail',
  data () {
    return {
      user_id: ''
    }
  },
  async mounted () {
    let currentuser = await request.post('/getcurrentuser')
    if (currentuser.id !== '') {
      this.user_id = currentuser.id
    } else {
      this.$router.replace('/')
    }
  },
  methods: {
    returnHomePage () {
      this.$router.push('/')
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
    async logout () {
      let status = await request.post('/logout')
      if (status.status === 1) {
        this.user_id = ''
        this.$router.replace('/')
      }
    }
  }
}
</script>
