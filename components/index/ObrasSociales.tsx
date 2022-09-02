import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import 'swiper/css';

const ObrasSocialesList: string[][] = [["APROSS","APM"],["ACA SALUD","FEDERADA G1"],["BOREAL","COMFYE"],["CPCE","GALENO"],["MEDIFE","MET"],["NOBIS","OMINT"],["OSDE","OSITAC"],["OSPEDYC", "OSPECOR"],["OSPES","OSPIA"],["OSSOELSAC","OSSEG"],["OSPOCE INT.","PARQUE SALUD"],["POETA LUG.","PREV. SALUD"],["SWISS MEDICAL","SANCOR SALUD"],["PRIVERAL","UNIMED"], ["PREV. SALUD","JERARQ. SALUD"],["OSMATA SANITAS","FEDERADA G2-G3"]]

const HealthCareSlide = ({ texts }: { texts: string[] }) => {
    return (
        <div className={`text-black flex items-center justify-between font-secondary font-light whitespace-pre h-8`}>
            <span className='w-1/2 text-center'>{texts[0]}</span>
            <span className='h-full bg-brandOrange w-[2px]' />
            <span className='w-1/2 text-center'>{texts[1]}</span>
        </div>
    )
}

const ObrasSociales = () => {
    return (
        <section className='py-10'>
            <h2 className='title'>Obras Sociales</h2>

            <div className="w-4/5 mb-10 m-auto border-y-2 border-brandOrange flex items-center py-4">
                <Swiper
                    autoplay={{ delay: 1250, disableOnInteraction: true }}
                    modules={[ Autoplay ]}
                    slidesPerView={1}
                >
                    {
                        ObrasSocialesList.map((texts, index) => (
                            <SwiperSlide key={index}>
                                <HealthCareSlide texts={texts} />
                            </SwiperSlide>
                        ))
                    }

                </Swiper>                

                <div className="pagination-container flex justify-center gap-2 mt-5 w-max m-auto" />
            </div>             

            <Link href='/servicios' passHref>
                <a className='bg-brandOrange text-white text-center text-base block w-7/12 py-1 m-auto rounded-md'>Ver Todas</a>
            </Link>   

        </section>
    )
}

export default ObrasSociales