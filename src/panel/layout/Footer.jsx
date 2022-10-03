import React from "react";

const Footer = () => {
    return (
        <footer
            className="justify-self-end text-white"
            style={{ backgroundColor: "#0d47c0"}}
        >
            <div className="flex flex-col sm:flex-row items-center w-full justify-evenly h-5 text-center p-3" >
                <p>&copy; 2022 CTCloud. Todos los derechos reservados.</p>
                <p>Términos y condiciones.</p>
            </div>
        </footer>
    );
};

export default Footer;
