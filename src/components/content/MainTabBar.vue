<template>
  <tab-bar>
      <tarbar-item path="/home" activecolor="blue" fontweight="bold">
        <img src="../../assets/img/home.svg" slot="icon-name" alt="">
         <img src="../../assets/img/home-active.svg" slot="icon-name-active" alt="">
        <div slot="text-name">首页</div>
      </tarbar-item>
       <tarbar-item path="/like">
        <img src="../../assets/img/Like.svg" slot="icon-name" alt="">
          <img src="../../assets/img/like-active.svg" slot="icon-name-active" alt="">
        <div slot="text-name">喜欢</div>
      </tarbar-item>
       <tarbar-item path="/solution">
        <img src="../../assets/img/solution.svg" slot="icon-name" alt="">
        <img src="../../assets/img/solution-active.svg" slot="icon-name-active" alt="">
        <div slot="text-name">客服</div>
      </tarbar-item>
       <tarbar-item path="/profile">
        <img src="../../assets/img/profile.svg" slot="icon-name" alt="">
         <img src="../../assets/img/profile-active.svg" slot="icon-name-active" alt="">
        <div slot="text-name">我的</div>
      </tarbar-item>
    </tab-bar>
</template>

<script>
import TabBar from '../common/TabBar'
import TarbarItem from '../common/TarbarItem'
export default {
    components:{
        TabBar,
        TarbarItem
    }

}
</script>

<style>

</style>