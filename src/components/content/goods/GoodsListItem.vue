<template>
  <div class="goods">
      <img :src="goodsitem.show.img" alt="">
        <div class="goods-info">
            <p>{{goodsitem.title}}</p>
      <span class="info">{{goodsitem.orgPrice}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
        </div>
    
  </div>
</template>

<script>
export default {
props:{
    goodsitem:{
        type:Object,
        default(){
            return {}
        }
    }
}
}
</script>

<style>
@import '../../../assets/css/base.css';
.goods {
    width:48%;
    padding-bottom: 40px;
    position: relative;
  }
  .goods img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    z-index: 1.5;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  /* .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  } */
  span{
      padding: 0px 3px 0px;
  }
</style>