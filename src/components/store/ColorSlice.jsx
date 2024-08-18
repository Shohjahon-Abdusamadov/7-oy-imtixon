import { createSlice } from "@reduxjs/toolkit";


export const initialState = {
        colors: [],
        colorLoading:false,
        colorError:null
}

export  const ColorSlice = createSlice({
    name: 'colors',
    initialState,
    reducers:{
        saveColors:(state, action) => {
            state.colors = action.payload
        },
        setColorLoading: (state, action) =>{
          state.colorLoading = action.payload
        },
        setColorError: (state, action) =>{
            state.colorError = action.payload
          }
    }
})
export const {setColorError,  saveColors, setColorLoading} = ColorSlice.actions;
export default ColorSlice.reducer
