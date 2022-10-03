import React, { useEffect } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Layout from "../auth/layout/Layout";
import Home from "../auth/pages/home/Home";
import { RecuperarPass } from "../auth/pages/home/RecuperarPass";
import { TerminosCondiciones } from "../auth/pages/home/TerminosCondiciones";
import { useApiStore, useAuthStore } from "../hooks";
import { Planes } from "../panel/components/catalogoServicios/Planes";
import { Proveedores } from "../panel/components/catalogoServicios/Proveedores";
import Servicios from "../panel/components/catalogoServicios/Servicios";
import LayoutP from "../panel/layout/Layout";
import Catalogo from "../panel/pages/catalogo/Catalogo";
import Clientes from "../panel/pages/clientes/Clientes";
import Suscripciones from "../panel/pages/suscripciones/Suscripciones";
import { GrVmMaintenance } from "react-icons/gr";

import cloudimage from "/assets/img/cloudimage.png";

const RouterApp = () => {
    const { status, checkToken, userInfo } = useAuthStore();

    const { proveedores } = useApiStore();

    useEffect(() => {
        checkToken();
    }, []);

    if (status === "comprobando") {
        return (
            <div className="h-screen w-full flex justify-center items-center">
                <img src={cloudimage} alt="" className="floating w-96" />
            </div>
        );
    }

    return (
        <div>
            <Routes>
                {status === "autentificado" ? (
                    userInfo.id === "5d55b69505639805b336301b" ? (
                        <>
                            <Route
                                path="*"
                                element={<Navigate to="/dashboard" />}
                            />
                            <Route
                                path="/dashboard"
                                element={
                                    <LayoutP>
                                        <Outlet />
                                    </LayoutP>
                                }
                            >
                                <Route
                                    index
                                    element={<Navigate to="clientes" />}
                                />
                                <Route path="clientes" element={<Clientes />} />
                                <Route
                                    path="suscripciones"
                                    element={<Suscripciones />}
                                />
                                <Route
                                    path="catalogo"
                                    element={
                                        <Catalogo>
                                            <Outlet />
                                        </Catalogo>
                                    }
                                >
                                    <Route
                                        index
                                        element={
                                            <Proveedores
                                                proveedores={proveedores}
                                            />
                                        }
                                    />
                                    <Route
                                        path="servicios"
                                        element={<Servicios />}
                                    />
                                    <Route path="planes" element={<Planes />} />
                                </Route>
                                <Route
                                    path="*"
                                    element={<Navigate to="clientes" />}
                                />
                            </Route>
                        </>
                    ) : (
                        <>
                            <Route
                                path="*"
                                element={<Navigate to="/mantenimiento" />}
                            />
                            <Route
                                path="mantenimiento"
                                element={
                                    <div className="flex flex-col justify-center items-center min-h-screen bg-blue-500 gap-5">
                                        <h1 className="text-3xl font-bold">PÁGINA EN MANTENIMIENTO</h1>
                                        <GrVmMaintenance className="text-9xl" />
                                    </div>
                                }
                            />
                        </>
                    )
                ) : (
                    <>
                        <Route
                            path="/"
                            element={
                                <Layout>
                                    <Outlet />
                                </Layout>
                            }
                        >
                            <Route index element={<Home />} />
                            <Route path="*" element={<Navigate to="/" />} />
                        </Route>
                        <Route path="recuperar" element={<RecuperarPass />} />
                        <Route
                            path="terminos"
                            element={<TerminosCondiciones />}
                        />
                    </>
                )}
            </Routes>
        </div>
    );
};

export default RouterApp;
