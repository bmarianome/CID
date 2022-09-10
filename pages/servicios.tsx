import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Estudios from 'components/index/Estudios'
import Divisor from 'components/Divisor'
import ObrasSociales from 'components/index/ObrasSociales'
import { Footer } from 'components/Layout'

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import { useState, SetStateAction, Dispatch, useEffect } from 'react'

const items: { title: string, desc: string }[] = [
    { title: "Inmediatez", desc: "En el mismo momento que finaliza el estudio, usted puede verlo." },
    { title: "Ecología", desc: "Cuidamos el planeta, todo nuestro sistema es digital, no utilizamos ninguna impresión." },
    { title: "Cuidamos tu tiempo", desc: "No tiene que volver a buscar sus estudios." },
    { title: "Practicidad", desc: "Puede ver sus estudios por nuestra plataforma WEB y a través de WhatsApp." },
    { title: "Pensamos en tu comodidad", desc: "Con sólo con un click puede enviar sus estudios a quien desee." },
]

const serviciosList: { text: string, desc: string }[] = [
    { text: "Ecografías", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam amet iure. Aliquam beatae sit labore aut cumque autem distinctio commodi." }, 
    { text: "Radiología", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam amet iure. Aliquam beatae sit labore aut cumque autem distinctio commodi." }, 
    { text: "Mamografía", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam amet iure. Aliquam beatae sit labore aut cumque autem distinctio commodi." }, 
    { text: "Cardiología", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam amet iure. Aliquam beatae sit labore aut cumque autem distinctio commodi." }, 
    { text: "Ortopantomografía", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam amet iure. Aliquam beatae sit labore aut cumque autem distinctio commodi." }, 
    { text: "Laboratorio", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam amet iure. Aliquam beatae sit labore aut cumque autem distinctio commodi." }
]

const Servicio = ({ index, text, desc, servicioActivo, setServicioActivo }: { index: number, text: string, desc: string, servicioActivo: number | null, setServicioActivo: Dispatch<SetStateAction<number>> }) => {
    return (
        <li onClick={() => servicioActivo === index ? null : setServicioActivo(index)}
        className={`bg-brandOrange py-4 flex flex-col items-center gap-1 w-full rounded-md hover:cursor-pointer
            lg:min-w-[320px] select-none
        `} 
        
        >

            <h3 className='
                font-secondary font-bold text-2xl
                lg:text-3xl
            '>{text}</h3>

            <p className={`
                font-din font-light text-lg text-center flex items-center justify-center px-4 transition-[height,_opacity] 
                ${index === servicioActivo ? 'h-40 opacity-1 delay-[0s,_.1s]' : 'h-0 opacity-0 delay-[0s,_0s]'}
            `}>
                {desc}
            </p>
            <span className='font-din font-light text-lg lg:text-xl'>{servicioActivo === index ? "Ocultar" : "Ver Más"}</span>
        </li>
    )
}

const ServiciosList = () => {

    const [servicioActivo, setServicioActivo] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setServicioActivo(() => {
                if (servicioActivo === serviciosList.length - 1) return 0
                else return servicioActivo + 1 ?? 1
            })
        }, 4000)
        return() => clearInterval(interval)
    })
    
    return (
        <ul className='
        flex flex-col items-center gap-2 w-4/5 mx-auto 
        lg:gap-10 
    '>
        <li className='h-max'>
            <ul className='flex flex-col gap-2 lg:items-start lg:flex-row lg:gap-10'>
                {
                    serviciosList.slice(0, 3).map((servicio, index: number) => (
                        <Servicio index={index} key={index} text={servicio.text} desc={servicio.desc} servicioActivo={servicioActivo} setServicioActivo={setServicioActivo} />
                    ))
                }

            </ul>
        </li>
        <li className='h-max'>
            <ul className='flex flex-col gap-2 lg:items-start lg:flex-row lg:gap-10'>
                {
                    serviciosList.slice(3, 6).map((servicio, index: number) => (
                        <Servicio index={index + 3} key={index} text={servicio.text} desc={servicio.desc} servicioActivo={servicioActivo} setServicioActivo={setServicioActivo} />
                    ))
                }
            </ul>
        </li>
    </ul>
    )
}

const ButtonTurno = () => {
    return (
        <a href="https://wa.me/+543543608379?text=Hola, quiero realizar una consulta" target='_blank' rel='noreferrer' 
            className="rounded w-max py-2 px-6 bg-brandOrange flex items-center gap-4 mx-auto mb-10 lg:mb-20 shadow-simple hover:hover:-translate-y-[0.125rem] duration-200"
        >
            <div className="relative w-5 h-5 lg:w-6 lg:h-6">
                <Image layout='fill' src='/icons/WHATSAPP_WHITE.svg' alt='ICONO WHATSAPP' />
            </div>
            <span className='font-din-pro uppercase text-lg'>Pedí un turno</span>
        </a>
    )
}

const Servicios: NextPage = () => {

    return (
        <>
            <section className=''>

                {/* TOP */}
                <div className="relative w-full h-[calc(100vh-80px)] flex flex-col mb-5 lg:mb-10">

                    <div className="h-full relative bg-white-gradient">
                        <div className="w-full h-full absolute -z-10">
                            <Image priority layout='fill' objectFit='cover' objectPosition='center' src={'/images/EQUIPOS_IMAGEN.jpg'} alt='IMAGEN DE FONDO RADIOLOGIA' />
                        </div>
                    </div>
                    
                    <div className="absolute top-1/3 w-full h-max lg:inline-block">
                        <Divisor />
                    </div>
                </div>

                <h1 className="title-w-desc">Nuestros Servicios</h1>

                <div className="lg:h-[408px] relative mb-5 lg:mb-10">
                    <div className="flex items-center w-full h-full">
                        <ServiciosList />
                    </div>
                </div>

                <div className="mb-10 lg:mb-20">
                    <ButtonTurno />
                </div>

                {/* IMAGEN ECOGRAFÍA */}
                <div className="relative h-max mb-10 lg:mb-20">
                    <Swiper spaceBetween={48} autoplay={{ delay: 1500, disableOnInteraction: false }} modules={[ Autoplay ]}>
                        <SwiperSlide>
                            <div className="block w-full aspect-[2/1] lg:aspect-[3/1] relative ">
                                <Image priority layout='fill' objectFit='cover' objectPosition='center' src={'/images/EQUIPOS_IMAGEN_2.jpg'} alt='IMAGEN DE FONDO ECOGRAFÍA' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="block w-full aspect-[2/1] lg:aspect-[3/1] relative">
                                <Image layout='fill' objectFit='cover' objectPosition='center' src={'/images/EQUIPOS_IMAGEN_3.jpg'} alt='IMAGEN DE FONDO ECOGRAFÍA' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="block w-full aspect-[2/1] lg:aspect-[3/1] relative">
                                <Image layout='fill' objectFit='cover' objectPosition='center' src={'/images/ECOGRAFIA.jpg'} alt='IMAGEN DE FONDO ECOGRAFÍA' />
                            </div>
                        </SwiperSlide>
                    </Swiper>  
                </div>

                <div className="mb-10 lg:mb-20">
                    <Divisor />
                </div>

                {/* LABORATORIOS */}
                <div className="
                    flex flex-col gap-10 items-center
                    lg:flex-row lg:justify-center lg:gap-20 lg:px-20 lg:max-w-screen-2xl lg:mx-auto
                ">

                    <div className="flex flex-col gap-2 lg:items-center lg:gap-4 lg:justify-center">
                        
                        <h4 className='
                            text-brandOrange font-din font-medium text-2xl text-center
                            lg:text-4xl
                        '>Contamos con un laboratorio</h4>
                        
                        <p className='text-brandOrange font-din-pro font-[400] text-center max-w-sm 
                            lg:max-w-md lg:text-xl lg:min-w-[320px]
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

                    <div>
                        <ButtonTurno />
                    </div>

                </div>

            </section>
            <Footer footer />
        </>
    )
}

export default Servicios
