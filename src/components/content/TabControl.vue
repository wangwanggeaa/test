<template>
  <div class="TabControl">
      <div v-for="(item,index) in titles" :Key="index" @click="itemclick(index)" 
      class="tabitem" :class="{active:currentindex == index}">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        itemclick(index){
            this.currentindex = index;
            this.$emit('tarclick',index)
        }
    },
    data(){
        return {
            currentindex:0
        }
    }

}
</script>

<style>
.TabControl{
    display: flex;
    text-align: center;
    background-color: white;
    line-height: 40px;
    height: 40px;
}
.tabitem{
    flex: 1;
}
.active{
    color:red;
   
}
.active span{
     border-bottom: 3px solid yellow;
     padding: 5px;
}
</style>