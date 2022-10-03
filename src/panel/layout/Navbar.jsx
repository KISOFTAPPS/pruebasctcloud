import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../components/modal/Modal";
import { FaUserCircle } from "react-icons/fa";
import MiCuenta from "./modalNavbar/MiCuenta";
import { useApiStore, useAuthStore } from "../../hooks";

const variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Navbar = () => {
    const { userInfo, startLogout } = useAuthStore();
    const { getResumenSuscripciones } = useApiStore();

    const [isOpen, setIsOpen] = useState(false);

    const [modalOpen, setModalOpen] = useState(false);

    const handleClickMiCuenta = () => {
        setModalOpen(!modalOpen);
        setIsOpen(!isOpen);
        getResumenSuscripciones();
    };

    return (
        <nav className="flex justify-end h-20 flex-none">
            <div className="flex items-center gap-5 relative">
                <span className="font-bold ">{userInfo.name}</span>
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex justify-center items-center z-10  w-10 h-10 rounded-full bg-blue-500 text-3xl text-white shadow-xl cursor-pointer active:scale-90 duration-200"
                >
                    <FaUserCircle />
                </div>
            </div>
            <motion.nav
                className="absolute top-28"
                initial={false}
                animate={isOpen ? "open" : "closed"}
            >
                <motion.ul
                    variants={{
                        open: {
                            clipPath: "inset(0% 0% 0% 0% round 5px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.7,
                                delayChildren: 0.3,
                                staggerChildren: 0.05,
                            },
                        },
                        closed: {
                            clipPath: "inset(10% 10% 90% 90% round 5px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.3,
                            },
                        },
                    }}
                    style={{ pointerEvents: isOpen ? "auto" : "none" }}
                    className="text-black text-base text-right bg-white rounded-lg divide-y shadow-xl border border-blue-500 overflow-hidden w-32"
                >
                    <motion.li
                        variants={variants}
                        className="hover:bg-blue-500 hover:text-white px-1 cursor-pointer"
                        onClick={() => handleClickMiCuenta()}
                    >
                        Mi cuenta
                    </motion.li>
                    <motion.li
                        variants={variants}
                        className="hover:bg-blue-500 hover:text-white px-1 cursor-pointer"
                        onClick={() => startLogout()}
                    >
                        Cerrar sesión
                    </motion.li>
                </motion.ul>
            </motion.nav>
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
                        type={4}
                    />
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
