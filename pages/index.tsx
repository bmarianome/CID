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

const obrasSocialesImagenes = [
    { src: '/obras-sociales/medife.svg', w:400, h:101.87, alt: 'LOGO DE MEDIFE' },
    { src: '/obras-sociales/osde.svg', w:400, h:154.72, alt: 'LOGO DE OSDE' },
    { src: '/obras-sociales/prevencion-salud.svg', w:400, h:44.65, alt: 'LOGO DE PREVENCIÓN SALUD' },
    { src: '/obras-sociales/swiss-medical.svg', w:400, h:80, alt: 'LOGO DE SWISS MEDICAL' },
    { src: '/obras-sociales/sancor-salud.svg', w:400, h:129.63, alt: 'LOGO DE SANCOR SALUD' },
    { src: '/obras-sociales/omint.png', w:400, h:112, alt: 'LOGO DE OMINT' },
] 

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
                <ul className="
                    grid grid-cols-2 grid-rows-3 gap-5 justify-center items-center px-5 mb-10 
                    lg:grid-cols-3 lg:grid-rows-2 lg:mb-20 lg:max-w-5xl lg:mx-auto lg:gap-10
                ">
                    {
                        obrasSocialesImagenes.map((image, index) => {
                            return (
                                <li className='flex items-center justify-center h-max w-full' key={index}>
                                    <Image width={image.w} height={image.h} src={image.src} alt={image.alt} />
                                </li>
                            )
                        })
                    }
                </ul>
                <Estudios />
            </main>
            <Footer media map footer />
        </>
    )
}

export default Home
