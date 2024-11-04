import { configureStore } from '@reduxjs/toolkit'
import textReducer from '../Components/TextSlice'

const store=configureStore({
    reducer:{
       text:textReducer,
    }
})
export default store