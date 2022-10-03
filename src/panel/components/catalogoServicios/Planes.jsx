import React from "react";
import { useApiStore } from "../../../hooks";

export const Planes = () => {
    const { planes } = useApiStore();

    return (
        <table className="table-fixed w-full text-center">
            <thead>
                <tr className="text-slate-500">
                    <th className="py-5">Nombre</th>
                    <th className="py-5">Segmento</th>
                    <th className="py-5">Descripción</th>
                    <th className="py-5">Costo</th>
                </tr>
            </thead>
            <tbody className="border-t divide-y">
                {planes.map((plan) => (
                    <tr
                        className="hover:bg-blue-500 hover:text-white hover:shadow-inner duration-200 group"
                        key={plan.id}
                    >
                        <td className="flex justify-center p-4">
                            <button
                                className="flex justify-center items-center gap-2 p-2 rounded-xl border-dashed border-2 border-white active:scale-90 duration-200  group-hover:text-white group-hover:shadow-xl group-hover:animate-pulse subtitle"
                                onClick={() => {}}
                            >
                                {plan.name}
                            </button>
                        </td>
                        <td className="p-4">
                            {(plan.segment === "priv" && "Privado") ||
                                (plan.segment === "gov" && "Gobierno") ||
                                (plan.segment === "edu" && "Académico")}
                        </td>
                        <td className="p-4">{plan.description}</td>
                        <td className="p-4">
                            {`USD ${plan.price} / ${
                                plan.period === "month" && "MENSUAL"
                            }`}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
