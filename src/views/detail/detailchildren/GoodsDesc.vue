<template>
  <div v-if="Object.keys(goodsmessage).length !==0 " class="base-info">
      <p class="title">{{goodsmessage.title}}</p>
      <div class="price">
          <span class="n-price">{{goodsmessage.price}}</span>
          <span class="o-price">{{goodsmessage.oldPrice}}</span>
          <span class="desc" :style="{backgroundColor:goodsmessage.discountBgColor}">{{goodsmessage.discountDesc}}</span>
      </div>
      <div class="columns">
          <span>{{goodsmessage.columns[0]}}</span>
            <span>{{goodsmessage.columns[1]}}</span>
            <span>{{goodsmessage.services[goodsmessage.services.length - 1].name}}</span>
      </div>
      <div class="info-service">
          <span v-for="index in goodsmessage.services.length - 1" :key="index" class="info-service-item">
              <img :src="goodsmessage.services[index - 1].icon" alt="">
              <span>{{goodsmessage.services[index - 1].name}}</span>
          </span>
      </div>
    
  </div>
</template>

<script>
export default {
    props:{
        goodsmessage:{
            type:Object,
            default(){
                return {}
            }
            
        }
    }
}
</script>

<style>
.base-info{
    color: grey;
}
.title{
    margin-top: 15px;
    font-size: 17px;
    color: black;
}
.price{
    margin: 10px 0px 15px;
}
.price .n-price{
    font-size: 24px;
    color: red;
}
.price .o-price{
    margin-left: 5px;
    text-decoration: underline;
    font-size: 13px;
}
.desc{
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    /* background-color: var(--color-high-text); */
    /* background-color: red; */
    border-radius: 8px;
    margin-left: 5px;
    position: relative;
    top: -8px;
}
.columns{
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;/* 平分 */
}
.info-service{
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    border-bottom: 5px solid rgba(124, 214, 211, 0.1);

}
.info-service-item img {
    width: 12px;
    height: 14px;
    position: relative;
    top: 2px;
  }
  .info-service-item span {
    font-size: 13px;
    margin-left: 1px;
    color: #333;
    padding: 0px;
  }
</style>