import React from "react";
import { useEffect } from "react";
import { useApiStore } from "../../../hooks/useApiStore";
import cloudimage from "/assets/img/cloudimage.png";

import microsoft from "/assets/img/microsoft-icon.png";

const Catalogo = ({ children }) => {
    const { getProveedores, proveedores, status } = useApiStore();

    useEffect(() => {
        getProveedores();
    }, []);

    return (
        <section className="flex flex-col w-full h-full gap-5">
            <h1 className="title text-6xl text-blue-500">Catálogos</h1>
            <div className="bg-white rounded-3xl shadow-xl font-bold overflow-auto z-10">
                {status === "cargandoInfo" ? (
                    <div className="w-full flex flex-col justify-center items-center p-10">
                        <span>CARGANDO</span>
                        <img src={cloudimage} className="floating w-72" />
                    </div>
                ) : (
                    <>{children}</>
                )}
            </div>
        </section>
    );
};

export default Catalogo;
