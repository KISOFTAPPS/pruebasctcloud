import React from 'react'


export const Cliente = () => {
    return (
        <section className="flex flex-col gap-5 ">
            <h1 className="title text-6xl">Cliente: <span className='text-sky-500 subtitle'>CT</span></h1>
            <h3 className="title text-2xl ">Datos del cliente:</h3>
            <div className="p-5 bg-white rounded-3xl shadow-xl font-bold scroll-smooth border-2 border-dashed border-sky-500">
                <table class="table-fixed w-full text-center">
                    <thead>
                        <tr className="text-slate-500">
                            <th >Correo electrónico</th>
                            <th >Fecha de registro</th>
                            <th >Domicilio</th>
                            <th >Teléfono</th>
                        </tr>
                    </thead>
                    <tbody className="border-t divide-y">
                        <tr className="hover:bg-blue-500 hover:text-white hover:shadow-inner duration-200 group">
                            <td >
                                juan.salazar@ctin.com.mx
                            </td>
                            <td >Aug 15, 2019 12:52 PM</td>
                            <td className='text-justify'>Hermenegildo Rangel Lugo 168, col. Centro, Hermosillo, Sonora</td>
                            <td >6622029702</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h3 className="title text-2xl ">Suscripciones:</h3>
            <div className="p-5 bg-white rounded-3xl shadow-xl font-bold scroll-smooth border-2 border-dashed border-sky-500">
                <table class="table-fixed text-center w-full">
                    <thead>
                        <tr className="text-slate-500">
                            <th className="">Plan</th>
                            <th className="">Fecha de inicio</th>
                            <th className="">Cantidad</th>
                        </tr>
                    </thead>
                    <tbody className="border-t divide-y">
                        <tr className="hover:bg-blue-500 hover:text-white duration-200 hover:shadow-inner" >
                            <td className="p-4 subtitle">Plan básico</td>

                            <td className="p-4">Jun 18, 2021 1:20 PM</td>
                            <td className="p-4">1</td>
                        </tr>
                        <tr className="hover:bg-blue-500 hover:text-white duration-200 hover:shadow-inner" >
                            <td className="p-4 subtitle">Plan básico</td>

                            <td className="p-4">Jun 18, 2021 1:20 PM</td>
                            <td className="p-4">1</td>
                        </tr>
                        <tr className="hover:bg-blue-500 hover:text-white duration-200 hover:shadow-inner" >
                            <td className="p-4 subtitle">Plan básico</td>

                            <td className="p-4">Jun 18, 2021 1:20 PM</td>
                            <td className="p-4">1</td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </section>
    )
}
