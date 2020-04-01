<template>
  <div id="TarBar">
     <!--  <div class="TarBaritem">
          <img src="../../assets/img/tabbar/home.svg" alt="">
          <div>首页</div>
          </div>
      <div class="TarBaritem">
          <img src="../../assets/img/tabbar/like.svg" alt="">
          <div>喜欢</div>
          </div>
      <div class="TarBaritem">
          <img src="../../assets/img/tabbar/solution.svg" alt="">
          <div>客服</div>
        </div>
      <div class="TarBaritem">
          <img src="../../assets/img/tabbar/profile.svg" alt="">
          <div>我的</div>
          </div> -->
          <slot></slot>
  </div>
</template>

<script>
export default {
    

}
</script>

<style>
/* @import '../../assets/css/tabbar/Tabbar.css' */
*{
    margin: 0px;
    padding: 0px;
}
#TarBar{
    display:flex ;
    position: fixed;
    left: 0px;
    bottom: 0px;
    right: 0px;
    background-color: #f6f6f6;
    box-shadow: 0px -10px 10px rgba(100,100, 100, 0.8);
    
}

</style>