import { createSlice } from "@reduxjs/toolkit";

export const apiSlice = createSlice({
    name: "api",
    initialState: {
        status: "cargandoInfo",
        status2: "cargandoInfo",
        clientes: [],
        suscripciones: [],
        resumenSuscripciones: [],
        proveedores: [],
        servicios: [],
        planes: [],
        complementos: [],
    },
    reducers: {
        LoadingInfo: (state) => {
            state.status = "cargandoInfo";
        },
        LoadingInfo2: (state) => {
            state.status2 = "cargandoInfo";
        },
        saveClientes: (state, { payload }) => {
            state.status = "InfoCargada";
            state.clientes = payload;
        },
        saveSuscripciones: (state, { payload }) => {
            state.status = "InfoCargada";
            state.suscripciones = payload;
        },
        saveResumenSuscripciones: (state, { payload }) => {
            state.status2 = "InfoCargada";
            state.resumenSuscripciones = payload;
        },
        //CATALOGOS/SUSCRIPCION---------------------I
        saveProveedores: (state, { payload }) => {
            const datafiltradadata = payload.find(
                ({ active }) => active === true
            );
            console.log(datafiltradadata);
            state.status = "InfoCargada";
            state.proveedores = [datafiltradadata];
        },
        saveServicios: (state, { payload }) => {
            state.status = "InfoCargada";
            state.servicios = payload;
        },
        savePlanes: (state, { payload }) => {
            console.log("desde savePlanes", payload);
            state.status = "InfoCargada";
            state.planes = payload;
        },
        saveComplementos: (state, { payload }) => {
            state.status = "InfoCargada";
            state.complementos = payload;
        },
        //CATALOGOS/SUSCRIPCION---------------------F
    },
});

export const {
    LoadingInfo,
    LoadingInfo2,
    saveClientes,
    saveSuscripciones,
    saveResumenSuscripciones,
    saveProveedores,
    saveServicios,
    savePlanes,
    saveComplementos,
} = apiSlice.actions;
