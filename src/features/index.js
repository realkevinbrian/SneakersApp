/**
 * In this File , I configure My Redux Store
 */

import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice"
import postSlice from "./postSlice";


const store = configureStore({
    reducer : {
        menu : menuSlice,
        post : postSlice

    }

})


export default store;