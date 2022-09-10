import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import 'swiper/css';

const ObrasSocialesList = ["APROSS","APM","ACA SALUD","FEDERADA G1","BOREAL","COMFYE","CPCE","GALENO","MEDIFE","MET","NOBIS","OMINT","OSDE","OSITAC","OSPEDYC", "OSPECOR","OSPES","OSPIA","OSSOELSAC","OSSEG","OSPOCE INT.","PARQUE SALUD","POETA LUG.","PREV. SALUD","SWISS MEDICAL","SANCOR SALUD","PRIVERAL","UNIMED", "PREV. SALUD","JERARQ. SALUD","OSMATA SANITAS","FEDERADA G2-G3"]

const ObraSocialSlide = ({ text, index }: { text: string, index?: number}) => {
    return (
        <div className={`flex items-center justify-between h-8`}>
            <span className='w-[2px] h-full bg-brandOrange' />
            <span className={`text-center w-full text-brandGray font-din-pro text-lg font-[400] lg:text-xl`}>{text}</span>
            <span className='w-[2px] h-full bg-brandOrange' />
        </div>
    )
}

const ObrasSociales = () => {
    return (
        <section className='py-10 lg:py-20'>
            
            <h2 className='title-w-desc'>Obras Sociales</h2>

            <p className='description'>Conocé las obras sociales con las que trabajamos actualmente</p>

            <div className="w-4/5 mb-10 m-auto border-y-2 border-brandOrange flex items-center py-4 select-none">
                <Swiper
                    autoplay={{ delay: 1250, disableOnInteraction: true }}
                    modules={[ Autoplay ]}
                    slidesPerView={2}
                    breakpoints={{
                        1280: {
                            slidesPerView: 4
                        }
                    }}
                >
                    {
                        ObrasSocialesList.map((text, index) => (
                            <SwiperSlide key={index}>
                                <ObraSocialSlide text={text} />
                            </SwiperSlide>
                        ))
                    }

                </Swiper>                

                <div className="pagination-container flex justify-center gap-2 mt-5 w-max m-auto" />
            </div>             

            <Link href='/obras-sociales' passHref>
                <a className='orange-button mx-auto'>Ver Todas</a>
            </Link>   

        </section>
    )
}

export default ObrasSociales