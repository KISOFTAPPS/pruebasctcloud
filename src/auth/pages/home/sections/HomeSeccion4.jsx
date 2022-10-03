import ahorro from "/assets/img/home_section4/ahorro.png";
import flexibilidad from "/assets/img/home_section4/flexibilidad.png";
import rapidez from "/assets/img/home_section4/rapidez.png";
import seguridad from "/assets/img/home_section4/seguridad.png";
import simplicidad from "/assets/img/home_section4/simplicidad.png";
import transparencia from "/assets/img/home_section4/transparencia.png";

const HomeSeccion4 = () => {
    return (
        <section className="flex justify-center items-center pb-8 pt-28 min-h-screen">
            <div className="flex flex-col items-center gap-4">
                <h2 className="title text-4xl mb-8 text-center">¿Por qué nosotros?</h2>

                <div className="flex flex-col sm:flex-row  items-center gap-10 shadow-xl border w-3/4 lg:w-2/4 px-5 py-1 rounded-xl">
                    <img src={flexibilidad} width="105" alt="" />
                    <h3 className="w-60 text-center title text-2xl" style={{color: "#1594ff"}}>
                        Flexibilidad
                    </h3>
                    <p className="text-sm text-justify w-10/12 lg:w-7/12">
                        Gracias a la variedad de ofertas se puede encontrar la
                        solución que se ajusta a tus necesidades.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-10 shadow-xl border w-3/4 lg:w-2/4 px-5 py-1 rounded-xl">
                    <img src={ahorro} width="105" alt="" />
                    <h3 className="w-60 text-center title text-2xl" style={{color: "#8bd5ff"}}>Ahorro</h3>
                    <p className="text-sm text-justify w-10/12 lg:w-7/12">
                        No hay gastos en la compra de infraestructura,
                        especialistas, y demás inversiones que conllevarían la
                        preparacion de una solución de TI de este grado. no
                        pierden tiempo ni dinero en el aprovisionamiento de TI,
                        se dedican totalmente a vender.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row  items-center gap-10 shadow-xl border w-3/4 lg:w-2/4 px-5 py-1 rounded-xl">
                    <img src={transparencia} width="105" alt="" />
                    <h3 className="w-60 text-center title text-2xl" style={{color: "#44bfff"}}>
                        Transparencia
                    </h3>
                    <p className="text-sm text-justify w-10/12 lg:w-7/12">
                        Se sabe exactamente qué se compra y en el caso de Open
                        Cloud se paga únicamente lo que se consume.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row  items-center gap-10 shadow-xl border w-3/4 lg:w-2/4 px-5 py-1 rounded-xl">
                    <img src={simplicidad} width="105" alt="" />
                    <h3 className="w-60 text-center title text-2xl" style={{color: "#17d1f9"}}>Simplicidad</h3>
                    <p className="text-sm text-justify w-10/12 lg:w-7/12">
                        Gestión simple de los servicios contratados tanto para
                        el monitoreo o cancelación de los mismos.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row  items-center gap-10 shadow-xl border w-3/4 lg:w-2/4 px-5 py-1 rounded-xl">
                    <img src={seguridad} width="105" alt="" />
                    <h3 className="w-60 text-center title text-2xl" style={{color: "#0a2fe8"}}>Seguridad</h3>
                    <p className="text-sm text-justify w-10/12 lg:w-7/12">
                        Expertos se encargan de mantener y monitorear la
                        infraestructura para evitar cualquier tipo de problemas
                        y contratiempos, permitiéndo a usted enfocar en su
                        negocio sin preocuparse.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row  items-center gap-10 shadow-xl border w-3/4 lg:w-2/4 px-5 py-1 rounded-xl">
                    <img src={rapidez} width="105" alt="" />
                    <h3 className="w-60 text-center title text-2xl" style={{color: "#0821a3"}}>Rapidez</h3>
                    <p className="text-sm text-justify w-10/12 lg:w-7/12">
                        Rapidez para enfocarse en implementar y desarrollar
                        nuestros servicios.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HomeSeccion4;
