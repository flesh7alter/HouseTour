Vue.component('register', {
    template:`
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
                        <input ref = 'userId' class ='inp' placeholder = "ID" />
                    </div>
                </div>
                <div>
                    <div class = 'la tip' >设置密码</div>
                    <div class = 'b'>
                        <input ref= 'pwd'class ='inp' type='password'placeholder = "password" />
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
    `,
    props: {
        title:{
            type:String
        },
    },
    // data: function(){
    //     return {
    //         r_tip:''
    //     }
    // },
    methods: {
        closeHandler(){
            this.$emit("on-close");
        },
        registerHandler(){
            u_pwd = this.$refs.pwd.value;
            u_pwd2 = this.$refs.pwd2.value;
            if(u_pwd != u_pwd2){
                this.$refs.r_tips.textContent = '密码不一致'
            }
            else{
                this.$refs.r_tips.textContent = ''
                var info = {
                    name:this.$refs.userId.value,
                    pwd:u_pwd,
                }
                this.$emit("register",info);
            }
           
        }
    }
})

var demo = new Vue({
    el: '#reg',
    data: {
        risVisible:false,
        lisVisible:false,
        isUser: false,
        // user_id: ''
    },
    methods:{
        close_r(){

            this.risVisible = !this.risVisible;
        },
        close_l(){

            this.lisVisible = !this.lisVisible;
        },
        register(info){

            
            axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            axios
                .post('/register',{
                    name: info.name,
                    pwd: info.pwd
                                   
                })
                .then((response)=>{
                    this.$children[0].$refs.r_tips.textContent = response.data.info                   
                    this.isUser = true
                    this.$refs.userId.textContent = 'depression'
                    this.close_r()
                }
            );
        },
        login(info){
            axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            axios
                .post('/login',{
                    name: info.name,
                    pwd: info.pwd
                                   
                })
                .then(function(response){
                    console.log(response.data);
                }
            );
        }
    }
})