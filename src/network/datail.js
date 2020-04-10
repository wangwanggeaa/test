import {request} from './request'
export function detailgetdata(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

export function detailgoods(){
    return request({
        url:'/recommend'
    })
}

export class goodsinfo{
    constructor(columns,itemInfo,services){
        this.columns = columns;
        this.oldPrice = itemInfo.oldPrice;
        this.price = itemInfo.price;
        this.discountBgColor = itemInfo.discountBgColor;
        this.discountDesc = itemInfo.discountDesc;
        this.services = services;
        this.title = itemInfo.title
    }
}
export class Shop {
    constructor(shopInfo) {
      this.logo = shopInfo.shopLogo;
      this.name = shopInfo.name;
      this.fans = shopInfo.cFans;
      this.sells = shopInfo.cSells;
      this.score = shopInfo.score;
      this.goodsCount = shopInfo.cGoods
    }
  }
  export class detailinfo{
      constructor(detailInfo){
          this.desc = detailInfo.desc;
          this.key = detailInfo.detailImage[0].key;
          this.list = detailInfo.detailImage[0].list
          this.imagelength = detailInfo.detailImage[0].list.length
      }
  }

  export class GoodsParam {
    constructor(info, rule) {
      // 注: images可能没有值(某些商品有值, 某些没有值)
      this.image = info.images ? info.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
    }
  }