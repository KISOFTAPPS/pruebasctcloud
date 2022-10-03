import React from "react";
import { FaCheckCircle, FaUsers, FaBook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {


    return (
        <div className="flex flex-col w-52 justify-center items-center bg-white font-bold flex-none">
            <div className="flex flex-col gap-5">
                <NavLink
                    to="clientes"
                    className="flex items-center gap-5"

                >
                    <div className="p-3 rounded-lg duration-200 text-slate-400 text-3xl ">
                        <FaUsers />
                    </div>
                    <p>Clientes</p>
                </NavLink>

                <NavLink
                    to="suscripciones"
                    className="flex items-center gap-5"

                >
                    <div className="p-3 rounded-lg duration-200 text-slate-400 text-3xl">
                        <FaCheckCircle />
                    </div>
                    <p>Suscripciones</p>
                </NavLink>

                <NavLink to="catalogo" className="flex items-center gap-5 ">
                    <div className="p-3 rounded-lg duration-200 text-slate-400 text-3xl">
                        <FaBook />
                    </div>
                    <p>Catálogo</p>
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;
