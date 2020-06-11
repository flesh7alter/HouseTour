
Vue.component('v-card', {
    template: `
    <a :href = "getRef(item.url)">
        <div class = 'card'>
            <div class = 'show_pic'></div>
            <div class = 'card_description'>
                <div class = 'city' style = 'padding-left:0px;'>{{item.city}}</div>
                <div class ='card_title'>{{item.title}}</div>
                <div class = 'author'>作者：{{item.author}}</div>
            </div>
        </div>
    </a>`,
    props: ['item'],
    data: function(){
        return {
            url:this.item.url
        }
    },
    methods:{
        house_detail(){
            console.log(this.item.url)
            window.location.href(this.item.url)
        },
        getRef: function(url){
            return this.item.url
        }
    }
    
})

var card_hot = new Vue({
    el: '#card_hot',
    data: {
        isShow: true,
        items:[
            {   title: "【一念情宿&潮流の物语】IMAX私人影院公寓·夫子庙•老门东•秦淮河•地铁3号线直达",
                id: 1,
                city:"上海",
                author:"despression",
                url:'/houses/1'
            },
            {   title: "【屿岸】清新日式 夏の岚丨IMAX巨幕影院丨近市中心 新街口 德基丨近夫子庙丨地铁站设计...", 
                id: 2,
                city:"南京",
                author:'pol'
            },
            {   title: "【掌宿77●麦田的歌】鼓楼医院/儿童医院/新街口/夫子庙/市中心/珠江路地铁/南京大学", 
                id: 3,
                city:"北京",
                author:'do'
            }
        ]
    },
    methods:{
        show(id){
            console.log(id)
        }
    }
})
var card_new = new Vue({
    el: '#card_new',
    data: {
        isShow: true,
        items:[
            {   title: "【一念情宿&潮流の物语】IMAX私人影院公寓·夫子庙•老门东•秦淮河•地铁3号线直达",
                id: 1,
                city:"上海",
                author:"despression",
                url:'/houses/1'
            },
            {   title: "【屿岸】清新日式 夏の岚丨IMAX巨幕影院丨近市中心 新街口 德基丨近夫子庙丨地铁站设计...", 
                id: 2,
                city:"南京",
                author:'pol'
            },
            {   title: "【掌宿77●麦田的歌】鼓楼医院/儿童医院/新街口/夫子庙/市中心/珠江路地铁/南京大学", 
                id: 3,
                city:"北京",
                author:'do'
            }
        ]
    },

    methods:{
        show(id){
            console.log(id)
        }
    }
})