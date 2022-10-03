import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import backgr from "/assets/img/background.png";
import { useAuthStore } from "../../../../hooks";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Correo invalido")
        .required("El correo es requerido"),
    password: Yup.string().required("La contraseña es requerida"),
});

const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Dato requerido"),
    email: Yup.string().email("Correo invalido").required("Dato requerido"),
    password: Yup.string().required("Dato requerido").min(8),
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

const dropIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        trasition: {
            duration: 0.1,
        },
    },
    exit: { opacity: 0 },
};

const HomeSeccion1 = () => {
    const { startLogin, startRegister, message } = useAuthStore();

    const navigate = useNavigate();

    console.log(message);

    return (
        <section
            className="flex justify-center items-center pb-8 pt-8 sm:pt-28 min-h-screen"
            style={{
                backgroundImage: `url(${backgr})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="flex items-center flex-col md:flex-row gap-16">
                <div className="text-white flex flex-col items-center mt-24 md:mt-0">
                    <div className="text-center mb-11">
                        <h1 className="title text-5xl  sm:text-7xl">
                            Bienvenido
                        </h1>
                        <p className="sm:text-lg text-sm">
                            Comienza a utilizar CT Cloud para tu negocio
                        </p>
                    </div>

                    <div>
                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                            }}
                            validationSchema={LoginSchema}
                            onSubmit={(value) => {
                                // same shape as initial values
                                startLogin(value);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form className="flex flex-col w-72 relative gap-2">
                                    <Field
                                        name="email"
                                        type="email"
                                        placeholder="Correo"
                                        className="rounded h-10 mb-5 p-1 text-stone-400 opacity-80 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                        invalid:border-pink-500 invalid:text-pink-600
                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                    />
                                    <AnimatePresence
                                        initial={false}
                                        mode="wait"
                                        onExitComplete={() => null}
                                    >
                                        {errors.email && touched.email ? (
                                            <motion.div
                                                variants={dropIn}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                className="absolute text-pink-800 font-bold"
                                                style={{ top: "2.4rem" }}
                                            >
                                                {errors.email}
                                            </motion.div>
                                        ) : null}
                                    </AnimatePresence>

                                    <Field
                                        name="password"
                                        type="password"
                                        placeholder="Contraseña"
                                        className="rounded h-10 mb-5 p-1 text-stone-400 opacity-80 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                        invalid:border-pink-500 invalid:text-pink-600
                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                    />
                                    <AnimatePresence
                                        initial={false}
                                        mode="wait"
                                        onExitComplete={() => null}
                                    >
                                        {errors.password && touched.password ? (
                                            <motion.div
                                                variants={dropIn}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                className="absolute text-pink-800 font-bold"
                                                style={{ top: "6.67rem" }}
                                            >
                                                {errors.password}
                                            </motion.div>
                                        ) : null}
                                    </AnimatePresence>

                                    <p
                                        to="recuperar"
                                        className="self-end underline mt-5 cursor-pointer"
                                        onClick={() => {
                                            navigate("/recuperar");
                                        }}
                                    >
                                        Olvide mi contraseña
                                    </p>

                                    <div className="text-center mt-5">
                                        <button
                                            className="px-8 py-3 rounded-full subtitle active:scale-90 duration-100 shadow-xl active:shadow-none"
                                            type="submit"
                                            style={{
                                                backgroundColor: "#44bfff",
                                            }}
                                        >
                                            INICIAR SESIÓN
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>

                <div
                    className="bg-white w-80 sm:w-96 rounded-xl shadow-2xl relative"
                    style={{
                        height: "38rem",
                        backgroundImage:
                            "radial-gradient(circle farthest-side at 50% -230px , #44bfff 50%, #fff 50.3%)",
                    }}
                >
                    <AnimatePresence
                        initial={false}
                        mode="wait"
                        onExitComplete={() => null}
                    >
                        {message.type === "register" && (
                            <motion.div
                                variants={dropIn}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="z-10  bg-white absolute top-36 left-0 p-1"
                            >
                                <p className="text-sm text-justify text-pink-800 font-bold">
                                    {message.msg}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="flex flex-col items-center mt-16 text-white">
                        <h1 className="title text-2xl">
                            Eres nuevo en CT Cloud
                        </h1>
                        <p className="text-sm">Regístrate para comenzar</p>
                        <hr className="w-9 mt-5 mb-9" />
                    </div>
                    <div>
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
                                startRegister(values);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form className="flex flex-col p-10 text-sm text-stone-400 gap-1">
                                    <label for="exampleFormControlInput1">
                                        Nombre Completo*
                                    </label>
                                    <Field
                                        name="name"
                                        type="text"
                                        className={`border-2 rounded h-11 mb-5 p-1 opacity-80 focus:outline-none focus:ring-1 disabled:bg-slate-50 0  disabled:border-slate-200 disabled:shadow-none ${
                                            errors.name && touched.name
                                                ? "border-pink-500 text-pink-600 invalid:border-pink-500 focus:ring-pink-500 "
                                                : "focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:text-slate-500 text-stone-40"
                                        }  `}
                                    />
                                    <label for="exampleFormControlInput1">
                                        Correo Electronico*
                                    </label>
                                    <Field
                                        name="email"
                                        type="email"
                                        className={`border-2 rounded h-11 mb-5 p-1 text-stone-400 opacity-80 focus:outline-none focus:ring-1 disabled:text-slate-500 disabled:bg-slate-50  disabled:border-slate-200 disabled:shadow-none ${
                                            errors.email && touched.email
                                                ? "border-pink-500 text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:border-blue-500 focus:ring-blue-500"
                                                : "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:border-blue-500 focus:ring-blue-500"
                                        }`}
                                    />
                                    <label for="exampleFormControlInput1">
                                        Contraseña*
                                    </label>
                                    <Field
                                        name="password"
                                        type="password"
                                        className={`border-2 rounded h-11 mb-5 p-1 opacity-80 focus:outline-none focus:ring-1 disabled:bg-slate-50 0  disabled:border-slate-200 disabled:shadow-none ${
                                            errors.password && touched.password
                                                ? "border-pink-500 text-pink-600 invalid:border-pink-500 focus:ring-pink-500 "
                                                : "focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:text-slate-500 text-stone-40"
                                        }  `}
                                    />
                                    <label for="exampleFormControlInput1">
                                        Confirma tu Contraseña*
                                    </label>
                                    <Field
                                        name="passwordConfirmation"
                                        type="password"
                                        className={`border-2 rounded h-11 mb-5 p-1 opacity-80 focus:outline-none focus:ring-1 disabled:bg-slate-50 0  disabled:border-slate-200 disabled:shadow-none ${
                                            errors.passwordConfirmation &&
                                            touched.passwordConfirmation
                                                ? "border-pink-500 text-pink-600 invalid:border-pink-500 focus:ring-pink-500 "
                                                : "focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:text-slate-500 text-stone-40"
                                        }  `}
                                    />

                                    <button
                                        className="sm:w-72 w-52 rounded h-12 subtitle text-white text-xl self-center active:scale-90 duration-100 shadow-xl active:shadow-none"
                                        type="submit"
                                        style={{
                                            backgroundColor: "#44bfff",
                                        }}
                                    >
                                        CREAR CUENTA
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSeccion1;
