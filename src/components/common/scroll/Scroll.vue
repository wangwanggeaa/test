<template>
  <div class="wrapper" ref="aaa">
     <div class="content">
          <slot></slot>
     </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    data(){
        return {
            bscroll:null
        }
    },
    props:{
        probetype:{
           type: Number,
           default:0
        },
        pullupload:{
            type:Boolean,
            default:true
        }
    },
    mounted(){
        //1.滚动
    this.bscroll = new BScroll(this.$refs.aaa,{
        probeType:this.probetype,
        pullUpLoad:this.pullupload
    })
    //2.监听滚动的位置
    this.bscroll.on('scroll',position => {
        // console.log(position);
        this.$emit('scroll',position)
        
    })
    //3.下拉加载更多
    this.bscroll.on('pullingUp',() => {
        console.log('下拉加载更多');
        this.$emit('pullingUp')
        
    })
},
methods:{
    backtop(x,y,time=500){
        this.bscroll.scrollTo(x,y,time)
    },
    loadmore(){
        this.bscroll.finishPullUp()
    },
    refresh(){
        this.bscroll.refresh()
    }
}
}
</script>

<style>

</style>