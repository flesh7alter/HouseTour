Vue.component('login', {
    template: `
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
                        <input ref= 'l_userId' class ='inp' placeholder = "ID" ></input>
                    </div>
                </div>
                <div>
                    <div class = 'la tip' >密码</div>
                    <div class = 'b'>
                        <input ref = 'l_pwd'class ='inp' type='password'placeholder = "password" ></input>
                    </div>
                </div>
                <div>
                    <div class = 'la tip' ref = 'l_tips' style = 'font-size:13px;margin-bottom: 0;margin-top:15px;margin-left:25%;'></div>
                </div>
                <div>
                    <button id = 'submit' @click = "login">立即登陆</button>
                </div>
            </div>
        </div>
    `,
    props: {
        title:{
            type:String
        },
    },
    
    methods: {
        closeHandler(){
            this.$emit("on-close");
        },
        login(){
            var info = {
                name:this.$refs.l_userId.value,
                pwd:this.$refs.l_pwd.value,
            }
            this.$emit("login",info);
            
        }
    }
})