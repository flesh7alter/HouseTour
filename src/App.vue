<template>
    <div id = 'banner'> 
        <div id = 'reg' class = 'lr'>
            <div id = 'logo'>
                <div style = 'vertical-align: middle;'>House Tour</div>
            </div>
            <div id = 'search_box'>
                <div id = 'search_logo'>
                    <svg viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" style="height:18px;width:18px;display:block;fill:currentColor">
                        <path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path>
                    </svg>
                </div>
                <div style='float:left; width: 380px;'>
                    <input type=  'text' id = 'search_input' placeholder="搜索"onmouseout = 'short_input()' onmouseover="long_input()"/>
                </div>
            </div>
            <button class ="btn"  @click = "risVisible = true, lisVisible = false" >注册</button>
            <div class = 'grey' v-if = 'risVisible | lisVisible'></div>
            <register v-if = 'risVisible' title = "注册" @on-close = 'close_r' @register = 'register'></register>
            <button class ='btn' style = 'width:180px;'>发布我的House Tour</button>
        </div>
    </div>
</template>

<script>
// import Card from './components/card.vue';
import Register from './components/register.vue'
// import Login from './components/login.vue
export default {
  name: 'app',
  components:{
    Card,
    Register,
    Login
  }
  data(){
    return{
      risVisible:false,
      lisVisible:false,
    }
  methods:{
    close_r(){

            this.risVisible = !this.risVisible;
        },
        close_l(){

            this.lisVisible = !this.lisVisible;
        }
  }
  }
}
</script>