import backgr2 from "/assets/img/background2.png";
import logoMicrosoft from "/assets/img/microsoft-logo.svg";

const HomeSeccion2 = () => {
    return (
        <section
            className="flex justify-center items-center pb-8 pt-28 min-h-screen px-10"
            style={{
                backgroundImage: `url(${backgr2})`,
                backgroundSize: "cover",
            }}
        >


            <div className="w-full flex flex-col items-center gap-24">
                <div>
                    <div className="flex flex-col sm:flex-row gap-24">
                        <div className="text-center">
                            <h2 className="text-3xl subtitle">¿Qué ofrece</h2>
                            <h2 className="text-5xl title">
                                <strong
                                    className="title"
                                    style={{ color: "#44bfff" }}
                                >
                                    CT Cloud
                                </strong>
                                ?
                            </h2>
                        </div>

                            <p
                                className="text-justify text-xl "
                                style={{maxWidth:"450px"}}
                            >
                                Ofrece la oferta de servicios en la nube pública
                                nacional mas robusta, segura y de costos fijos sin
                                variaciones mensuales, con ancho de banda sin costo
                                adicional y flexibilidad de crecimiento en cualquier
                                momento.
                            </p>



                    </div>
                </div>
                <hr className="w-2/4" />
                <div className="flex flex-col items-center gap-12 text-justify ">
                    <p className="text-xl">
                        Encuentra y administra suscripciones de estas y más
                        empresas:
                    </p>
                    <img src={logoMicrosoft} width="170" />
                </div>
            </div>

        </section>
    );
};

export default HomeSeccion2;
