import type { NextPage } from 'next'
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
        <meta name="description" content="CID Villa Allende, primer servicio de imágenes médicas totalmente digital de las Sierras Chicas." />
      </Head>
      <main>
        <div className="flex flex-col">
          <MainSwiper className='h-full'>
            <SwiperSlide>
              <div className="h-full">
                <div className={`h-full relative flex flex-col justify-center items-center bg-white/60 `}>
                  <div className="w-full h-full absolute -z-10">
                    <Image
                      priority={true}
                      layout='fill'
                      objectFit='cover'
                      objectPosition="center"
                      src="/images/RESONANCIA.jpg"
                      alt="Resonancias en Cid Villa Allende"
                    />
                  </div>

                  <div className='w-3/4 flex flex-col items-center mb-8'>
                    <div className='scale-90 mt-8'>
                      <figure className="hidden lg:inline leading-none">
                        <Image width={981} height={217} src='/icons/LOGO_CID_COMPLETO.png' alt='' />
                      </figure>

                      <figure className="lg:hidden w-full leading-none">
                        <Image width={544} height={457} src='/icons/LOGO_CID_COMPLETO_MOBILE.png' alt='' />
                      </figure>
                    </div>
                    <div className="bg-brandOrange md:w-max mx-auto flex p-4 md:p-6 rounded-md mt-12 flex-col items-center gap-4 tracking-tighter ">
                      <p className='text-lg text-center font-din-pro font-normal lg:max-w-lg lg:text-2xl leading-6'>
                        CID, desde julio de 2023, ofrece el servicio de <br />
                        <span className='font-bold'>Resonancias Magnéticas</span>
                      </p>
                      <button className='bg-white text-brandOrange px-2 py-1 rounded-md'>
                        Ver todos los servicios
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <MainImage image={{ src: '', position: 'center', fit: 'cover', alt: 'IMAGEN DE FONDO RADIOLOGIA', priority: true }} />
            </SwiperSlide>
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

            <h1 className='text-2xl text-center leading-9 font-din-pro font-light lg:max-w-lg lg:text-left lg:text-2xl'>
              CID, Primer Servicio de Imágenes Médicas totalmente Digital de las Sierras Chicas.
            </h1>

            <Link href='/nosotros' passHref>
              <a className='bg-white flex justify-center items-center gap-3 w-max py-2 px-6 rounded shadow-simple hover:shadow-xl hover:-translate-y-[0.125rem] duration-200'>
                <div className="relative w-5 h-5">
                  <Image layout='fill' src='/icons/COMUNIDAD_ORANGE.svg' alt='' />
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
