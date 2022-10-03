import React from "react";
import backgroundgradient from "/assets/img/backgroundgradient.jpg";
import cloudimage from "/assets/img/cloudimage.png";
import Fade from "react-reveal/Fade";

const HomeSeccion5 = () => {
    return (
        <section
        className="flex justify-center pb-8 pt-28 min-h-screen"
            style={{
                backgroundImage: `url(${backgroundgradient})`,
                backgroundSize: "cover",
            }}
        >
            <div className="flex flex-col sm:flex-row items-center text-white">
                <div className="flex flex-col  items-center gap-12">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl title mb-2">
                            Mayores informes
                        </h1>
                        <span>No dudes en comunicarte.</span>
                    </div>
                    <button
                        type="submit"
                        className="h-16 w-80 rounded-full subtitle text-xl shadow-xl"
                        style={{
                            backgroundColor: "#17d1f9",
                        }}
                    >
                        CONTÁCTANOS
                    </button>
                    <div className="flex flex-col sm:flex-row gap-10">
                        <div className="flex flex-col text-center">
                            <h3 className="subtitle text-xl">Ejecutivo</h3>
                            <span>Luis Vélez</span>
                            <span>Alejandra Lerma</span>
                        </div>
                        <div className="flex flex-col text-center">
                            <h3 className="subtitle text-xl">Teléfonos</h3>
                            <span>(662) 109 00 00 ext. 418</span>
                            <span>(662) 109 00 00 ext. 365</span>
                        </div>
                        <div className="flex flex-col text-center">
                            <h3 className="subtitle text-xl">Email</h3>
                            <a href="" className="underline subtitle" style={{ color: "#17d1f9" }}>
                                luis.velez@ctin.com.mx
                            </a>
                            <a href="" className="underline subtitle" style={{ color: "#17d1f9" }}>
                                alejadra.lerma@ctin.com.mx
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={cloudimage} alt="" className="floating"/>
                </div>
            </div>
        </section>
    );
};

export default HomeSeccion5;
