<template>
<div>
    <nav-bar class="home-nav">
        <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommand-view :recommand="recommend"></recommand-view>
    <feature-view></feature-view>
    <ul>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
        <li>标签</li>
    </ul>
   
</div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import HomeSwiper from './homechildren/HomeSwiper'
import RecommandView from './homechildren/RecommandView'
import FeatureView from './homechildren/FeatureView'
import {homemultidata} from '../../network/home'
// import {Swiper,SwiperItem} from '../../components/common/swiper/index'
// import request from '../../network/request'
export default {
components:{
    NavBar,
    HomeSwiper,
    RecommandView,
    FeatureView

    
},
data(){
    return {
       banner:[],
       recommend:[],
       dKeyword:[],
       keywords:[]

    }
},
created(){
    
    homemultidata().then(res => {
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
        this.dKeyword = res.data.data.dKeyword.list;
        this.keywords = res.data.data.keywords.list;
        
    }).catch(error => {
        alert('error')
        
    })
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