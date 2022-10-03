import React from "react";
import { useNavigate } from "react-router-dom";

export const TerminosCondiciones = () => {
  const navigate = useNavigate()
    return (
        <section className="flex justify-center items-center pb-8 pt-8 sm:pt-28 min-h-screen bg-blue-500 p-5">
            <div className="bg-white p-12 rounded-xl shadow-xl flex flex-col justify-center items-center">
              <h1 className="font-bold text-blue-500 text-xl">Términos y condiciones</h1>
                <p className="mt-8">
                    Al ingresar y utilizar este portal de Internet, cuyo nombre
                    de dominio es www.ctcloud.mx, propiedad de CT Internacional
                    del Noroeste S.A. de C.V., que en lo sucesivo se denominará
                    CT Cloud, el usuario está aceptando los términos y
                    condiciones de uso contenidos en este convenio y declara
                    expresamente su aceptación utilizando para tal efecto medios
                    electrónicos. <br />
                    <br /> En caso de no aceptar en forma absoluta y completa
                    los términos y condiciones de este convenio, el usuario
                    deberá abstenerse de acceder, utilizar y observar esta
                    plataforma. <br />
                    <br /> En caso de que el usuario acceda, utilice y observe
                    CT Cloud, esto se considerará como una absoluta y expresa
                    aceptación de los términos y condiciones de uso aquí
                    estipulados. <br />
                    <br /> La sola utilización de dicha página de Internet le
                    otorga al público en general la condición de usuario e
                    implica la aceptación, plena e incondicional, de todas y
                    cada una de las condiciones generales y particulares
                    incluidas en estos términos y condiciones de uso publicados
                    por CT Cloud en el momento mismo en que el usuario acceda a
                    esta plataforma. <br />
                    <br />
                    Cualquier modificación a los presentes términos y
                    condiciones de uso será realizada cuando el titular de la
                    misma, en este caso CT Cloud, lo considere apropiado, siendo
                    exclusiva responsabilidad del usuario asegurarse de tomar
                    conocimiento de tales modificaciones.
                </p>
                <p className="mt-8 cursor-pointer font-semibold text-blue-500 underline" onClick={()=>navigate("/")}>Inicio</p>
            </div>
        </section>
    );
};
