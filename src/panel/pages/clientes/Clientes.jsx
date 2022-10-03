import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "../../components/modal/Modal";
import { FaUserPlus, FaPlusCircle } from "react-icons/fa";
import { CrearNuevoCliente } from "./modalPages/crearNuevoCliente/CrearNuevoCliente";
import { useApiStore } from "../../../hooks";
import cloudimage from "/assets/img/cloudimage.png";
import { useEffect } from "react";

const Clientes = () => {
    const { clientes, status, getClientes } = useApiStore();
    const [clienteSearch, setClienteSearch] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [type, setType] = useState(0);

    // LLama a la funcion de getClientes en cada nueva renderizacion del componente
    useEffect(() => {
        getClientes(); //Funcion encargada de lamar los datos de la api
    }, []);

    // Filtrado de clientes "Buscador"
    const handleSearch = (e) => {
        const newData = clientes.filter((cliente) => {
            const textData = e.target.value.toLowerCase();
            const clienteData = cliente.legal_name
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");
            return clienteData.indexOf(textData) > -1;
        });
        setClienteSearch(newData);
    };

    const clientesFiltrados = () => {
        if (clienteSearch.length === 0) {
            return clientes;
        }
        return clienteSearch;
    };
    /////////////////////////////////

    return (
        <section className="flex flex-col w-full h-full gap-5">
            <h1 className="title text-6xl text-blue-500">Clientes</h1>
            <div className="flex">
                <div className="flex items-center h-16 bg-white w-full rounded-full px-3 overflow-hidden shadow-xl">
                    <input
                        type="text"
                        className="focus:outline-none w-full h-full pr-3"
                        placeholder="Buscar cliente"
                        onChange={handleSearch}
                    />
                </div>
                <div className="w-60 pl-3 flex-none">
                    <button
                        className="flex justify-center items-center gap-2 w-full h-full bg-blue-500 rounded-full text-white font-black shadow-xl active:scale-90 duration-200"
                        onClick={() => {
                            setType(1);
                            setModalOpen(!modalOpen);
                        }}
                    >
                        <FaUserPlus className="text-2xl" />
                        Crear nuevo cliente
                    </button>
                </div>
            </div>
            <div className=" bg-white rounded-3xl shadow-xl font-bold overflow-auto z-10">
                {status === "cargandoInfo" ? (
                    <div className="w-full flex flex-col justify-center items-center p-10">
                        <span>CARGANDO</span>
                        <img src={cloudimage} className="floating w-72" />
                    </div>
                ) : (
                    <table className="table-fixed w-full text-center">
                        <thead>
                            <tr className="text-slate-500">
                                <th className="py-5">Cliente</th>
                                <th className="py-5">Suscripciones</th>
                            </tr>
                        </thead>
                        <tbody className="border-t divide-y">
                            {clientesFiltrados().map((cliente) => (
                                <tr
                                    className="hover:bg-blue-500 hover:text-white hover:shadow-inner duration-200 group"
                                    key={cliente.id}
                                >
                                    <td className="flex justify-center p-4">
                                        <button
                                            className="flex justify-center items-center gap-2 p-2 rounded-xl border-dashed border-2 border-white active:scale-90 duration-200  group-hover:text-white group-hover:shadow-xl group-hover:animate-pulse subtitle"
                                            onClick={() => {
                                                setType(2);
                                                setModalOpen(!modalOpen);
                                            }}
                                        >
                                            {cliente.legal_name}
                                        </button>
                                    </td>
                                    <td className="p-4">
                                        {cliente.subscription_count}
                                    </td>
                                    <td className="p-4">
                                        <button
                                            className="flex justify-center items-center gap-2 p-2 rounded-full bg-blue-500 text-white active:scale-90 duration-200 group-hover:bg-white group-hover:text-blue-500 group-hover:shadow-xl"
                                            onClick={() => {
                                                setModalOpen(!modalOpen);
                                                setType(3);
                                            }}
                                        >
                                            <FaPlusCircle className="text-2xl" />{" "}
                                            Agregar suscripción
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            {/* MODAL */}
            <AnimatePresence
                initial={false}
                mode="wait"
                onExitComplete={() => null}
            >
                {modalOpen && (
                    <Modal
                        modalOpen={modalOpen}
                        setModalOpen={setModalOpen}
                        type={type}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};
<CrearNuevoCliente />;

export default Clientes;
