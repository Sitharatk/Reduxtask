import { createSlice } from "@reduxjs/toolkit";

const TextSlice=createSlice({
  name:"text",
  initialState:{
    value:""
  },
  reducers:{
    display:(state,action)=>{
     state.value=action.payload
    }
  }
})
export const {display}=TextSlice.actions
export default TextSlice.reducer
