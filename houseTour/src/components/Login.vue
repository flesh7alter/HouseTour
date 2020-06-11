<template>
     <div class='log' >
            <div class = 'section'>
                <div style="float:right;">
                    <button style="margin:-20px;padding:20px;border-style:none;outline:none;background:transparent; cursor: pointer;" @click = 'closeHandler'>
                        <svg viewBox='0 0 24 24' role = 'img' style="height: 16px; width: 16px; display: block; fill: rgb(118, 118, 118);">
                            <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fill-rule = 'evenodd'></path>
                        </svg>
                    </button>
                </div>
                <div id = 'name'>登陆</div>
                <div>
                    <div class = 'la tip' >用户昵称</div>
                    <div class = 'b'>
                        <input ref= 'l_userId' class ='inp' placeholder = "ID" />
                    </div>
                </div>
                <div>
                    <div class = 'la tip' >密码</div>
                    <div class = 'b'>
                        <input ref = 'l_pwd' class ='inp' type='password' placeholder = "password" />
                    </div>
                </div>
                <div>
                    <div class = 'la tip' ref = 'l_tips' style = 'font-size:13px;margin-bottom: 0;margin-top:15px;margin-left:25%;'></div>
                </div>
                <div>
                    <button id = 'submit' @click = "loginHandler">立即登陆</button>
                </div>
            </div>
        </div>
</template>
<script>
import request from '@/server/request.js'
export default {
  name: 'login',
  methods: {
    closeHandler () {
      this.$emit('on-close')
    },
    loginHandler () {
      var userPwd = this.$refs.l_pwd.value
      var userId = this.$refs.l_userId.value
      if (userId.length > 15) {
        this.$refs.l_tips.textContent = '用户名不符合要求'
      } else {
        var info = {
          name: userId,
          pwd: userPwd
        }
        this.login(info)
      }
    },
    login: async function (info) {
      let data = await request.post('/login', info)
      if (data.status === 0) {
        this.$refs.l_tips.textContent = '用户名或密码错误'
      } else {
        this.$emit('login', info.name)
      }
    }
  }
}
</script>
