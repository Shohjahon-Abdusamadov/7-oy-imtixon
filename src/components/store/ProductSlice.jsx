import { createSlice } from "@reduxjs/toolkit";


export const initialState = {
        products: [],
        loading:false,
        error:null,
}

export  const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        saveProducts: (state, action) =>{
           state.products = action.payload
        },
        setLoading: (state, action) =>{
          state.loading = action.payload
        },
        setError: (state, action) =>{
            state.error = action.payload
          }
    }
})
export const {saveProducts, setError,  setLoading} = productSlice.actions;
export default productSlice.reducer
