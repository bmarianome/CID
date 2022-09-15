import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Estudios from 'components/index/Estudios'
import Divisor from 'components/Divisor'
import { Footer } from 'components/Layout'
import MainImage from 'components/MainImage'

const Nosotros: NextPage = () => {
    return (
        <>
            <Head>
                <title>Nosotros</title>
                <meta name="description" content="CID ahora es Centro de Imágenes Diagnósticas Villa Allende" />
            </Head>
            <section className='pt-10 lg:pt-20'>

                {/* <MainImage className='mb-10 lg:mb-20' image={{ src: '/images/FONDO_NOSOTROS.jpg', position: 'center', fit: 'cover', alt: 'IMAGEN DE FONDO RADIOLOGIA' }} /> */}

                <h2 className='title-w-desc'>CID ahora es</h2> 
                <p className='description'>Centro de Imágenes Diagnósticas Villa Allende</p> 

                {/* TÍTULO */}
                <h1 className='block mb-10 lg:mb-20 lg:px-20 lg:mx-auto lg:max-w-screen-2xl'>
                    <span className="block
                        bg-brandOrange w-full font-main font-bold text-center text-2xl py-5 whitespace-pre
                        lg:w-max lg:py-4 lg:pl-4 lg:pr-12 lg:text-5xl lg:rounded lg:rounded-tr-3xl lg:uppercase
                    ">Conocé mas sobre nosotros</span>
                </h1>

                {/* MISION / VISION */}
                <div className="flex flex-col gap-10 max-w-screen-2xl mx-auto mb-10 lg:gap-20 lg:mb-20">

                    {/* VISION */}
                    <div className="
                        grid grid-flow-row gap-4 relative
                        lg:grid-cols-2 lg:grid-rows-2 lg:mx-20
                    ">

                        <span className='hidden lg:inline-block absolute h-full w-2 bg-brandOrange' />
                        
                        <div className="flex items-center gap-5 lg:inline-flex lg:items-baseline lg:pl-10">
                            <span className='max-w-[24px] h-1 bg-brandOrange grow lg:hidden' />
                            <div className="relative w-8 h-8 lg:hidden">
                                <Image layout='fill' src='/icons/VISION.svg' alt='ICONO VISIÓN' />
                            </div>
                            <h3 className='
                                text-brandOrange whitespace-pre text-2xl font-main font-bold 
                                lg:text-5xl lg:whitespace-normal lg:max-w-xs lg:uppercase
                            '>Nuestra Visión</h3>
                            <span className='h-1 bg-brandOrange grow lg:hidden' />
                        </div>

                        <div className="w-full aspect-video px-6 lg:aspect-auto lg:h-full
                            lg:row-span-2 lg:bg-white-gradient-desktop-2 hover:shadow-2xl duration-500 lg:p-0
                        ">
                            <div className="relative h-full w-full -z-10">
                                <Image layout='fill' objectFit='cover' objectPosition='center' src='/images/ECOGRAFIA_2.jpg' alt='FOTO ECOGRAFÍA' />
                            </div>
                        </div>

                        <div className="px-6 flex flex-col gap-5 lg:p-0 lg:pl-10">
                            <p className='text-brandGray font-secondary font-light text-xl lg:text-2xl'>Ser el Centro de Imágenes referente de las Sierras Chicas, brindando calidad y calidez a nuestros pacientes y profesionales derivantes</p>
                        </div>

                    </div>

                    {/* MISION */}
                    <div className="
                        grid grid-flow-row gap-4 relative
                        lg:grid-cols-2 lg:grid-rows-2 lg:mx-20
                    ">

                        <span className='hidden lg:inline-block absolute h-full w-2 bg-brandOrange right-0' />

                        {/* TITULO */}
                        <div className="flex items-center gap-5 lg:justify-end lg:items-baseline lg:pr-10">
                            
                            <span className='h-1 bg-brandOrange grow lg:hidden' />
                            <div className="relative w-8 h-8 lg:hidden">
                                <Image layout='fill' src='/icons/MISION.svg' alt='ICONO MISIÓN' />
                            </div>
                            
                            <h3 className='
                                text-brandOrange whitespace-pre text-2xl font-main font-bold 
                                lg:text-5xl lg:whitespace-normal lg:max-w-xs lg:uppercase lg:text-right 
                            '>Nuestra Misión</h3>
                            
                            <span className='max-w-[24px] h-1 bg-brandOrange grow lg:hidden' />
                        </div>

                        {/* FOTO */}
                        <div className="w-full px-6 aspect-video lg:aspect-auto lg:h-full
                            lg:row-start-1 lg:row-end-3 lg:bg-white-gradient-desktop-2-inverted hover:shadow-2xl duration-500 lg:p-0
                        ">
                            <div className="relative h-full w-full -z-10">
                                <Image layout='fill' objectFit='cover' objectPosition='center' src='/images/EQUIPOS_IMAGEN.jpg' alt='FOTO ECOGRAFÍA' />
                            </div>
                        </div>

                        {/* TEXTO */}
                        <div className="px-6 flex flex-col gap-5 lg:p-0 lg:pr-10 lg:items-end">
                            <p className='text-brandGray font-secondary font-light text-xl lg:text-2xl lg:text-right'>Participar en el proceso asistencial satisfaciendo las necesidades diagnósticas de los médicos derivantes mediante el uso de la imagentología, en el contexto de una asistencia eficiente y de alta calidad centrada en el paciente.</p>
                        </div>

                    </div>
                </div>

                {/* VALORES */}
                <div className="relative py-12 lg:flex lg:justify-center lg:mb-20">
                    <div className="lg:hidden">
                        <Divisor />
                    </div>
                    <div className="w-full h-max top-[calc(50%-29px)] absolute flex justify-center 
                        lg:items-center lg:gap-10 lg:max-w-screen-2xl lg:px-20
                    ">

                        <span className='hidden lg:inline-block h-2 w-full bg-brandOrange' />
                        <span className='
                            text-4xl font-main font-bold text-brandOrange  border border-brandOrange py-2 px-4 bg-white
                            lg:border-0 lg:text-5xl lg:uppercase
                        '>Valores</span>
                        <span className='hidden lg:inline-block h-2 w-full bg-brandOrange' />
                    </div>

                </div>

                {/* SVG VALORES */}
                <figure className="mx-auto px-10 mb-10 flex justify-center max-w-lg lg:max-w-2xl lg:mb-20 group">
                    <div className="lg:hidden group-hover:scale-105 duration-200">
                        <Image width={885} height={718} src='/icons/ESTRUCTURA_VALORES.png' alt='ESTRUCTURA DE VALORES' />
                    </div>
                    <div className="hidden lg:inline-block group-hover:scale-105 duration-200">
                        <Image width={885} height={718} src='/icons/ESTRUCTURA_VALORES.png' alt='ESTRUCTURA DE VALORES' />
                    </div>
                </figure>

                {/* POLÍTICA Y CALIDAD */}
                <div className="flex flex-col gap-6 mb-10 px-6  
                    lg:mb-20 lg:flex-row lg:max-w-screen-2xl lg:mx-auto lg:px-12 lg:gap-20 
                ">

                    <div className="rounded-xl bg-brandOrange p-5 w-full flex flex-col gap-3 lg:px-9 py-7 lg:w-1/2 hover:shadow-2xl duration-500">
                        <h5 className='font-main font-black text-xl lg:text-2xl '>Nuestro Compromiso</h5>
                        <p className='text-lg'>En CID la política de calidad es el eje vertebrador de su desarrollo, y entendemos que abarca:</p>

                        <ul className='text-lg font-secondary font-light'>
                            <li>- La calidad del servicio ofertado al entorno.</li>
                            <li>- La calidad del producto</li>
                            <li>- La calidad de gestión.</li>
                        </ul>
                        
                    </div>
                    <div className="rounded-xl bg-brandOrange p-5 w-full flex flex-col gap-3 lg:px-9 py-7 lg:w-1/2 hover:shadow-2xl duration-500">
                        <h5 className='font-main font-black text-xl lg:text-2xl '>Política de Calidad</h5>
                        <ul className='text-lg font-secondary font-light'>
                            <li>- Brindar atención con calidad y calidez.</li>
                            <li>- Asegurar a nuestros pacientes turnos en menos de una semana.</li>
                            <li>- Entregar los estudios en menos de 48 hs.</li>
                            <li>- Realizar imágenes de calidad.</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-10 lg:mb-20">
                    <Divisor />
                </div>

                <Estudios />

            </section>
            <Footer media map footer />
        </>
    )
}

export default Nosotros
