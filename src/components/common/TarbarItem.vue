<template>
<div class="TarBaritem" @click="itemclick">
    <div v-if="!istrue"><slot  name="icon-name"></slot></div>
    <div  v-else><slot name="icon-name-active"></slot></div>
     
    
    <div :style="getcolor"><slot name="text-name" ></slot></div>
    
    
</div>
  
</template>

<script>
export default {
    data(){
        return{
            // istrue:true,
            
        }
    },
    props:{
        path:String,
        activecolor:{
            type:String,
            default:'red'
        },
    },
    methods:{
        itemclick(){
            
            
            this.$router.replace(this.path)
            
        }
    },
    computed:{
        istrue(){
            // return this.$route.path.indexOf(this.path)!==-1
            return this.$route.path == this.path
        },
        getcolor(){
         return   this.istrue ? {color:this.activecolor} : {}
        }
    }

}
</script>

<style>
img{
    height: 24px;
    width: 24px;
    /* padding: 0px;
    margin: 0px; */
    margin-bottom: 2px;
}

*{
    margin: 0px;
    padding: 0px;
}
.TarBaritem{
    flex:2;
    text-align: center;
    height: 49px;

}
.isred{
    color: red;
    
}

</style>