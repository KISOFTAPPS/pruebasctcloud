import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../hooks";

const ResSchema = Yup.object().shape({
    email: Yup.string()
        .email("Email invalido")
        .required("El correo es requerido"),
});

export const RecuperarPass = () => {
    const { RestablecerContraseña } = useAuthStore();
    const navigate = useNavigate();
    return (
        <section className="flex justify-center items-center pb-8 pt-8 sm:pt-28 min-h-screen bg-blue-500">
            <div className="bg-white p-12 rounded-xl shadow-xl flex flex-col justify-center items-center w-96">
                <h1 className="font-bold text-blue-500 text-xl">
                    Restablecer Contraseña
                </h1>
                <p className="text-justify mt-8">
                    Escribe tu correo en el campo y te enviaremos un link para
                    que restablescas tu contraseña.
                </p>
                <hr className="border w-full" />
                <Formik
                    initialValues={{
                        email: "",
                    }}
                    validationSchema={ResSchema}
                    onSubmit={(value) => {
                        RestablecerContraseña(value.email);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form className="flex flex-col w-72 relative gap-2 mt-8">
                            {touched.email ? (
                                <div className="absolute -top-6 text-pink-600 font-semibold">
                                    {errors.email}
                                </div>
                            ) : null}
                            <Field
                                name="email"
                                type="email"
                                placeholder="Correo"
                                className="rounded h-10 mb-5 p-1 text-stone-400 opacity-80 focus:outline-none border-2 border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                        invalid:border-pink-500 invalid:text-pink-600
                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            />

                            <div className="text-center">
                                <button
                                    className="px-8 py-3 rounded-full subtitle active:scale-90 duration-100 shadow-xl active:shadow-none text-white"
                                    type="submit"
                                    style={{
                                        backgroundColor: "#44bfff",
                                    }}
                                >
                                    RESTABLECER CONTRASEÑA
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <p
                    className="mt-8 cursor-pointer font-semibold text-blue-500 underline"
                    onClick={() => navigate("/")}
                >
                    Inicia sesión o Crea una cuenta
                </p>
            </div>
        </section>
    );
};
