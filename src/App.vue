<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>

import MainTabBar from './components/content/MainTabBar';
// import TabBar from './components/common/TabBar';
// import TabbarItem from './components/common/TarbarItem'
export default {
  name: 'App',
  components: {
    MainTabBar,
  }
}
</script>

<style>

</style>
