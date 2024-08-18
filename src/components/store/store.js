import { configureStore } from '@reduxjs/toolkit';
import productReducer from './ProductSlice';
import colorReducer from './ColorSlice';
import brandReducer from './BrandSlice';
import cardreducer from './cartSlice';
const store = configureStore({
    reducer: {
        products: productReducer,
        colors: colorReducer,
        brand: brandReducer,
        cart: cardreducer
    },
});

export default store;
