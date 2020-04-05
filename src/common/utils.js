
 export function debounce(func,delay){
    let timer = null;
    return function(...args){
        clearTimeout(timer)
        
        timer = setTimeout(() => {
            // console.log(this);
            
            func.apply(this,args)
            // console.log('--------');
            
        },delay)
    }

}
//防抖动函数
    
