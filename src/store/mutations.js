// export const mutations = { 
//     addToCart(state,payload){
//         console.log(payload);
        
//         let oldproduct = null;
//         for(let i = 0; i < state.productlist.length; i++){
//             if( state.productlist[i].iid === payload.iid){
//                 oldproduct = state.productlist[i]
//             }
//         }
//             if(oldproduct){
//                 oldproduct.count += 1
//             }else{
//                 payload.count = 1
//                 state.productlist.push(payload)
//             }
       
//         // state.productlist.push(goods)
//     }
// }   可行
// export const mutations = {
//     addToCart(state,payload){
//         console.log(payload);
        
//         let index = state.productlist.indexOf(payload)
//         if(index!=-1){
//             let oldproduct = state.productlist[index]
//             oldproduct.count += 1
//         }else{
//             payload.count = 1;
//             state.productlist.push(payload);
//         }
//     }
// }   不可行
export const mutations = {
    addToCart(state,payload){
        let oldproduct = state.productlist.find(item => item.iid === payload.iid)
        if(oldproduct){
            oldproduct.count+=1
        }else{
            payload.count = 1
            state.productlist.push(payload)
        }
    }
}//可行