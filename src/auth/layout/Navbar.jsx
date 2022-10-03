import { useState } from "react";

import { Link } from "react-scroll";

const Navbar = () => {
    const [background, setBackground] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 95) {
            setBackground(true);
        } else {
            setBackground(false);
        }
    };
    window.addEventListener("scroll", changeBackground);

    return (
        <nav
            className={`flex flex-col lg:flex-row lg:gap-32 justify-center items-center fixed top-0 left-0 right-0 duration-200 z-10 bg-transparent px-3 py-1 ${
                background ? "shadow-xl" : ""
            } `}
            style={{ backgroundColor: `${background ? "#0d47c0" : ""}` }}
        >
            <Link
                to="login"
                spy={true}
                smooth={200}
                duration={500}
                className="subtitle cursor-pointer"
            >
                <img
                    src="/assets/img/ctcloudblanco.png"
                    alt=""
                    className="w-32 lg:w-52 min-w-full"
                />
            </Link>

            <ul className="flex gap-2 md:gap-12 text-white text-xs text-center lg:text-base">
                <li>
                    <Link
                        to="ct_cloud"
                        spy={true}
                        smooth={200}
                        duration={500}
                        className="subtitle cursor-pointer"
                    >
                        ¿Qué ofrece CT Cloud?
                    </Link>
                </li>
                <li>
                    <Link
                        to="plan"
                        spy={true}
                        smooth={200}
                        duration={500}
                        className="subtitle cursor-pointer"
                    >
                        Contrata plan
                    </Link>
                </li>
                <li>
                    <Link
                        to="porquenosotros"
                        spy={true}
                        smooth={200}
                        duration={500}
                        className="subtitle cursor-pointer"
                    >
                        ¿Por qué nosotros?
                    </Link>
                </li>
                <li>
                    <Link
                        to="contacto"
                        spy={true}
                        smooth={200}
                        duration={500}
                        className="subtitle cursor-pointer"
                    >
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
