import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Divisor from 'components/Divisor'
import { Footer } from 'components/Layout'

const Estudios: NextPage = () => {

    return (
        <>
            <section>

                {/* TOP */}
                <div className="relative w-full h-[calc(100vh-80px)] flex flex-col">

                    <div className="h-full relative bg-white-gradient">
                        <div className="w-full h-full absolute -z-10">
                            <Image priority layout='fill' objectFit='cover' objectPosition='center' src={'/images/DOCTOR_PC.jpg'} alt='IMAGEN DE FONDO RADIOLOGIA' />
                        </div>
                    </div>
                    
                    <div className="absolute top-1/3 w-full h-max lg:inline-block">
                        <Divisor />
                    </div>

                    <div className="flex flex-col gap-5 lg:flex-row lg:px-20 lg:max-w-screen-2xl lg:mx-auto lg:mb-20">
                        <article className="lg:w-full">
                            <h1 className="title-w-desc lg:text-7xl lg:text-left">Mis estudios</h1>
                            <p className='description w-3/4 mx-auto lg:text-left lg:m-0 lg:p-0'>Accedé a todos tus estudios con tu DNI y tu número de estudio, de manera 100% digital.</p>
                        </article>
                        <div className="lg:mx-auto lg:max-w-screen-xl lg:w-full">
                            
                            <form className='flex flex-col items-center gap-2'>
                                <div className="flex flex-col gap-2 w-3/4 lg:w-full">
                                    <input className='contactanos-input h-12' type="number" placeholder='Número de DNI:' />
                                    <input className='contactanos-input h-12' type="number" placeholder='Número de Estúdio:' />
                                </div>
                                <div className="flex flex-col gap-2 w-3/4 lg:w-full">
                                    <input type="submit" value="Ver mis estudios en la web" className='
                                        w-full text-white font-main font-medium text-lg bg-brandOrange py-2 rounded-md
                                        lg:text-left pl-4 shadow-xl
                                    ' />
                                    <a href='https://wa.me/+543543608379?text=Hola, quiero realizar una consulta' target='_blank' rel='noreferrer' className='
                                        w-full text-white font-main font-medium text-lg bg-[#25D366] py-2 rounded-md text-center
                                        lg:text-left lg:px-4 lg:flex lg:justify-between
                                    ' >O pedí tus estudios por Whatsapp
                                        <div className="hidden lg:block relative w-6 h-full">
                                            <Image layout='fill' src='/icons/WHATSAPP_WHITE.svg' alt='ICONO WHATSAPP' />
                                        </div>
                                    </a>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>



            </section>
            <Footer footer />
        </>
    )
}

export default Estudios