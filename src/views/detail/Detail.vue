<template>
  <div id="detail">
      <detail-navbar class="detail-navbar" ref="navbar" @itemclick="itemclick"></detail-navbar>
      <div>{{$store.state.productlist}}</div>
     <scroll class="scroll" ref="scroll" :probeType="3" @scroll="contentScroll">
         
             <detail-swiper :top-images="topimage"></detail-swiper>
             <goods-desc :goodsmessage="goods"></goods-desc>
             <detail-shop-info :shop="Shop"></detail-shop-info>
             <detail-goods-info :detail-info="detailinfo" @imageload="loadimage"></detail-goods-info>
             <detail-params-info :param-info="goodsinfo" ref="param"></detail-params-info>
             <comment-info :comment-info="commentinfo" ref="comment"></comment-info>
             <good-list :goods="recommendgoods" ref="recommend"></good-list>
          
     </scroll>
     <detail-bottom-bar @addcart="addToCart"></detail-bottom-bar>
     
  </div>
</template>

<script>
import {detailgetdata,goodsinfo,Shop,detailinfo,GoodsParam,detailgoods } from '../../network/datail'

import DetailNavbar from './detailchildren/DetailNavbar'
import DetailSwiper from './detailchildren/DetailSwiper'
import GoodsDesc from './detailchildren/GoodsDesc'
import DetailShopInfo from './detailchildren/DetailShopInfo'
import DetailGoodsInfo from './detailchildren/DetailGoodsInfo'
import DetailParamsInfo from './detailchildren/DetailParamInfo'
import CommentInfo from './detailchildren/CommentInfo'
import DetailBottomBar from './detailchildren/DetailBottomBar'
import GoodList from '../../components/content/goods/GoodList'

import Scroll from '../../components/common/scroll/Scroll'

import {debounce} from '../../common/utils'
import {itemListenerMixin} from '../../common/mixin'
export default {
    name:'Detail',
components:{
    DetailNavbar,
    DetailSwiper,
    GoodsDesc,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    CommentInfo,
    DetailBottomBar,
    Scroll,
    GoodList,
   
},
data(){
    return {
        iid:null,
        topimage:null,
        goods:{},
        Shop:{},
        detailinfo:{},
        goodsinfo:{},
        commentinfo:{},
        recommendgoods:[],
        itemImgListener:null,
        tabTitleYs:[0],
        currentindex: 0
    }
},
mixins:[itemListenerMixin],
created(){
    this.iid = this.$route.params.iid
    console.log(this.iid);
    
     detailgetdata(this.iid).then(res => {
         const data = res.data.result
         console.log(data);
         this.goods = new goodsinfo(data.columns,data.itemInfo,data.shopInfo.services)
         this.Shop = new Shop(data.shopInfo)
         this.detailinfo = new detailinfo(data.detailInfo)
         this.goodsinfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

       
         
        this.topimage = data.itemInfo.topImages
        if(data.rate.cRate){
                this.commentinfo = data.rate.list[0]
        }

        detailgoods().then(res => {
            this.recommendgoods = res.data.data.list
            console.log(res);
            
        })  
      /*   this.$nextTick(() => {//$nextTick请求数据完后等待一会才能拿到数据
                this.tabTitleYs = []
                this.tabTitleYs.push(0)
                this.tabTitleYs.push(-this.$refs.param.$el.offsetTop)
                this.tabTitleYs.push(-this.$refs.comment.$el.offsetTop)
                this.tabTitleYs.push(-this.$refs.recommend.$el.offsetTop)
                console.log(this.tabTitleYs);  
        }) */ //数据请求到了，但是图片还未加载完成
       
        
        console.log(data.rate.list[0]);
        
        console.log(res.data.result.itemInfo.topImages);
        
        
    })
},
mounted(){
        
},
/* updated()
        {
        this.tabTitleYs = []
        this.tabTitleYs.push(0)
        this.tabTitleYs.push(-this.$refs.param.$el.offsetTop)
        this.tabTitleYs.push(-this.$refs.comment.$el.offsetTop)
        this.tabTitleYs.push(-this.$refs.recommend.$el.offsetTop)
        console.log(this.tabTitleYs);
}, */
/* mounted(){
    const refresh = debounce(this.$refs.scrolls.refresh,500)
    this.itemImgListener = () => {
        refresh();
    }
    this.$bus.$on('imageload',this.itemImgListener
        
    )
    
}, */
methods:{
    loadimage(){
        // this.$refs.scroll.refresh();
        this.refresh()
        // console.log('-----');
        // 选项卡切换回到对应区域
        this.tabTitleYs = []
        this.tabTitleYs.push(0)
        this.tabTitleYs.push(this.$refs.param.$el.offsetTop)
        this.tabTitleYs.push(this.$refs.comment.$el.offsetTop)
        this.tabTitleYs.push(this.$refs.recommend.$el.offsetTop)
        this.tabTitleYs.push(Number.MAX_VALUE)
        console.log(this.tabTitleYs);

    },
    itemclick(index){
        // console.log(index);
        this.$refs.scroll.scrollTo(0,-this.tabTitleYs[index],400)
        
    },
    contentScroll(position){
        
        // console.log(position.y);
         const positionY = -position.y
        for(let i = 0; i < this.tabTitleYs.length; i++){
            // parseInt(i);
            if((this.currentindex !== i && i < this.tabTitleYs.length - 1 && positionY >= this.tabTitleYs[i] && positionY < this.tabTitleYs[i+1]) || 
            i === this.tabTitleYs.length - 1 && positionY >=this.tabTitleYs[this.tabTitleYs.length - 1]){
                this.currentindex = i
                this.$refs.navbar.currentindex = this.currentindex
                console.log(i);
                
            }
     /*        if(this.currentindex !== i && i < this.tabTitleYs.length - 1 && positionY >= this.tabTitleYs[i] && positionY < this.tabTitleYs[i+1])
            {   this.currentindex = i
                console.log(i);
                  this.$refs.navbar.currentindex = this.currentindex
                
            } */
        }
        
    },
    addToCart(){
        console.log('------');
        const product = {
            title:this.goods.title,
            desc:this.goods.desc,
            price:this.goods.lowNowPrice,
            iid:this.$route.params.iid
            
        };
        this.$store.commit('addToCart',product)
        
        
    }
},
destroyed(){
    console.log('销毁');
    this.$bus.$off('imageload',this.itemImgListener)
    
}

}
</script>

<style>
.detail-navbar{
    position: relative;
    z-index: 9;
    background-color: #fff;
}
#detail{
    position: relative;
    z-index: 9;
    background-color: white;
   height: 100vh;
}
.scroll{
    height: calc(100% - 44px);
    /* position: absolute;
    top: 44px;
    bottom: 0px;
    left:0px;
    right: 0px; */
}
</style>