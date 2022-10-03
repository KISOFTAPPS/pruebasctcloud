import React from "react";
import { useApiStore } from "../../../hooks";
import microsoft from "/assets/img/microsoft-icon.png";
import { Link } from "react-router-dom";

export const Proveedores = ({ proveedores = [] }) => {
    console.log(proveedores.map((proveedor) => console.log(proveedor.id)));
    const { getServicios } = useApiStore();
    return (
        <table className="table-fixed w-full text-center">
            <thead>
                <tr className="text-slate-500 ">
                    <th className="py-5">Seleccione un proveedor</th>
                </tr>
            </thead>
            <tbody className="border-t divide-y">
                {proveedores.map((proveedor) => (
                    <tr
                        className="hover:bg-blue-500 hover:text-white hover:shadow-inner duration-200 group"
                        key={proveedor.id}
                    >
                        <td className="flex justify-center p-4">
                            <Link
                                to="servicios"
                                className="flex justify-center items-center gap-2 p-2 rounded-xl border-dashed border-2 border-white active:scale-90 duration-200  group-hover:text-white group-hover:shadow-xl group-hover:animate-pulse subtitle"
                                onClick={() => getServicios(proveedor.id)}
                            >
                                <img
                                    src={microsoft}
                                    alt=""
                                    className="w-12 rounded-lg"
                                />
                                {proveedor.name}
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
