import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataThunk = createAsyncThunk("products/fetch",
    async(category,{rejectWithValue})=>{
        try {
            const res = await axios.get(`https://dummyjson.com/products/category/${category}`)
            return res.data.products
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)