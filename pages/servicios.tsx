import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Estudios from 'components/index/Estudios'
import Divisor from 'components/Divisor'
import ObrasSociales from 'components/index/ObrasSociales'
import { Footer } from 'components/Layout'
import MainImage from 'components/MainImage'
import { usePlausible } from 'next-plausible'

import { SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import { useState, SetStateAction, Dispatch, useEffect } from 'react'
import SwiperPictures from 'components/SwiperPictures'
import MainSwiper from 'components/MainSwiper'
import { serviciosList } from 'components/index/Servicios'

const items: { title: string, desc: string }[] = [
    { title: "Inmediatez", desc: "En el mismo momento que finaliza el estudio, usted puede verlo." },
    { title: "Ecología", desc: "Cuidamos el planeta, todo nuestro sistema es digital, no utilizamos ninguna impresión." },
    { title: "Cuidamos tu tiempo", desc: "No tiene que volver a buscar sus estudios." },
    { title: "Practicidad", desc: "Puede ver sus estudios por nuestra plataforma WEB y a través de WhatsApp." },
    { title: "Pensamos en tu comodidad", desc: "Con sólo con un click puede enviar sus estudios a quien desee." },
]

const Servicio = ({ index, item, isActive, setServicioActivo }: { index: number, item: { text: string, items: string[] }, isActive: boolean, setServicioActivo: Dispatch<SetStateAction<number | null>> }) => {
    
    return (
        <li onClick={() => setServicioActivo(() => isActive ? null : index)}
        className={`bg-brandOrange py-4 flex flex-col items-center w-full rounded-md hover:cursor-pointer
            lg:min-w-max select-none duration-200 px-4
            ${isActive ? "gap-3" : "gap-1"}
        `} 
        >

            <h3 className='
                font-secondary font-bold text-2xl
                lg:text-3xl
            '>{item.text}</h3>

            <ul className={`
                font-din font-light text-lg text-left whitespace-pre flex flex-col items-start justify-center transition-[height,_opacity] 
                `}>
                {
                    item.items.map((text, i) => {
                        return (
                            <li key={i} className={`duration-200 list-disc ${ isActive ? `h-[28px] opacity-100` : `h-[0px] opacity-0` }`}>{text}</li>
                        )
                    })
                }
            </ul>
            <span className='font-din font-light text-lg lg:text-2xl'>{isActive ? "Ocultar" : "Ver Más"}</span>
        </li>
    )
}

const ServiciosList = () => {

    const [servicioActivo, setServicioActivo] = useState<number | null>(null)

    return (
        <ul className='
        flex flex-col items-center gap-2 w-full px-4 mx-auto 
        lg:gap-10 lg:flex-row lg:justify-center lg:items-stretch
    '>
        <li className='h-max w-full max-w-md'>
            <ul className='flex flex-col gap-2 lg:gap-10'>
                {
                    serviciosList.slice(0, 2).map((item, index: number) => (
                        <Servicio index={index} key={index} item={item} isActive={servicioActivo === index} setServicioActivo={setServicioActivo} />
                    ))
                }

            </ul>
        </li>
        <li className='h-max w-full max-w-md'>
            <ul className='flex flex-col gap-2  lg:gap-10'>
                {
                    serviciosList.slice(2, 4).map((item, index: number) => (
                        <Servicio index={index + 2} key={index} item={item} isActive={servicioActivo === index + 2} setServicioActivo={setServicioActivo} />
                    ))
                }
            </ul>
        </li>
        <li className='h-max w-full max-w-md'>
            <ul className='flex flex-col gap-2  lg:gap-10'>
                {
                    serviciosList.slice(4, 6).map((item, index: number) => (
                        <Servicio index={index + 4} key={index} item={item} isActive={servicioActivo === index + 4} setServicioActivo={setServicioActivo} />
                    ))
                }
            </ul>
        </li>
    </ul>
    )
}

const ButtonTurno = () => {

    const plausible = usePlausible()
    
    return (
        <a href={`https://wa.me/+543543608379?text=${encodeURIComponent("Hola, quiero realizar una consulta")}`} target='_blank' rel='noreferrer' 
            className="rounded w-max py-2 px-6 bg-brandOrange flex items-center gap-4 shadow-simple hover:hover:-translate-y-[0.125rem] duration-200"
            onClick={() => plausible('WhatsappClick')}
        >
            <div className="relative w-5 h-5 lg:w-6 lg:h-6">
                <Image layout='fill' src='/icons/WHATSAPP_WHITE.svg' alt='ICONO WHATSAPP' />
            </div>
            <span className='font-din-pro uppercase text-lg'>Pedí un turno</span>
        </a>
    )
}

const ButtonLaboratorio = () => {

    const plausible = usePlausible()
    
    return (
        <a href={`tel:+543543538208`} onClick={() => plausible('LaboratorioClick')} className="
            rounded w-max py-2 px-6 bg-brandOrange flex items-center gap-4 shadow-simple hover:hover:-translate-y-[0.125rem] duration-200
            font-din-pro uppercase text-lg
        ">
            <span className='hidden lg:inline'>Laboratorio (3543-538208)</span>
            <span className='lg:hidden'>Contactar Laboratorio</span>
        </a>
    )
}

const Servicios: NextPage = () => {

    return (
        <>
            <Head>
                <title>Servicios</title>
                <meta name="description" content="Un servicio creado para tu satisfacción" />
            </Head>
            <section className='pt-10 lg:pt-20'>

                <h1 className="title-w-desc">Nuestros Servicios</h1>

                <div className="relative mb-5 lg:mb-10">
                    <ServiciosList />
                </div>

                <div className="mb-10 lg:mb-20 flex flex-col justify-center items-center gap-5 lg:gap-10 lg:flex-row">
                    <ButtonTurno />
                    <ButtonLaboratorio />
                </div>

                <SwiperPictures />

                <div className="mb-10 lg:mb-20">
                    <Divisor />
                </div>

                {/* LABORATORIOS */}
                <div className="
                    flex flex-col gap-10 items-center
                    lg:flex-row lg:justify-center lg:gap-20 lg:px-20 lg:max-w-screen-2xl lg:mx-auto
                ">

                    <div className="flex flex-col gap-2 lg:gap-4">
                        
                        <h4 className='
                            text-brandOrange font-din-pro font-bold text-2xl text-center
                            lg:text-4xl lg:text-left
                        '>Contamos con un laboratorio</h4>
                        
                        <p className='text-brandOrange font-din-pro font-[400] text-center max-w-sm 
                            lg:max-w-md lg:text-xl lg:min-w-[300px] lg:text-left
                        '>Prestigioso y con años de experiencia, que avalan su calidad de atención y resultados.</p>

                    </div>

                    <div className="block w-3/4 max-w-sm ">
                        <Image width={740} height={220} src='/icons/LABORATORIO_1.png' alt='' />
                    </div>

                    <div className="block w-3/4 max-w-sm ">
                        <Image layout='responsive' width={740} height={312.49} src='/icons/LABORATORIO_2.png' alt='' />
                    </div>
                    
                </div>

                <ObrasSociales />

                <Estudios />

                {/* SERVICIO PARA TU SATISFACCIÓN */}
                <div className="
                    flex flex-col items-center mt-10 lg:mt-20 px-5 relative
                    lg:px-20 lg:max-w-6xl lg:mx-auto lg:items-start
                ">

                    <div className="hidden lg:block absolute max-w-sm right-20 top-[calc(50%-192px)]">
                        <Image width={500} height={389} src='/icons/CID_ORANGE.svg' alt='CID LOGO NARANJA' />
                    </div>
                    
                    <h2 className='title-w-desc lg:max-w-lg lg:text-left'>Un servicio creado para tu satisfacción</h2>

                    {/* CARACTERISTICAS */}
                    <ul className='flex flex-col gap-10 mb-10 lg:mb-20'>
                        {
                            items.map((item, index) => (
                                <li key={index} className='
                                    flex flex-col gap-1 justify-center items-center max-w-md
                                    lg:flex-row lg:gap-6
                                '>
                                    
                                    <div className="relative w-6 h-6 lg:w-10 lg:h-10">
                                        <Image layout='fill' src='/icons/CHECK.svg' alt='CHECK ICON'/>
                                    </div>
                                    <div className="
                                        flex flex-col gap-1 justify-center items-center
                                        lg:items-start lg:w-full
                                    ">

                                        <h5 className='text-brandOrange text-xl lg:text-2xl'>{item.title}</h5>
                                        <p className='
                                            text-brandGray text-center font-din-pro font-[400] 
                                            lg:text-left lg:text-xl
                                        '>{item.desc}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="flex flex-col justify-center items-center gap-5 lg:gap-10 lg:flex-row">
                        <ButtonTurno />
                        <ButtonLaboratorio />
                    </div>

                </div>

            </section>
            <Footer footer />
        </>
    )
}

export default Servicios
