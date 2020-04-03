import Vue from 'vue';
import Router from 'vue-router'
const Home = ()=>import('../views/home/Home')
const Like = ()=>import('../views/kind/Kind')
const Profile = ()=>import('../views/profile/Profile')
const Solution = ()=>import('../views/cart/Cart')
Vue.use(Router)
const routes = 
[
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/kind',
      component:Like
    },
    {
      path:'/cart',
      component:Solution
    },
    {
      path:'/profile',
      component:Profile
    },
  ]
const router = new Router({
    routes,
    mode:'history'
})
export default router