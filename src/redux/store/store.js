import { configureStore } from "@reduxjs/toolkit";
import { authSlice, apiSlice } from "../";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        api: apiSlice.reducer,
        //ui: {},
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
