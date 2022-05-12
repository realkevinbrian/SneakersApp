/***
 * In this Slice we define Menu state of our app
 */
 import { createSlice } from "@reduxjs/toolkit";


 const menuSlice = createSlice({
     name : "menu",
     initialState : {
         menuState : false,
         cartState : false
     }
     ,reducers : {
        setMenuState(state){
             if(state.menuState){
                 state.menuState = false;
             }else{
                 state.menuState = true;
             }
         },
         setCartState(state){
            if(state.cartState){
                state.cartState = false;
            }else{
                state.cartState = true;
            }
        }
     }
 })


 export const {setMenuState,setCartState} = menuSlice.actions;
 export const SelectAll = state => state.menu;

 export default menuSlice.reducer;