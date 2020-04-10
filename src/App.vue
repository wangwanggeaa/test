<template>
  <div id="app">
   <keep-alive exclude="Detail">
      <router-view></router-view>
   </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import {request} from './network/request'
import MainTabBar from './components/content/MainTabBar';
// import TabBar from './components/common/TabBar';
// import TabbarItem from './components/common/TarbarItem'
export default {
  name: 'App',
  components: {
    MainTabBar,
  },
  // created(){
  //   request({
  //     url:'/home/multidata'
  //   }).then(res => {
  //     console.log(res);
      
  //   }).catch(error => {
  //     console.log(error);
      
  //   })

  // }
}
</script>

<style>

</style>
