import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useApiStore, useAuthStore } from "../../../../hooks";
import { useEffect } from "react";

const NameSchema = Yup.object().shape({
    nombre: Yup.string().required("Dato requerido"),
});

const PasswordSchema = Yup.object().shape({
    contraseña: Yup.string()
        .required("Dato requerido")
        .notOneOf(
            [Yup.ref("nuevaContraseña")],
            "Ambas contraseñas tienen que ser diferentes"
        ),
    nuevaContraseña: Yup.string().required("Dato requerido"),
    nuevaContraseñaConfirmation: Yup.string()
        .required("Dato requerido")
        .when("nuevaContraseña", {
            is: (val) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("nuevaContraseña")],
                "Ambas contraseñas tienen que ser iguales"
            ),
        }),
});

const Perfil = () => {
    const { userInfo } = useAuthStore();
    const { cambiarContraseña, cambiarNombre, getSuscripciones } = useApiStore();

    useEffect(() => {
        getSuscripciones();
    }, []);

    return (
        <div className="flex flex-col gap-5">
            <div>
                <h3 className="title text-2xl text-sky-500">
                    Empresa / Razón social:
                </h3>
                <samp>{userInfo.company.legal_name}</samp>
            </div>
            <div className="flex justify-evenly">
                <div className="flex flex-col gap-5">
                    <h3 className="title text-2xl text-sky-500">
                        Datos de perfil:
                    </h3>
                    <Formik
                        initialValues={{
                            nombre: userInfo.name,
                        }}
                        validationSchema={NameSchema}
                        onSubmit={(values) => {
                            // same shape as initial values
                            cambiarNombre(values.nombre);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className="flex flex-col text-sm text-stone-400 gap-5">
                                <div className="flex flex-col">
                                    <label for="exampleFormControlInput1">
                                        Nombre
                                    </label>
                                    <Field
                                        name="nombre"
                                        type="text"
                                        className="border w-64  rounded-xl h-11  p-1 bg-slate-50"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label for="exampleFormControlInput1">
                                        Correo electrónico
                                    </label>
                                    <Field
                                        name="correo"
                                        type="email"
                                        className="border w-64 rounded-xl h-11 p-1 bg-slate-50 cursor-not-allowed"
                                        value={userInfo.email}
                                        disabled
                                    />
                                </div>
                                <button
                                    className="rounded-xl w-32 h-11 subtitle text-white text-xl self-end bg-sky-500 active:scale-90 duration-100"
                                    type="submit"
                                >
                                    Editar
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>

                <div className="flex flex-col gap-5">
                    <h3 className="title text-2xl text-sky-500">Seguridad:</h3>
                    <Formik
                        initialValues={{
                            contraseña: "",
                            nuevaContraseña: "",
                            nuevaContraseñaConfirmation: "",
                        }}
                        validationSchema={PasswordSchema}
                        onSubmit={(values) => {
                            // same shape as initial values
                            cambiarContraseña(values);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className="flex flex-col text-sm text-stone-400 gap-5">
                                <div className="flex flex-col">
                                    <label for="exampleFormControlInput1">
                                        Contraseña actual
                                    </label>
                                    <Field
                                        name="contraseña"
                                        type="password"
                                        className="border w-64  rounded-xl h-11  p-1 bg-slate-50"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label for="exampleFormControlInput1">
                                        Nueva contraseña
                                    </label>
                                    <Field
                                        name="nuevaContraseña"
                                        type="password"
                                        className="border w-64 rounded-xl h-11 p-1 bg-slate-50"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label for="exampleFormControlInput1">
                                        Confirmar contraseña
                                    </label>
                                    <Field
                                        name="nuevaContraseñaConfirmation"
                                        type="password"
                                        className="border w-64 rounded-xl h-11 p-1 bg-slate-50"
                                    />
                                </div>
                                <button
                                    className="rounded-xl w-32 h-11 subtitle text-white text-xl self-end bg-sky-500 active:scale-90 duration-100"
                                    type="submit"
                                >
                                    Editar
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Perfil;
