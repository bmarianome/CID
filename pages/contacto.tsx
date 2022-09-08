import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Divisor from 'components/Divisor'
import { Footer } from 'components/Layout'
import { useState } from 'react'

const Contacto: NextPage = () => {

    return (
        <>
            <section>

                {/* TOP */}
                <div className="relative w-full h-[calc(100vh-80px)] flex flex-col">

                    <div className="h-full relative bg-white-gradient">
                        <div className="w-full h-full absolute -z-10">
                            <Image priority layout='fill' objectFit='cover' objectPosition='bottom' src={'/images/DOCTOR_DIGITAL.jpg'} alt='IMAGEN DE FONDO RADIOLOGIA' />
                        </div>
                    </div>
                    
                    <div className="absolute top-1/3 w-full h-max lg:inline-block">
                        <Divisor />
                    </div>

                    <h1 className="title-w-desc">Contactanos</h1>
                    <p className='description'>Te responderemos lo antes posible</p>
                    
                </div>

                <div className="mt-20 lg:mx-auto lg:px-20 lg:max-w-screen-xl">
                    
                    <h2 className='text-center text-brandOrange font-main text-xl font-bold mb-5 lg:mb-10 lg:text-2xl'>Contactanos por correo electrónico</h2>
                    
                    <form className='flex flex-col items-center gap-2'>
                        <div className="flex flex-col gap-2 w-3/4 lg:flex-row lg:w-full">
                            <input className='contactanos-input h-12' type="text" placeholder='Nombre completo:' />
                            <input className='contactanos-input h-12' type="number" placeholder='Número de teléfono:' />
                        </div>
                        <div className="w-3/4 lg:w-full">
                            <textarea className='contactanos-input h-32' placeholder='Motivo de su Consulta:'></textarea>
                        </div>
                        <div className="flex flex-col gap-2 w-3/4 lg:flex-row lg:w-full">
                            <input type="submit" value="Enviar correo electrónico" className='
                                w-full text-white font-main font-medium text-lg bg-brandOrange py-2 rounded-md
                                lg:text-left pl-4
                            ' />
                            <a href='https://wa.me/+543543608379?text=Hola, quiero realizar una consulta' target='_blank' rel='noreferrer' className='
                                w-full text-white font-main font-medium text-lg bg-[#25D366] py-2 rounded-md text-center
                                lg:text-left lg:px-4 lg:flex lg:justify-between
                            ' >O contactanos por Whatsapp
                                <div className="hidden lg:block relative w-6 h-full">
                                    <Image layout='fill' src='/icons/WHATSAPP_WHITE.svg' alt='ICONO WHATSAPP' />
                                </div>
                            </a>
                        </div>
                    </form>

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