import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Perfil from "./perfil/Perfil";
import Proveedores from "./proveedores/Proveedores";
import UsuariosPermisos from "./usuariosPermisos/UsuariosPermisos";
import Suscripciones from "./suscripciones/Suscripciones";


const initialTabs = [
    { id: 1, tab: "Perfil", content: <Perfil /> },
    { id: 2, tab: "Proveedores", content: <Proveedores /> },
    { id: 3, tab: "Usuarios y permisos", content: <UsuariosPermisos /> },
    { id: 4, tab: "Suscripciones", content: <Suscripciones/> }
];


const MiCuenta = () => {
    const [selectedTab, setSelectedTab] = useState(initialTabs[0]);


    return (
        <div className="p-5" >
            <nav className="border-b-2 border-slate-300">
                <ul className="flex bg-slate-200 justify-center">
                    {initialTabs.map((item) => (
                        <li
                            key={item.id}
                            className={`relative w-52 text-center rounded-t-xl duration-500 ${item === selectedTab ? "bg-white" : ""}`}
                            onClick={() => setSelectedTab(item)}
                        >
                            {item.tab}
                            {item === selectedTab ? (
                                <motion.div className="absolute -bottom-px left-0 right-0 h-px bg-sky-500" layoutId="underline" />
                            ) : null}
                        </li>
                    ))}
                </ul>
            </nav>
            <section className="bg-white rounded-b-xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab.id}
                        initial={{ y: 5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -5, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="p-5"
                    >
                        {selectedTab.content}
                    </motion.div>
                </AnimatePresence>
            </section>
        </div>
    )
}

export default MiCuenta