<template>
  <div>
       <swiper>
            <swiper-item  v-for="(item,index) in banner" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="imageload">
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
        isimageload:false
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
},
methods:{
    
    imageload(){
        if(!this.isimageload){
            console.log('------');
            this.$emit('imageloaded')
            this.isimageload = true;
        }
       
        
    }
}
}
</script>

<style>

</style>