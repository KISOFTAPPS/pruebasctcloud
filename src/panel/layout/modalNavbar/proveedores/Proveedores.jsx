import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useAuthStore } from "../../../../hooks";

const MPNSchema = Yup.object().shape({
    MPN: Yup.number().required("Dato requerido"),
   
});

const Proveedores = () => {
    const {userInfo} = useAuthStore()
console.log()
    return (
        <div className="flex flex-col gap-5">
            <h3 className="title text-2xl text-sky-500">Microsoft:</h3>
            <Formik
                initialValues={{
                    MPN: userInfo.company.referralId.microsoft,
                }}
                validationSchema={MPNSchema}
                onSubmit={(values) => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form className="flex text-sm text-stone-400 gap-5">
                        <div className="flex flex-col">
                            <label for="exampleFormControlInput1">MPN</label>
                            <Field
                                name="MPN"
                                type="number"
                                className="border w-64  rounded-xl h-11  p-1 bg-slate-50"
                                disabled
                                values={userInfo.company.referralId.microsoft}
                            />
                        </div>
                        <button className="rounded-xl w-32 h-11 subtitle text-white text-xl self-end bg-sky-500 duration-100 opacity-50" type="submit" disabled >Editar</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Proveedores;
