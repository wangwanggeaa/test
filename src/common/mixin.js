import {debounce} from './utils'
export const itemListenerMixin = {
    mounted(){
        this.refresh = debounce(this.$refs.scroll.refresh,200)
        this.itemImgListener = () => {
        this.refresh();
    }
    this.$bus.$on('imageload',this.itemImgListener)
    console.log('---');
    
    },
    data(){
        return {
            refresh:null
        }
    }
}