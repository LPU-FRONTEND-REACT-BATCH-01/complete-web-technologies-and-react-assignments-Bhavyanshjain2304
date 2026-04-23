import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './counterSlice';
import cartSlice from './cartSlice';
import fetchDataSlice from './fetchDataSlice';

export const store = configureStore({
    reducer:{
        counter:counterSlice,
        cart:cartSlice,
        fetchData:fetchDataSlice
    }
})