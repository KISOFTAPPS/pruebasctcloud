import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "../../components/modal/Modal";
import { FaSearch } from "react-icons/fa";
import { useApiStore } from "../../../hooks";
import cloudimage from "/assets/img/cloudimage.png";
import moment from "moment";
import { useEffect } from "react";

const Suscripciones = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const { status, suscripciones, getSuscripciones } = useApiStore();
    const [suscripcionSearch, setSuscripcionSearch] = useState([]);

    useEffect(() => {
        getSuscripciones();
    }, []);


    // Filtrado de suscripciones "Buscador"
    const handleSearch = (e) => {
        const newData = suscripciones.filter((suscripcion) => {
            const textData = e.target.value.toLowerCase();
            const suscripcionData = suscripcion.plan.name
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");
            return suscripcionData.indexOf(textData) > -1;
        });
        setSuscripcionSearch(newData);
    };

    const suscripcionesFiltradas = () => {
        if (suscripcionSearch.length === 0) {
            return suscripciones;
        }
        return suscripcionSearch;
    };
    /////////////////////////////////

    return (
        <section className="flex flex-col w-full h-full gap-5">
            <h1 className="title text-6xl text-blue-500">Suscripciones</h1>
            <div className="flex">
                <div className="flex items-center h-16 bg-white w-full rounded-full px-3 overflow-hidden shadow-xl">
                    <input
                        type="text"
                        className="focus:outline-none w-full h-full pr-3"
                        placeholder="Buscar suscripciones"
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div className=" bg-white rounded-3xl shadow-xl font-bold overflow-auto z-10">
                {status === "cargandoInfo" ? (
                    <div className="w-full flex flex-col justify-center items-center p-10">
                        <span>CARGANDO</span>
                        <img src={cloudimage} className="floating w-72" />
                    </div>
                ) : (
                    <table className="table-fixed text-center w-full">
                        <thead>
                            <tr className="text-slate-500">
                                <th className="py-5">Plan</th>
                                <th className="py-5">Cliente</th>
                                <th className="py-5">Fecha de inicio</th>
                                <th className="py-5">Cantidad</th>
                            </tr>
                        </thead>
                        <tbody className="border-t divide-y">
                            {suscripcionesFiltradas().map((suscripcion) => (
                                <tr
                                    key={suscripcion.id}
                                    className="hover:bg-blue-500 hover:text-white duration-200 hover:shadow-inner h-12"
                                >
                                    <td className="subtitle">
                                        {suscripcion.plan.name}
                                    </td>
                                    <td className="subtitle">
                                        {suscripcion.client.legal_name.toUpperCase()}
                                    </td>
                                    <td>
                                        {moment(suscripcion.created_at).format(
                                            "lll"
                                        )}
                                    </td>
                                    <td>{suscripcion.quantity}</td>
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
                        text="hey madafaka"
                    ></Modal>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Suscripciones;
