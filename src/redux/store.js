import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import switchSlice from './switchSlice'

export const store = configureStore({
  reducer: {
    products:productSlice,
    switchCase:switchSlice
  },
})