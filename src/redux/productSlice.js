import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk('product',async()=>{
    //const response = await fetch('https://fakestoreapi.com/products');
    const response = await axios.get('https://fakestoreapi.com/products')
    //const data = response.json();
    return response.data;
})

const initialState = {
    products:[]
}


const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    //for api operations;
    extraReducers:(builder)=>{
        builder.addCase(getProducts.fulfilled, (state,action)=>{
            state.products = action.payload;
        })
    }
})
/*
const acordionSlice = createSlice({
    name:"acordion",
    initialState:{
        showState:false
    },
    reducers:{
        setShowState(){
            initialState.showState = !initialState.showState
        }
    }
})
*/
export default productSlice.reducer;

