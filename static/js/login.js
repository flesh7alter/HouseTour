Vue.component('login', {
    template: '#login-template',
    props: {
        title:{
            type:String
        },
    },
    
    methods: {
        closeHandler(){
            this.$emit("on-close");
        },
        register(){
            this.$emit("on-close");
        }
    }
})

// var demo = new Vue({
//     el: '#log_in',
//     data: {
//         lisVisible:false
//     },
//     methods:{
//         close(){

//             this.lisVisible = !this.lisVisible;
//             console.log(this.lisVisible);
//         }
//     }
// })