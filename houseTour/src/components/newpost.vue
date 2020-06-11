<template>
<div>
<div id = 'banner_2' style = 'background-color:transparent;'>
        <div id = 'reg' class = 'lr'>
            <div id = 'logo' style = 'margin-top:20px;'>
                <div style = 'vertical-align: middle; color: #7fc181; '>House Tour</div>
            </div>
            <button class ="btn" style = 'color:black; postion: fixed;' @click = 'submit'>发布</button>
            <button class ="btn" style = 'color:black; postion: fixed' @click = 'saveScript'>保存</button>
            <button class ="btn" style = 'color:black; postion: fixed,' @click = 'returnHomePage'>返回首页</button>
        </div>
    </div>
    <div class = 'content' style = "padding-top: 90px; margin-left:30px;" id = 'editor'>
        <textarea ref = 'title' id = 'titleEditor' placeholder="添加标题" rows = '1' maxlength="50"></textarea>
        <div>
            <editor></editor>
        </div>
    </div>
    </div>
</template>
<script>
import Editor from '@/components/editor.vue'
import request from '@/server/request.js'
export default {
  name: 'newpost',
  components: {
    Editor
  },
  async mounted () {
    let currentuser = await request.post('/getcurrentuser')
    if (currentuser.id === '') {
      this.$router.replace('/')
    }
  },
  methods: {
    returnHomePage () {
      this.$router.push('/')
    },
    saveScript () {
      console.log(this.$children[0].$refs.myTextEditor._content)
    },
    submit () {
    //   var content = this.$children[0].$refs.myTextEditor._content
      var title = this.$refs.title.value
      console.log(title)
    }
  }
}
</script>
