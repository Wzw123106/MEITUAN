import Vue from 'vue'
import VueRouter from 'vue-router'
import chenshi from '../components/chenshi.vue'
import head from '../components/head.vue'
import zhuce from '../components/zhuce.vue'
import denglu from '../components/denglu.vue'
import donghua from '../components/donghua.vue'

Vue.use(VueRouter)


const routes = [
  {
    path:'/',
    name:'head',
    component:head
  },
  {
    path:'/chenshi',
    name:'chenshi',
    component:chenshi
  },
  {
    path:'/zhuce',
    name:'zhuce',
    component:zhuce
  },
  {
    path:'/denglu',
    name:'denglu',
    component:denglu
  },
  {
    path:'/donghua',
    name:"donghua",
    component:donghua
  }
]

const router = new VueRouter({
  routes
})

export default router
