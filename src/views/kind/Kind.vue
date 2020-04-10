<template>
<div class="wrapper" ref="aaaa">
    <div class="content">
    </div>

</div>
</template>

<script>
import BSscroll from 'better-scroll'
export default {
    data(){
        return {
            scroll:null
        }
    },
    mounted(){
        // console.log(this.$refs.aaaa);
        // console.log(document.querySelector('.wrapper'));
        
        
        this.scroll = new BSscroll(this.$refs.aaaa,{
            
        })
        console.log(this.scroll);
        
}
}
</script>

<style>
/* .wrapper{
    height: 400px;
    background-color: red;
    overflow: hidden;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 44px;
    bottom: 49px;
} */
</style>