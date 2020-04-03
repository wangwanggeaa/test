<template>
  <div class="recommand">
      <div v-for="(item,index) in recommand" class="rditem" :key="index"> 
          <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
      </a>
      </div>
      
      
  </div>
</template>

<script>
export default {
props:{
    recommand:{
        type:Array,
        default(){
            return []
        }
    }
}
}
</script>

<style>
.recommand{
    display: flex;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
}
.rditem{
    flex: 1;
    padding: 2px 2px 2px;
}
.recommand img{
    width: 70px;
    height: 70px;
    margin-bottom: 2px;
}
</style>