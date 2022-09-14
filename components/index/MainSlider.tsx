import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MainSwiper from 'components/MainSwiper';
import { SwiperSlide } from 'swiper/react';

import MainImage from 'components/MainImage';

    // <div className="absolute top-8 right-8 lg:top-16 lg:right-16 flex z-10 gap-2 bg-brandOrange rounded-lg shadow-simple">


const MainSlider = () => {

    return (
        <>
            <MainSwiper>
                <SwiperSlide>
                    <MainImage image={{ src: '/images/HOME_FONDO_RADIOLOGIA.jpg', position: 'center', fit: 'cover', alt: 'IMAGEN DE FONDO RADIOLOGIA', priority: true }} />
                </SwiperSlide>
                <SwiperSlide>
                    <MainImage image={{ src: '/images/HOME_FONDO_CORAZON.jpg', position: 'center', fit: 'cover', alt: 'IMAGEN DE FONDO RADIOLOGIA' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <MainImage image={{ src: '/images/HOME_FONDO_TABLET.jpg', position: 'center', fit: 'cover', alt: 'IMAGEN DE FONDO RADIOLOGIA' }} />
                </SwiperSlide>                
            </MainSwiper>

            <article className="
                bg-brandOrange px-12 py-4 flex flex-col items-center gap-5
                lg:flex-row lg:justify-between lg:px-16 lg:py-4
            ">

                <h1 className='
                    text-2xl text-center leading-9 font-din-pro
                    lg:max-w-2xl lg:text-left lg:text-3xl
                '>CID, Primer Servicio de Imágenes Médicas totalmente Digital de las Sierras Chicas.</h1>
                
                <Link href='/nosotros' passHref>
                    <a className='
                        bg-white flex justify-center items-center gap-3 w-max py-2 px-6 rounded shadow-simple
                        hover:shadow-xl hover:-translate-y-[0.125rem] duration-200
                    '>
                        
                        <div className="relative w-5 h-5">
                            <Image layout='fill' src='/icons/COMUNIDAD_ORANGE.svg' alt='ICONO COMUNIDAD' />
                        </div>
                        <span className='uppercase text-brandOrange text-sm font-din-pro lg:text-xl'>Conocé más sobre nosotros</span>
                    </a>
                </Link>
            </article>
        </>
    )
}

export default MainSlider