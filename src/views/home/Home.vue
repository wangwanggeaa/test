<template>
<div class="home">
    <nav-bar class="home-nav">
        <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="home-scroll" ref="scroll" @scroll="homescroll" :probe-type="3" @pullingUp="loadmore">
        <home-swiper :banner="banner"></home-swiper>
        <recommand-view :recommand="recommend"></recommand-view>
        <feature-view></feature-view>
        <tab-control class="Tabcontrol" :titles="['流行','新款','精选']" @tarclick="tarclick"></tab-control>
        <goods-list :goods="goods[currenttype].list"></goods-list>
    </scroll>
    <get-back @click.native="backtop" v-show="isorshow"></get-back>
    
   
</div>
</template>

<script>
import GetBack from '../../components/content/getback/GetBack'
import Scroll from '../../components/common/scroll/Scroll'
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
    GetBack,
    Scroll,
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
       currenttype:'pop',
       isorshow:false
       

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
        // console.log(index);
        switch(index){
            case 0 : this.currenttype = 'pop'
            break;
            case 1 : this.currenttype = 'new'
            break;
            case 2 : this.currenttype = 'sell'
            break;
        }
        
    },
    backtop(){//回到顶部
        // console.log(this.$refs.scroll.bscroll);
        
        // this.$refs.scroll.bscroll.scrollTo(0,0,50000)
        this.$refs.scroll.backtop(0,0);
    
        
    },
    homescroll(position){//监听滚动
        // console.log(position);
        // this.isorshow = -position.y > 1000 ? true : false;
        this.isorshow = -position.y > 1000
        
    },
    loadmore(){
        console.log('上拉加载更多');
        this.gethomegoods(this.currenttype);
        // this.$refs.scroll.bscroll.refresh();
        this.$refs.scroll.refresh()
        
    },

    /*
    以下是网络请求的方法 
     */
    homemultidata(){
         homemultidata().then(res => {
        // console.log(res);
        
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
            // console.log(res);
            
            
            // console.log(res);
            
           this.goods[type].list.push(...res.data.data.list)
           this.goods[type].page += 1 
        //    this.$refs.scroll.bscroll.finishPullUp()
        this.$refs.scroll.loadmore()
            
        })
    }
}
}
</script>

<style>
@import '../../assets/css/base.css';
.home{
    position: relative;
}
.home-nav{
    color: white;
    background-color: var(--color-tint);
    position: absolute;
       top: 0px;
       left: 0px;
       right: 0px;
       
}
.Tabcontrol{
    position: sticky;
    top: 44px;
    z-index: 4;
}
.home-scroll{
    position: absolute;
    top:44px;
    bottom:49px;
    left: 0px;
    right: 0px;
  
}

</style>