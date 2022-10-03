import { useDispatch, useSelector } from "react-redux";
import { ctCloudApi } from "../apis";
import {
    LoadingInfo,
    LoadingInfo2,
    saveClientes,
    saveSuscripciones,
    saveResumenSuscripciones,
    saveProveedores,
    saveServicios,
    savePlanes,
    saveComplementos,
} from "../redux";

export const useApiStore = () => {
    const {
        status,
        clientes,
        suscripciones,
        resumenSuscripciones,
        proveedores,
        servicios,
        planes,
    } = useSelector((state) => state.api);
    // Se llama con un dispatch a los acciones de la store
    const dispatch = useDispatch();

    // Obtienes la info de los clientes en la ruta clientes
    const getClientes = async () => {
        try {
            dispatch(LoadingInfo());

            const { status, data } = await ctCloudApi.get("/api/clients");
            if (status === 200) dispatch(saveClientes(data.data));
        } catch (error) {}
    };

    // Obtienes la info de las suscripciones en la ruta suscripciones
    const getSuscripciones = async () => {
        try {
            dispatch(LoadingInfo());

            const { status, data } = await ctCloudApi.get("/api/subscriptions");

            if (status === 200) dispatch(saveSuscripciones(data.data));
        } catch (error) {}
    };
    // Obtienes la info de las suscripciones para mostrar
    const getResumenSuscripciones = async () => {
        try {
            dispatch(LoadingInfo2());

            const { status, data } = await ctCloudApi.get(
                "/api/subscriptions/byclient"
            );

            if (status === 200) dispatch(saveResumenSuscripciones(data));
        } catch (error) {}
    };

    const cambiarContraseña = async ({
        contraseña,
        nuevaContraseña,
        nuevaContraseñaConfirmation,
    }) => {
        try {
            const { status, data } = await ctCloudApi.put("/auth/password", {
                current_password: contraseña,
                new_password: nuevaContraseña,
                confirm: nuevaContraseñaConfirmation,
            });

            console.log(data);
        } catch (error) {}
    };

    const cambiarNombre = async (name) => {
        try {
            const { status, data } = await ctCloudApi.put("/auth/profile", {
                name: name,
            });
            if (status === 200) getSuscripciones();
        } catch (error) {}
    };

    const crearCliente = async (
        nombreEmpresa,
        primerNombre,
        primerApellido,
        telefono,
        rfc,
        direccion,
        email
    ) => {
        try {
            const { status, data } = await ctCloudApi.post("/api/clients", {
                legal_name: nombreEmpresa,
                first_name: primerNombre,
                last_name: primerApellido,
                phone: telefono,
                tax_id: rfc,
                address: direccion,
                email: email,
            });
            if (status === 200) getClientes();
        } catch (error) {}
    };

    const getProveedores = async () => {
        try {
            dispatch(LoadingInfo());
            const { status, data } = await ctCloudApi.get("/api/providers");
            if (status === 200) dispatch(saveProveedores(data.data));
        } catch (error) {}
    };

    const getServicios = async (id) => {
        try {
            dispatch(LoadingInfo());
            const { status, data } = await ctCloudApi.get("/api/services", {
                params: {
                    provider: id,
                },
            });
            if (status === 200) dispatch(saveServicios(data.data));
        } catch (error) {}
    };

    const getPlanes = async (id) => {
        try {
            dispatch(LoadingInfo());
            const { status, data } = await ctCloudApi.get("/api/plans", {
                params: {
                    service: id,
                },
            });
            if (status === 200) dispatch(savePlanes(data))
        } catch (error) {}
    };

    return {
        //* Propiedades
        status,
        clientes,
        suscripciones,
        resumenSuscripciones,
        proveedores,
        servicios,
        planes,

        //* Metodos o funciones
        getClientes,
        getSuscripciones,
        getResumenSuscripciones,
        cambiarContraseña,
        cambiarNombre,
        crearCliente,
        getProveedores,
        getServicios,
        getPlanes,
    };
};
