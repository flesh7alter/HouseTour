
Vue.component('v-post', {
    template: `
    <div class = 'content'>{{content}}</div>`,
    props: ['content'],

    methods:{
        house_detail(){
            this.$emit("show_house",this.item.id)
        }
    }
    
})

var demo = new Vue({
    el: '#post',
    data: {
        isShow: true,
        content:"装修风格精装现代轻奢风1房1厅1厨1卫,\n 床品一客一换，1.8米*2.0米精品超大双人床,致力于为每位到来的客人提供舒适高品质的睡眠；小区闹中取静,道旁绿树环绕,房子独门独户,安静,舒适不受打扰；房间配置了独立的卫生间,厨房，空调、洗衣机、冰箱、吹风机、挂烫机、灶具、油烟机、电水壶、各种炊具一应俱全,您只需要准备简单的调味品就可以在此简单加工美食,在上海寻找自己家乡的昧道；24小时密码锁自助入住，热心房东全程服务,可帮联系有偿接送机、额外保洁等需求；"
    },
    methods:{
        show(id){
            console.log(id)
        }
    }
})