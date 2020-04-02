<template>
<div>
    <nav-bar class="home-nav">
        <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommand-view :recommand="recommend"></recommand-view>
    <feature-view></feature-view>
    <tab-control class="Tabcontrol" :titles="['流行','新款','精选']" @tarclick="tarclick"></tab-control>
    <goods-list :goods="goods[currenttype].list"></goods-list>
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
       
    </ul>
   
</div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import TabControl from '../../components/content/TabControl'
import GoodsList from '../../components/content/goods/GoodList'

import HomeSwiper from './homechildren/HomeSwiper'
import RecommandView from './homechildren/RecommandView'
import FeatureView from './homechildren/FeatureView'

import {homemultidata,gethomegoods} from '../../network/home'
// import {Swiper,SwiperItem} from '../../components/common/swiper/index'
// import request from '../../network/request'
export default {
components:{
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    RecommandView,
    FeatureView,
    

    
},
data(){
    return {
       banner:[],
       recommend:[],
       dKeyword:[],
       keywords:[],
       goods:{
           'pop':{page:0,list:[]},
           'new':{page:0,list:[]},
           'sell':{page:0,list:[]}

       },
       currenttype:'pop'
       

    }
},
created(){
    
  this.homemultidata() 
  this.gethomegoods('pop')
  this.gethomegoods('new')
  this.gethomegoods('sell')

},
methods:{
    tarclick(index){
        console.log(index);
        switch(index){
            case 0 : this.currenttype = 'pop'
            break;
            case 1 : this.currenttype = 'new'
            break;
            case 2 : this.currenttype = 'sell'
            break;
        }
        
    },
    homemultidata(){
         homemultidata().then(res => {
        console.log(res);
        
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
        this.dKeyword = res.data.data.dKeyword.list;
        this.keywords = res.data.data.keywords.list;
        
    }).catch(error => {
        alert('error')
        
    });
    },
    gethomegoods(type){
        const page = this.goods[type].page
        gethomegoods(type,page + 1).then(res => {
            console.log(res);
            
            
            
           this.goods[type].list.push(...res.data.data.list)
           this.goods[type].page += 1 
            
        })
    }
}
}
</script>

<style>
@import '../../assets/css/base.css';
.home-nav{
    color: white;
    background-color: var(--color-tint);
}
.Tabcontrol{
    position: sticky;
    top: 40px;
    z-index: 2;
}
</style>