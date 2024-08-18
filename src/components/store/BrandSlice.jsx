import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  brands: [],
  brandLoading: false,
  brandError: null
};

export const BrandSlice = createSlice({
    name: 'brands',
    initialState,
    reducers: {
        saveBrands: (state, action) => {
            state.brands = action.payload;
        },
        setBrandLoading: (state, action) => {
            state.brandLoading = action.payload;
        },
        setBrandError: (state, action) => {
            state.brandError = action.payload;
        }
    }
});

export const { setBrandError, saveBrands, setBrandLoading } = BrandSlice.actions;

export default BrandSlice.reducer;
