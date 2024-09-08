import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/products/productsSlice";
import { productsApi } from "../services/productsApi";
import { setupListeners } from "@reduxjs/toolkit/query";



export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        productsR: productSlice
    },
    middleware: (getDefaultMiddleware) => {
       return getDefaultMiddleware().concat(productsApi.middleware)
    }
});

setupListeners(store.dispatch);



