<template>
    <div class='reg' >
            <div class = 'section'>
                <div style="float:right;">
                    <button style="margin:-20px;padding:20px;border-style:none;outline:none;background:transparent; cursor: pointer;" @click = 'closeHandler'>
                        <svg viewBox='0 0 24 24' role = 'img' style="height: 16px; width: 16px; display: block; fill: rgb(118, 118, 118);">
                            <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fill-rule = 'evenodd'></path>
                        </svg>
                    </button>
                </div>
                <div id = 'name'>注册</div>
                <div>
                    <div class = 'la tip' >用户昵称</div>
                    <div class = 'b'>
                        <input autofocus = 'true' ref = 'userId' class ='inp' placeholder = "ID" />
                    </div>
                </div>
                <div>
                    <div class = 'la tip' >设置密码</div>
                    <div class = 'b'>
                        <input ref= 'pwd' class ='inp' type='password' placeholder = "password" />
                    </div>
                </div>
                <div>
                    <div class = 'la tip' >再次输入密码</div>
                    <div class = 'b'>
                        <input ref = 'pwd2' class ='inp' type='password'  placeholder = "password" />
                    </div>
                </div>
                <div>
                    <p class = 'la tip' ref = 'r_tips' style = 'font-size:13px;margin-bottom: 0;margin-top:15px;margin-left:25%;'></p>
                </div>
                <div>
                    <button id = 'submit' @click = "registerHandler">立即注册</button>
                </div>
            </div>
        </div>
</template>
<script>
import request from '@/server/request.js'
export default {
  name: 'register',
  methods: {
    closeHandler () {
      this.$emit('on-close')
    },
    registerHandler: function () {
      var userPwd = this.$refs.pwd.value
      var userPwd2 = this.$refs.pwd2.value
      var userId = this.$refs.userId.value
      if (userId.length > 15) {
        this.$refs.r_tips.textContent = '用户名不符合要求'
      } else if (userPwd !== userPwd2) {
        this.$refs.r_tips.textContent = '密码不一致'
      } else {
        var info = {
          name: userId,
          pwd: userPwd
        }
        this.register(info)
      }
    },
    register: async function (info) {
      console.log(info)
      let reply = await request.post('/register', info)
      if (reply.status === 0) {
        this.$refs.r_tips.textContent = '用户名重复'
      } else {
        this.$emit('register', info.name)
      }
    }
  }
}
</script>
