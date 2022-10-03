import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Footer = () => {

    const navigate = useNavigate()

    return (
        <footer style={{ backgroundColor: "#0d47c0", color: "white" }}>
            <div className="flex flex-col sm:flex-row items-center w-full justify-evenly h-28 text-center p-3">
                <p>&copy; 2022 CTCloud. Todos los derechos reservados.</p>
                <p
                    className="cursor-pointer"
                    onClick={() => navigate("/terminos")}
                >
                    Términos y condiciones.
                </p>
            </div>
           
        </footer>
    );
};

export default Footer;
