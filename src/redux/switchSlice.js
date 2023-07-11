import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    switchStatus:false
}


const switchSlice = createSlice({
    name:'switchCase',
    initialState,
    reducers:{
        changeState(initialState){
            return !initialState
        } 
    }

})

export const changeState = switchSlice.actions
export default switchSlice.reducer;