import Vue from 'vue'
import Router from 'vue-router'
import Houses from '@/components/HelloWorld'
import houseDetail from '@/components/housedetail'
import newPost from '@/components/newpost'
import search from '@/components/search'
import register from '@/components/register'
import myZone from '@/components/myZone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Houses',
      component: Houses
    },
    {
      path: '/house/:id',
      name: 'House',
      component: houseDetail
    },
    {
      path: '/newhouse',
      name: 'newHouse',
      component: newPost
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/reg',
      name: 'register',
      component: register
    },
    {
      path: '/myZone',
      name: 'myZone',
      component: myZone
    }
  ]
})
