import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
   initialState : {
    items : []
   },
   reducers :{
    addItems : (state,action)=>{
        state.items.push(action.payload)
    },
    removeItems : (state,action)=>{
          state.items.pop()
    },
    clearcart : (state,action)=>{
          state.items.length = 0 ;
    },
   },
});


export default cartSlice.reducer;
export const { addItems ,removeItems,clearcart} = cartSlice.actions;
