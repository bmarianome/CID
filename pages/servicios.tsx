import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Estudios from 'components/index/Estudios'
import Divisor from 'components/Divisor'
import { serviciosList } from 'components/index/Servicios'
import ObrasSociales from 'components/index/ObrasSociales'
import { Footer } from 'components/Layout'

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';

const items: { title: string, desc: string }[] = [
    { title: "Inmediatez", desc: "En el mismo momento que finaliza el estudio, usted puede verlo." },
    { title: "Ecología", desc: "Cuidamos el planeta, todo nuestro sistema es digital, no utilizamos ninguna impresión." },
    { title: "Cuidamos tu tiempo", desc: "No tiene que volver a buscar sus estudios." },
    { title: "Practicidad", desc: "Puede ver sus estudios por nuestra plataforma WEB y a través de WhatsApp." },
    { title: "Pensamos en tu comodidad", desc: "Con sólo con un click puede enviar sus estudios a quien desee." },
]

const Servicios: NextPage = () => {
    return (
        <>
            <section className=''>

                {/* TOP */}
                <div className="relative w-full h-[calc(100vh-80px)] flex flex-col pb-10 mb-5 lg:mb-10">

                    <div className="h-full relative bg-white-gradient">
                        <div className="w-full h-full absolute -z-10">
                            <Image priority layout='fill' objectFit='cover' objectPosition='center' src={'/images/ECOGRAFIA_3.jpg'} alt='IMAGEN DE FONDO RADIOLOGIA' />
                        </div>
                    </div>
                    
                    <div className="absolute top-[10%] w-full h-max lg:inline-block">
                        <Divisor />
                    </div>

                    <h1 className="title">Nuestros Servicios</h1>

                    <ul className='
                        flex flex-col items-center gap-2
                        lg:grid lg:grid-cols-[repeat(3,max-content)] lg:grid-rows-2 lg:justify-center lg:gap-10
                    '>
                        
                        {
                            serviciosList.map((e: string, index: number) => (
                                <li key={index} className="
                                    bg-brandOrange w-3/4 text-center rounded-lg text-2xl py-2 font-secondary font-bold
                                    lg:w-72 lg:h-20 lg:flex lg:items-center lg:justify-center
                                ">{e}</li>
                            ))
                        }
                    </ul>
                    
                </div>

                {/* IMAGEN ECOGRAFÍA */}
                <div className="relative h-max mb-10 lg:mb-20">
                    <Swiper spaceBetween={48} autoplay={{ delay: 1500, disableOnInteraction: false }} modules={[ Autoplay ]}>

                        <SwiperSlide>
                            <div className="block w-full aspect-[3/1] relative ">
                                <Image priority layout='fill' objectFit='cover' objectPosition='center' src={'/images/EQUIPOS_IMAGEN_2.jpg'} alt='IMAGEN DE FONDO ECOGRAFÍA' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="block w-full aspect-[3/1] relative">
                                <Image layout='fill' objectFit='cover' objectPosition='center' src={'/images/EQUIPOS_IMAGEN_3.jpg'} alt='IMAGEN DE FONDO ECOGRAFÍA' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="block w-full aspect-[3/1] relative">
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
                            text-brandOrange font-main font-bold text-2xl text-center
                            lg:text-4xl
                        '>Contamos con un laboratorio</h4>
                        
                        <p className='text-brandOrange font-secondary font-medium text-center max-w-sm 
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
                                            text-brandGray text-center font-secondary font-medium 
                                            lg:text-left lg:text-xl
                                        '>{item.desc}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                    <a href="https://wa.me/+543543608379?text=Hola, quiero realizar una consulta" target='_blank' rel='noreferrer' className="rounded w-max py-2 px-6 bg-brandOrange flex items-center gap-4 lg:w-full lg:max-w-lg">
                        <div className="relative w-5 h-5">
                            <Image layout='fill' src='/icons/WHATSAPP_WHITE.svg' alt='ICONO WHATSAPP' />
                        </div>
                        <span className='font-main font-medium uppercase text-lg'>Pedí un turno</span>
                    </a>

                </div>

            </section>
            <Footer footer />
        </>
    )
}

export default Servicios
