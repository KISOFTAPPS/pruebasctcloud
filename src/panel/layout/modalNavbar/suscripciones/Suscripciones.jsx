import React from "react";
import { useEffect } from "react";
import { useApiStore } from "../../../../hooks";

const Suscripciones = () => {
    const { resumenSuscripciones } = useApiStore();

    console.log(resumenSuscripciones);

    const formatNumber = (n) => {
        if (!n) n = 0;

        return n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    };

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
                <h3 className="title text-2xl text-sky-500">
                    Resumen del mes en curso:
                </h3>
                <div className="flex gap-5">
                    <div className="flex gap-1">
                        <p>Total clientes:</p>
                        <span className="subtitle text-sky-500">
                            {resumenSuscripciones.totalClients}
                        </span>
                    </div>
                    <div className="flex gap-1">
                        <p>Total suscripciones:</p>
                        <span className="subtitle text-sky-500">
                            {resumenSuscripciones.totalSubscriptions}
                        </span>
                    </div>
                    <div className="flex gap-1">
                        <p>Ingresos proyectados:</p>
                        <span className="subtitle text-sky-500">
                            {formatNumber(
                                resumenSuscripciones.totalProjectedEarnings
                            )}
                        </span>
                    </div>
                </div>
            </div>
            <h3 className="title text-2xl text-sky-500">
                Suscripciones por cliente:
            </h3>
            <table class="table-auto text-center">
                <thead>
                    <tr className="text-slate-500">
                        <th className="">Nombre del cliente</th>
                        <th className="">Servicio</th>
                        <th className="">Plan</th>
                        <th className="">Número de suscripciones</th>
                        <th className="">Precio</th>
                        <th className="subtitle">Total</th>
                    </tr>
                </thead>
                {resumenSuscripciones.subscriptionsByClient.map(
                    (subCliente) => (
                        <tbody className="border-t divide-y">
                            <tr>
                                <td className="subtitle px-2">
                                    {subCliente.name.toUpperCase()}
                                </td>
                                <td className="px-2">
                                    {subCliente.subscriptions.map((subs) => (
                                        <p>{subs.service}</p>
                                    ))}
                                </td>

                                <td className="px-2">
                                    {subCliente.subscriptions.map((subs) => (
                                        <p>{subs.plan}</p>
                                    ))}
                                </td>
                                <td className="px-2">
                                    {subCliente.subscriptions.map((subs) => (
                                        <p>{subs.quantity}</p>
                                    ))}
                                </td>
                                <td className="px-2">
                                    {subCliente.subscriptions.map((subs) => (
                                        <p>{formatNumber(subs.price)}</p>
                                    ))}
                                </td>

                                <td className="subtitle px-2">
                                    {formatNumber(subCliente.total)}
                                </td>
                            </tr>
                        </tbody>
                    )
                )}
            </table>
        </div>
    );
};

export default Suscripciones;
