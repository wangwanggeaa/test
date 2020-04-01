<template>
  <div>
       <swiper>
            <swiper-item v-for="item in banner">
            <a :href="item.link">
                <img :src="item.image" alt="">
            </a>
            </swiper-item>
        </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper/index'
export default {
data(){
    return {
        
    }
},
props:{
    banner:{
        type:Array,
        default(){
            return []
        }

    }
},
components:{
    Swiper,
    SwiperItem
}
}
</script>

<style>

</style>