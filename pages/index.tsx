import type { NextPage } from 'next'
import MainSlider from 'components/index/MainSlider'
import Servicios from 'components/index/Servicios'
import ObrasSociales from 'components/index/ObrasSociales'
import Divisor from 'components/Divisor'
import Image from 'next/image'
import Estudios from 'components/index/Estudios'
import { Footer } from 'components/Layout'
import Head from 'next/head'
import SwiperPictures from 'components/SwiperPictures'
import Link from 'next/dist/client/link'
import MainSwiper from 'components/MainSwiper'
import MainImage from 'components/MainImage'
import { SwiperSlide } from 'swiper/react'
import ObrasSocialesLogos from 'components/ObrasSocialesLogos'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Centro de Imágenes</title>
                <meta name="description" content="CID, primer servicio de imágenes médicas totalmente digital de las Sierras Chicas." />     
            </Head>
            <main>
                <div className="h-[calc(100vh-80px)] lg:h-[calc(100vh-84.8px)] flex flex-col">
                    <MainSwiper className='h-full'>
                        <SwiperSlide>
                            <MainImage items image={{ src: '/images/HOME_FONDO_RADIOLOGIA.jpg', position: 'center', fit: 'cover', alt: 'IMAGEN DE FONDO RADIOLOGIA', priority: true }} />
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
                            text-2xl text-center leading-9 font-din-pro font-light
                            lg:max-w-lg lg:text-left lg:text-2xl
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
                </div>
                <Servicios />
                <SwiperPictures />
                <Divisor />
                <ObrasSociales />
                <ObrasSocialesLogos />                
                <Estudios />
            </main>
            <Footer media map footer />
        </>
    )
}

export default Home
