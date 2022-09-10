import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css/pagination";
import 'swiper/css';

// @refresh reset

const Navigation = () => {

    const swiper = useSwiper()
    
    return (
        <div className="absolute top-8 right-8 lg:top-16 lg:right-16 flex z-10 gap-2 bg-brandOrange rounded-lg shadow-simple">
            <figure onClick={() => swiper.slidePrev()} className="relative w-10 h-10 lg:w-12 lg:h-12 hover:cursor-pointer rotate-180">
                <Image layout='fill' src='/icons/FLECHA_CARRUSEL.svg' alt='ARROW ICON' />
            </figure>
            <figure onClick={() => swiper.slideNext()} className="relative w-10 h-10 lg:w-12 lg:h-12 hover:cursor-pointer">
                <Image layout='fill' src='/icons/FLECHA_CARRUSEL.svg' alt='ARROW ICON' />
            </figure>
        </div>
    )
}

const MainSlider = () => {

    
    return (
        <>
            <section>
                <Swiper
                    autoplay={{ delay: 2000, disableOnInteraction: true }} modules={[ Autoplay ]}
                    speed={500}
                >
                    <SwiperSlide>
                        <div className="relative w-full h-[calc(100vh-80px)] bg-white-gradient" >
                            <div className="absolute w-full h-full -z-10">
                                <Image priority layout='fill' objectFit='cover' objectPosition='center' src={'/images/RADIOLOGIA.jpg'} alt='IMAGEN DE FONDO RADIOLOGIA' />
                            </div>

                            <div className="
                                absolute bottom-16 px-6 flex w-full max-w-screen-sm 
                                lg:justify-center lg:gap-20 lg:w-1/2 lg:max-w-none lg:p-0 lg:left-16
                            ">
                                
                                <figure className='w-full h-max leading-none min-w-[65%]'>
                                    <Image layout='responsive' width={448} height={156} src='/icons/LOGO_CID_DESC.svg' alt='LOGO CID DESCRIPCION' />
                                </figure>
                                <figure className="w-full h-max leading-none lg:max-w-[50%]">
                                    <Image width={508} height={200} src='/icons/LOGO_FERNANDEZ_OULTON.svg' alt='LOGO FDEZ. OULTON DESCRIPCION' />
                                </figure>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-[calc(100vh-80px)] bg-white-gradient" >
                            <div className="absolute w-full h-full -z-10">
                                <Image priority layout='fill' objectFit='cover' objectPosition='center' src={'/images/RADIOLOGIA.jpg'} alt='IMAGEN DE FONDO RADIOLOGIA' />
                            </div>

                            <div className="
                                absolute bottom-16 px-6 flex w-full max-w-screen-sm 
                                lg:justify-center lg:gap-20 lg:w-1/2 lg:max-w-none lg:p-0 lg:left-16
                            ">
                                
                                <figure className='w-full h-max leading-none min-w-[65%]'>
                                    <Image layout='responsive' width={448} height={156} src='/icons/LOGO_CID_DESC.svg' alt='LOGO CID DESCRIPCION' />
                                </figure>
                                <figure className="w-full h-max leading-none lg:max-w-[50%]">
                                    <Image width={508} height={200} src='/icons/LOGO_FERNANDEZ_OULTON.svg' alt='LOGO FDEZ. OULTON DESCRIPCION' />
                                </figure>
                            </div>
                        </div>
                    </SwiperSlide>

                    <Navigation />
                </Swiper>  

            </section>
            <article className="
                bg-brandOrange px-12 py-5 flex flex-col items-center gap-5
                lg:flex-row lg:justify-between lg:px-20 lg:py-7
            ">

                <h1 className='
                    text-2xl text-center leading-9 font-din-pro
                    lg:max-w-2xl lg:text-left lg:text-3xl
                '>CID, primer servicio de imágenes médicas totalmente digital de las Sierras Chicas.</h1>
                
                <Link href='/nosotros' passHref>
                    <a className='bg-white flex justify-center items-center gap-3 w-max py-2 px-6 rounded'>
                        
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