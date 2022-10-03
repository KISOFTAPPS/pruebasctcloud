import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useApiStore } from "../../../hooks";
import microsoft from "/assets/img/microsoft-icon.png";


const Servicios = () => {
    const { servicios, getPlanes } = useApiStore();
    return (
        <table className="table-fixed w-full text-center">
            <thead>
                <tr className="text-slate-500 ">
                    <th className="py-5">Seleccione un servicio</th>
                </tr>
            </thead>
            <tbody className="border-t divide-y grid grid-cols-3">
                {servicios.map((servicio) => (
                    <tr
                        className="hover:bg-blue-500 hover:text-white hover:shadow-inner duration-200 group"
                        key={servicio.id}
                    >
                        <td className="flex justify-center p-4">
                            <button
                                to="catalogo/planes"
                                className="flex w-72 items-center gap-2 p-2 rounded-xl border-dashed border-2 border-white active:scale-90 duration-200  group-hover:text-white group-hover:shadow-xl group-hover:animate-pulse subtitle"
                                onClick={() => {
                                    getPlanes(servicio.id);
                                }}
                            >
                                <img
                                    src=""
                                    alt=""
                                    className="w-12 rounded-lg"
                                />
                                {servicio.name}
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Servicios;
