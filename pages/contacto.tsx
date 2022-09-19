import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Divisor from 'components/Divisor'
import { Footer } from 'components/Layout'
import { FormEvent, useState } from 'react'
import MainImage from 'components/MainImage'
import { usePlausible } from 'next-plausible'
import axios from 'axios'

const Contacto: NextPage = () => {

    const plausible = usePlausible()

    async function sendMail(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = new FormData(e.currentTarget)

        const mail = await axios.post('/api/send_email', {
            name: form.get('name'),
            phone: form.get('tel'),
            text: form.get('text'),
        })
        .catch(() => {throw alert('Hubo un error. Porfavor comunícate con nosotros.')})
        .then(() => {
            plausible('Consulta')
            return alert('Hemos recibido tu consulta y en las próximas 48h hábiles nos contactaremos con usted.')
        })
    }

    return (
        <>
            <Head>
                <title>Contactanos</title>
                <meta name="description" content="Te responderemos lo antes posible" />
            </Head>   
            <section className='pt-10 lg:pt-20'>

                {/* TOP */}
                {/* <MainImage className='mb-10 lg:mb-20' image={{ src: '/images/DOCTOR_DIGITAL.jpg', position: 'center', fit: 'cover', alt: 'IMAGEN DE FONDO RADIOLOGIA', priority: true }} /> */}

                <div className="flex flex-col gap-5 lg:flex-row lg:px-20 lg:w-full lg:max-w-screen-2xl lg:mx-auto lg:mb-20">
                    <article className="lg:w-1/2">
                        <h1 className="title-w-desc lg:text-7xl lg:text-left">Contactanos</h1>
                        <p className='description w-3/4 mx-auto lg:text-left lg:m-0 lg:p-0'>Te responderemos lo antes posible</p>
                    </article>

                    <div className="lg:mx-auto lg:w-1/2">
                        
                        {/* <h2 className='text-center text-brandOrange font-main text-xl font-bold mb-5 lg:mb-10 lg:text-2xl'>Contactanos por correo electrónico</h2> */}
                        
                        <form className='flex flex-col items-center gap-2' onSubmit={(e) => sendMail(e)}>
                            <div className="flex flex-col gap-2 w-3/4 lg:flex-row lg:w-full">
                                <input name='name' className='contactanos-input h-12' type="text" placeholder='Nombre completo:' required />
                                <input name='tel' className='contactanos-input h-12' type="number" placeholder='Número de teléfono:' required />
                            </div>
                            <div className="w-3/4 lg:w-full">
                                <textarea name='text' className='contactanos-input h-32' placeholder='Motivo de su Consulta:' required></textarea>
                            </div>
                            <div className="flex flex-col gap-2 w-3/4 lg:w-full">
                                <input type="submit" value="Enviar correo electrónico" className='
                                    w-full text-white font-main font-medium text-lg bg-brandOrange py-2 rounded-md
                                    lg:text-left pl-4
                                ' />
                                <a href='https://wa.me/+543543608379?text=Hola, quiero realizar una consulta' target='_blank' rel='noreferrer' className='
                                    w-full text-white font-main font-medium text-lg bg-[#25D366] py-2 rounded-md text-center
                                    lg:text-left lg:px-4 lg:flex lg:justify-between
                                ' 
                                onClick={() => plausible('WhatsappClick')}
                                >O contactanos por Whatsapp
                                    <div className="hidden lg:block relative w-6 h-6">
                                        <Image layout='fill' src='/icons/WHATSAPP_WHITE.svg' alt='ICONO WHATSAPP' />
                                    </div>
                                </a>
                            </div>
                        </form>

                    </div>
                </div>

                <div className="mt-10 lg:mt-20">
                    <Divisor />
                </div>
                
            </section>
            <Footer media map footer />
        </>
    )
}

export default Contacto