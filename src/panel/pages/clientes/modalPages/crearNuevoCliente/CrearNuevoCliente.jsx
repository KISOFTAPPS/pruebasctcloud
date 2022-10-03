import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useApiStore } from "../../../../../hooks";

const RegisterSchema = Yup.object().shape({
    nombreEmpresa: Yup.string().required("Dato requerido"),
    primerNombre: Yup.string().required("Dato requerido"),
    primerApellido: Yup.string().required("Dato requerido"),
    telefono: Yup.number().required("Dato requerido"),
    rfc: Yup.string().required("Dato requerido"),
    direccion: Yup.object()
        .required("Dato requerido")
        .shape({
            zip: Yup.number().required("Dato requerido"),
            exterior: Yup.number().required("Dato requerido"),
            interior: Yup.string().required("Dato requerido"),
            street: Yup.string().required("Dato requerido"),
            neighborhood: Yup.string().required("Dato requerido"),
            city: Yup.string().required("Dato requerido"),
            state: Yup.string().required("Dato requerido"),
            country: Yup.string().required("Dato requerido"),
        }),
    email: Yup.string().email("Email invalido").required("Dato requerido"),
});

export const CrearNuevoCliente = () => {
    const { crearCliente } = useApiStore();
    return (
        <section className="flex flex-col gap-5">
            <Formik
                initialValues={{
                    nombreEmpresa: "",
                    primerNombre: "",
                    primerApellido: "",
                    telefono: "",
                    rfc: "",
                    direccion: {
                        zip: "",
                        exterior: "",
                        interior: "",
                        street: "",
                        neighborhood: "",
                        city: "",
                        state: "",
                        country: "",
                    },
                    email: "",
                }}
                validationSchema={RegisterSchema}
                onSubmit={({
                    nombreEmpresa,
                    primerNombre,
                    primerApellido,
                    telefono,
                    rfc,
                    direccion,
                    email,
                }) => {
                    // same shape as initial values
                    crearCliente(
                        nombreEmpresa,
                        primerNombre,
                        primerApellido,
                        telefono,
                        rfc,
                        direccion,
                        email
                    );
                    
                }}
            >
                {({ errors, touched }) => (
                    <Form className="flex flex-col text-sm text-stone-400 gap-5">
                        <h3 className="title text-2xl text-black">
                            Datos de la empresa:
                        </h3>
                        <div className="bg-white grid grid-cols-4 gap-x-5 border-2 border-dashed border-sky-500 rounded-xl p-5">
                            <div className="flex flex-col">
                                <label for="exampleFormControlInput1">
                                    Nombre de la Empresa
                                </label>
                                <Field
                                    name="nombreEmpresa"
                                    type="text"
                                    className="border rounded-xl h-11 mb-7 p-1 bg-slate-50"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label for="exampleFormControlInput1">
                                    Razón Social
                                </label>
                                <Field
                                    name="name"
                                    type="text"
                                    className="border rounded-xl h-11 mb-7 p-1 bg-slate-50"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label for="exampleFormControlInput1">
                                    RFC
                                </label>
                                <Field
                                    name="rfc"
                                    type="text"
                                    className="border rounded-xl h-11 mb-7 p-1 bg-slate-50"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label for="exampleFormControlInput1">
                                    Código Postal
                                </label>
                                <Field
                                    name="direccion.zip"
                                    type="text"
                                    className="border rounded-xl h-11 mb-7 p-1 bg-slate-50"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label for="exampleFormControlInput1">
                                    Número Exterior
                                </label>
                                <Field
                                    name="direccion.exterior"
                                    type="text"
                                    className="border rounded-xl h-11 mb-7 p-1 bg-slate-50"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label for="exampleFormControlInput1">
                                    Número Interior
                                </label>
                                <Field
                                    name="direccion.interior"
                                    type="text"
                                    className="border rounded-xl h-11 mb-7 p-1 bg-slate-50"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label for="exampleFormControlInput1">
                                    Calle
                                </label>
                                <Field
                                    name="direccion.street"
                                    type="text"
                                    className="border rounded-xl h-11 mb-7 p-1 bg-slate-50"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label for="exampleFormControlInput1">
                                    Colonia
                                </label>
                                <Field
                                    name="direccion.neighborhood"
                                    type="text"
                                    className="border rounded-xl h-11 mb-7 p-1 bg-slate-50"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label for="exampleFormControlInput1">
                                    Municipio
                                </label>
                                <Field
                                    name="direccion.city"
                                    type="text"
                                    className="border rounded-xl h-11 mb-7 p-1 bg-slate-50"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label for="exampleFormControlInput1">
                                    Estado
                                </label>
                                <Field
                                    name="direccion.state"
                                    type="text"
                                    className="border rounded-xl h-11 mb-7 p-1 bg-slate-50"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label for="exampleFormControlInput1">
                                    Pais
                                </label>
                                <Field
                                    name="direccion.country"
                                    type="text"
                                    className="border rounded-xl h-11 mb-7 p-1 bg-slate-50"
                                />
                            </div>
                        </div>
                        <h3 className="title text-2xl text-black">
                            Datos de contacto:
                        </h3>
                        <div className="bg-white grid grid-cols-4 gap-x-5 border-2 border-dashed border-sky-500 rounded-xl p-5">
                            <div className="flex flex-col">
                                <label for="exampleFormControlInput1">
                                    Primer Nombre
                                </label>
                                <Field
                                    name="primerNombre"
                                    type="text"
                                    className="border rounded-xl h-11 mb-7 p-1 bg-slate-50"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label for="exampleFormControlInput1">
                                    Apellido Paterno
                                </label>
                                <Field
                                    name="primerApellido"
                                    type="text"
                                    className="border rounded-xl h-11 mb-7 p-1 bg-slate-50"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label for="exampleFormControlInput1">
                                    Correo Electrónico
                                </label>
                                <Field
                                    name="email"
                                    type="text"
                                    className="border rounded-xl h-11 mb-7 p-1 bg-slate-50"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label for="exampleFormControlInput1">
                                    Teléfono
                                </label>
                                <Field
                                    name="telefono"
                                    type="number"
                                    className="border rounded-xl h-11 mb-7 p-1 bg-slate-50"
                                />
                            </div>
                        </div>
                        <button
                            className="rounded-xl w-72 h-12 subtitle text-white text-xl self-center"
                            type="submit"
                            style={{
                                backgroundColor: "#44bfff",
                            }}
                        >
                            Crear cliente
                        </button>
                    </Form>
                )}
            </Formik>
        </section>
    );
};
