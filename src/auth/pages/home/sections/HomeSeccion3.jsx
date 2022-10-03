import circle from "/assets/img/home_section3/circle.png";
import registra from "/assets/img/home_section3/registra.png";
import selecciona from "/assets/img/home_section3/selecciona.png";
import ajusta from "/assets/img/home_section3/ajusta.png";
import listo from "/assets/img/home_section3/listo.png";
import "./HomeSeccion3.css";
import Fade from "react-reveal/Fade";
const HomeSeccion3 = () => {
    return (
        <section className="flex justify-center items-center pb-8 pt-48 min-h-screen bg-slate-100">
                <div className="flex flex-col gap-2 relative pt-28 sm:pt-0">

                    <img src={circle} alt="" width="230" className="absolute top-1 sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    <p className="absolute top-1 sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 text-center title text-3xl">Contrata plan</p>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-28 ">
                        <div className="bg-white w-80 h-80  sm:w-96 sm:h-96 shadow-2xl rounded-xl">
                            <div className="w-full h-full flex flex-col items-center justify-center gap-4 px-20 text-center">
                                <img src={registra} width="135" />
                                <h3 className="title">Regístra</h3>
                                <span className="text-stone-400">Selecciona o regístra un cliente.</span>
                            </div>
                        </div>
                        <div className="bg-white w-80 h-80  sm:w-96 sm:h-96 shadow-2xl rounded-xl">
                            <div className="w-full h-full flex flex-col items-center justify-center gap-4 px-20 text-center">
                                <img src={selecciona} width="135" />
                                <h3 className="title text-base">Selecciona</h3>
                                <span className="text-stone-400">Ve el catálogo de servicios y selecciona el plan que deseas asignarle.</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row  gap-2 sm:gap-28">
                        <div className="bg-white w-80 h-80  sm:w-96 sm:h-96 shadow-2xl rounded-xl">
                            <div className="w-full h-full flex flex-col items-center justify-center gap-4 px-20 text-center">
                                <img src={ajusta} width="135" />
                                <h3 className="title">Ajusta</h3>
                                <span className="text-stone-400">Ajusta las especificaciones del servicio.</span>
                            </div>
                        </div>
                        <div className="bg-white w-80 h-80  sm:w-96 sm:h-96 shadow-2xl rounded-xl">
                            <div className="w-full h-full flex flex-col items-center justify-center gap-4 px-20 text-center">
                                <img src={listo} width="135" alt="" />
                                <h3 className="title">Listo</h3>
                                <span className="text-stone-400">Ya puedes comenzar a usar la nube.</span>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default HomeSeccion3;
