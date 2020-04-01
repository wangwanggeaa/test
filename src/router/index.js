import Vue from 'vue';
import Router from 'vue-router'
const Home = ()=>import('../views/home/Home')
const Like = ()=>import('../views/like/Like')
const Profile = ()=>import('../views/profile/Profile')
const Solution = ()=>import('../views/solution/Solution')
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
      path:'/like',
      component:Like
    },
    {
      path:'/solution',
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