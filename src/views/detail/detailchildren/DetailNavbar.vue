<template>
  <nav-bar>
          <div slot="left" >
              <img src="../../../assets/img/detail/back.svg" @click="backclick" alt="">
          </div>
          <div slot="center" class="center">
              <div v-for="(item,index) in titles" 
              :key="index" class="centeritem" 
              :class="{colorshow:index===currentindex}" @click="itemclick(index)">{{item}}</div>
          </div>
          
      </nav-bar>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar'
export default {
components:{
     NavBar 
},
data(){
    return{
        titles:['商品','参数','评论','推荐'],
        currentindex:0,
    }
},
methods:{
    itemclick(index){
        this.currentindex = index
        this.$emit('itemclick',index)
    },
    backclick(){
        this.$router.back()
    }
}
}
</script>

<style>
.center{
    display: flex;
    font-size: 13px;
}

.centeritem{
    flex: 1;
}
.center .colorshow{
    color: red;
}
#detail img{
    margin-top: 10px;
}
</style>