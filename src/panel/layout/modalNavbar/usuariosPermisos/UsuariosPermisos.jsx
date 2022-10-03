import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Dato requerido"),
    email: Yup.string().email("Email invalido").required("Dato requerido"),
    password: Yup.string().required("Dato requerido"),
    passwordConfirmation: Yup.string()
        .required("Dato requerido")
        .when("password", {
            is: (val) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Ambas contraseñas tienen que ser iguales"
            ),
        }),
});

const UsuariosPermisos = () => {
    return (
        <div className="flex flex-col gap-5">
            <h3 className="title text-2xl text-sky-500">
                Invitar a colaborador:
            </h3>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    passwordConfirmation: "",
                }}
                validationSchema={RegisterSchema}
                onSubmit={(values) => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form className="flex text-sm text-stone-400 gap-5">
                        <div className="flex flex-col">
                            <label for="exampleFormControlInput1">
                                Correo electrónico
                            </label>
                            <Field
                                name="name"
                                type="text"
                                className="border w-64  rounded-xl h-11  p-1 bg-slate-50"
                            />
                        </div>

                        <button
                            className="rounded-xl w-56 h-11 subtitle text-white text-xl self-end bg-sky-500 active:scale-90 duration-100"
                            type="submit"
                        >
                            Enviar invitación
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UsuariosPermisos;
