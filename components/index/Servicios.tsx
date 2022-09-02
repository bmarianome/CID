import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import 'swiper/css';

const ServiceSlide = ({ text }: { text: string }) => {
    return (    
        <div className="bg-brandOrange py-4 flex flex-col items-center gap-1 w-2/3 m-auto rounded-md">
            <span className='font-secondary font-bold text-2xl'>{text}</span>
            <Link href={'/servicios'}>
                <a className='font-main font-light text-lg'>Ver Mas</a>
            </Link>
        </div>
    )
}

// const ObrasSociales = ["ACA SALUD","APM","APROSS","ART PREVENCION SALUD","BOREAL","COMFYE","CPCE (CONSEJO PROF DE CS ECONOMICAS)","FEDERADA SALUD G1","FEDERADA SALUD G2-G3","GALENO","JERARQUICOS SALUD","MEDIFE","MET","NOBIS","OMINT","OSDE","OSITAC","OSMATA SANITAS","OSPECOR","OSPEDYC","OSPES (ESTAC SERVICIOS)","OSPIA","OSPOCE INTEGRAL","OSSEG(SEGUROS)","OSSOELSAC","PARQUE SALUD","POETA LUGONES","PREVENCION SALUD","PRIVERAL","SANCOR SALUD","SWISS MEDICAL","UNIMED",]
const servicios: string[] = ["Ecografías", "Radiología", "Mamografía", "Cardiología", "Ortopantomografía", "Laboratorio",]

const Servicios = () => {
    return (
        <section className='py-10'>
            <h2 className='title'>Nuestros Servicios</h2>

            <div className="w-screen mb-10">
                <Swiper
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: true
                    }}
                    pagination={{
                        el: '.pagination-container',
                        bulletClass: 'services-swiper-bullet',
                        bulletActiveClass: 'services-swiper-bullet-active'

                    }}
                    loop={true}
                    modules={[ Autoplay, Pagination ]}
                >
                    {
                        servicios.map((text, index) => (
                            <SwiperSlide key={index}>
                                <ServiceSlide text={text} />
                            </SwiperSlide>
                        ))
                    }

                </Swiper>                

                <div className="pagination-container flex justify-center gap-2 mt-5 w-max m-auto" />
            </div>                

            <Link href='/servicios' passHref>
                <a className='bg-brandOrange text-white text-center text-base block w-7/12 py-1 m-auto rounded-md'>Ir a la sección Servicios</a>
            </Link>

        </section>
    )
}

export default Servicios