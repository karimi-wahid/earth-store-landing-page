import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";

export const store = configureStore({
    reducer: {
        name: cartSlice,
    }
})