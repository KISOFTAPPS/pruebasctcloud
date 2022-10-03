import { useDispatch, useSelector } from "react-redux";
import { ctCloudApi } from "../apis";
import {
    onChecking,
    onLogin,
    onLogout,
    setMessage,
    clearMessage,
} from "../redux";
import Cookies from "js-cookie";
import { useApiStore } from "./useApiStore";

export const useAuthStore = () => {
    // Se llama con un selector a los estados de la store
    const { isAuthenticated, user, status, userInfo, message } = useSelector(
        (state) => state.auth
    );

    const { getClientes } = useApiStore();

    // Se llama con un dispatch a los acciones de la store
    const dispatch = useDispatch();

    // Inicio de sesion
    const startLogin = async ({ email, password }) => {
        try {
            // Se llama a la api
            const resp = await ctCloudApi.post("/auth/", { email, password });

            if (resp.data.ok) {
                dispatch(onChecking()); // Se llama a la accion para volver todos los estados por defecto
                const resp = await ctCloudApi.get("/auth");
                if (resp.status === 200) {
                    dispatch(onLogin(resp.data));
                    getClientes();
                    return;
                }
            }
        } catch (error) {
            dispatch(
                setMessage({
                    type: "login",
                    msg: error.response.data.message,
                })
            );
            setTimeout(() => {
                dispatch(clearMessage());
            }, 2000);
            return;
        }
    };

    const RestablecerContraseña = async (email) => {
        try {
            const resp = await ctCloudApi.post("/auth/recover", {
                email: email,
            });
            console.log(resp);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    // Cierre de sesion
    const startLogout = async () => {
        try {
            const resp = await ctCloudApi.get("/auth/logout");
            if (resp.status === 200) {
                Cookies.remove("jwt");
                dispatch(onLogout());
            }
        } catch (error) {
            //dispatch(onLogout("No se pudo cerrar sesión"));
        }
        // Se llama a la accion onLogout para volver todos los estados por defecto y salir
    };

    const startRegister = async (values) => {
        try {
            const { status } = await ctCloudApi.post("/auth/users", {
                name: values.name,
                email: values.email,
                password: values.password,
                confirm: values.passwordConfirmation,
            });
            if (status === 200)
                dispatch(
                    setMessage({
                        type: "register",
                        msg: "Su cuenta ha sido registrada correctamente en CTCloud",
                    })
                );
        } catch (error) {
            dispatch(
                setMessage({
                    type: "register",
                    msg: error.response.data.message,
                })
            );
            setTimeout(() => {
                dispatch(clearMessage());
            }, 5000);
            return;
        }
        // Se llama a la accion onLogout para volver todos los estados por defecto y salir
    };

    // Mantener session
    const checkToken = async () => {
        const token = Cookies.get("jwt"); // Se obtiene el token de la coockie

        if (!token) return dispatch(onLogout()); // Si no hay token se llama a la accion onLogout y sale de la sesion

        try {
            const resp = await ctCloudApi.get("/auth"); // Se llama a la api para checar el token y renovarlo
            dispatch(onLogin(resp.data)); // Se llama a la accion onLogin una ves completado correctamente y se vuelven a ingresar los datos del usuario
        } catch (error) {
            dispatch(onLogout()); // Se hace un logout
        }
    };

    // const startRegister = async ({
    //     nombre,
    //     apellido_p,
    //     apellido_m,
    //     correo,
    //     contraseña,
    //     rol,
    // }) => {
    //     // Se hace una funcion async con los datos del usuario
    //     dispatch(onChecking()); // Se llama a la accion para volver todos los estados por defecto
    //     try {
    //         // Se llama a la api para hacer el registro y se le pasa los datos del usuario por post
    //         const resp = await logReg.post("/users", {
    //             nombre,
    //             apellido_p,
    //             apellido_m,
    //             correo,
    //             contraseña,
    //             rol,
    //         });
    //     } catch (error) {
    //         dispatch(
    //             onLogout(error.response.data?.msg || "Error al registrarse")
    //         );
    //         // En caso de dar error se borran los datos de localStorage
    //         setTimeout(() => {
    //             //dispatch(clearErrorMessage());
    //         }, 10);
    //     }
    // };

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Se comparten las variables o metodos por medio de este hook
    return {
        //* Propiedades
        isAuthenticated,
        user,
        status,
        userInfo,
        message,

        //* Metodos o funciones
        startLogin,
        startLogout,
        checkToken,
        startRegister,
        RestablecerContraseña,
    };
};
