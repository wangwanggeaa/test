<template>
  <div class="navbar">
      <div class="left" ><slot name="left"></slot></div>
       <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar{
    height: 44px;
    text-align: center;
    display: flex;
    line-height: 40px;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
}
.right{
    width: 60px;
    /* background-color: aqua; */
}
.center{
    flex: 1;
    /* background-color: black; */
}
.left{
    width: 60px;
    /* background-color: aqua; */
}
</style>