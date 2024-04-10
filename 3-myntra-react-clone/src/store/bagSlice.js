import {createSlice} from "@reduxjs/toolkit";


const bagSlice =createSlice({
    name: "bag",
    initialState : [],
    reducers : {
        addToBag : (state, action) =>{
            alert("Item Added Sucessfully !!!!");
           
           state.push(action.payload)
        },
        removeBag : (state, action) =>{
           return state.filter(itemId => itemId!==action.payload)
         },

    }
})
  
export const bagActions = bagSlice.actions;

export default bagSlice;

