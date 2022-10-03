import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: "comprobando",
        userInfo: [],
        message: {
            type: "",
            msg: "",
        },
    },
    reducers: {
        onChecking: (state) => {
            state.status = "comprobando";
            state.userInfo = [];
        },
        onLogin: (state, { payload }) => {
            state.status = "autentificado";
            state.userInfo = payload;
        },
        onLogout: (state) => {
            state.status = "no-autentificado";
        },
        setMessage: (state, { payload }) => {
            state.message = payload;
        },
        clearMessage: (state) => {
            state.message = {
                type: "",
                msg: "",
            };
        },
    },
});

export const {
    onChecking,
    onLogin,
    onLogout,
    clearMessage,
    setMessage,
} = authSlice.actions;
