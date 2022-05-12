/***
 * POST DATA SLICE
 */
import { createSlice } from "@reduxjs/toolkit";
import data from "../Database/db.json"


const postSlice = createSlice({
    name : "post",
    initialState : {
        value : data.post,
        cartItemList : [],
        itemAmount : 0,
        itemCount : 0
    },
    reducers : {
        addCart(state,{payload}){
            if(payload !== null){
                try{
                    //verify if there is an existing item in cartList
                    let existItem = state.cartItemList.find(item => item.id === payload.id)
                    // console.log("UPDATED PAYLOAD :", payload)
                    if(existItem){
                        state.itemAmount += ((payload.price * payload.discount) / 100) * payload.Count;
                        state.itemCount++;
                    }else{
                        state.cartItemList.push(payload);
                        state.itemAmount += ((payload.price * payload.discount) / 100) * payload.Count;
                        state.itemCount++;
                    }
                }catch(e){console.log(e)}
            }
        },
        deleteCart(state,{payload}){
            if(payload !== null){
                try{
                    
                    state.cartItemList.map(item => {
                        if(item.id === payload.id){
                            state.cartItemList.pop();
                        }
                    })
                }catch(e){console.log(e)}
            }
        }
        
        
    }
})

export const { addCart,deleteCart } = postSlice.actions;
export const selectAll = state => state.post.value;
export default postSlice.reducer;