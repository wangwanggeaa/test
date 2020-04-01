<template>
<div>
    <nav-bar class="home-nav">
        <div  slot="center">购物街</div>
    </nav-bar>
    <h1>首页</h1>
</div>
</template>

<script>
import NavBar from '../../components/common/NavBar'
export default {
components:{
    NavBar
}
}
</script>

<style>
@import '../../assets/css/base.css';
.home-nav{
    color: white;
    background-color: var(--color-tint);
}
</style>