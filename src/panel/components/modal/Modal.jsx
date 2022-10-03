import React from "react";
import { motion } from "framer-motion";
import "./modal.css";
import { CrearNuevoCliente } from "../../pages/clientes/modalPages/crearNuevoCliente/CrearNuevoCliente";
import { Cliente } from "../../pages/clientes/modalPages/cliente/Cliente";
import { AgregarSuscripcion } from "../../pages/clientes/modalPages/agregarSuscripcion/AgregarSuscripcion";
import MiCuenta from "../../layout/modalNavbar/MiCuenta";

const dropIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        trasition: {
            duration: 0.1,
        },
    },
    exit: { opacity: 0 },
};

const Modal = ({ text, setModalOpen, modalOpen, type }) => {
    const mv = {
        1: <CrearNuevoCliente />,
        2: <Cliente />,
        3: <AgregarSuscripcion />,
        4: <MiCuenta />,
    };

    return (
        <div
            onClick={() => setModalOpen(!modalOpen)}
            className="z-50 absolute top-0 left-0 h-full w-full flex justify-center items-center bg-slate-800/75 p-1"
        >
            <motion.div
                onClick={(e) => e.stopPropagation()}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="m-auto p-5 rounded-xl flex flex-col items-center bg-slate-200  border-double border-4 border-sky-500"
            >
                <button
                    className="bg-red-500 rounded-full h-10 w-10 p-1 self-end title border-double border-4 shadow-xl active:scale-90 duration-100 "
                    onClick={() => setModalOpen(!modalOpen)}
                >
                    X
                </button>
                {mv[type]}
            </motion.div>
        </div>
    );
};

export default Modal;
