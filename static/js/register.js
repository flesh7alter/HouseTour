Vue.component('register', {
    template: '#register-template',
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

var demo = new Vue({
    el: '#reg',
    data: {
        risVisible:false,
        lisVisible:false
    },
    methods:{
        close_r(){

            this.risVisible = !this.risVisible;
        },
        close_l(){

            this.lisVisible = !this.lisVisible;
        }
    }
})