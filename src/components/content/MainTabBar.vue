<template>
  <tab-bar class="home-tabbar">
      <tarbar-item path="/home" activecolor="blue" fontweight="bold">
        <img src="../../assets/img/home.svg" slot="icon-name" alt="">
         <img src="../../assets/img/home-active.svg" slot="icon-name-active" alt="">
        <div slot="text-name">首页</div>
      </tarbar-item>
       <tarbar-item path="/kind">
        <img src="../../assets/img/fenlei.svg" slot="icon-name" alt="">
          <img src="../../assets/img/fenlei-active.svg" slot="icon-name-active" alt="">
        <div slot="text-name">分类</div>
      </tarbar-item>
       <tarbar-item path="/cart">
        <img src="../../assets/img/cart.svg" slot="icon-name" alt="">
        <img src="../../assets/img/cart-active.svg" slot="icon-name-active" alt="">
        <div slot="text-name">购物车</div>
      </tarbar-item>
       <tarbar-item path="/profile">
        <img src="../../assets/img/profile.svg" slot="icon-name" alt="">
         <img src="../../assets/img/profile-active.svg" slot="icon-name-active" alt="">
        <div slot="text-name">我的</div>
      </tarbar-item>
    </tab-bar>
</template>

<script>
import TabBar from '../common/tabbar/TabBar'
import TarbarItem from '../common/tabbar/TarbarItem'
export default {
    components:{
        TabBar,
        TarbarItem
    }

}
</script>

<style>
.home-tabbar{
  height: 49px;
}
</style>