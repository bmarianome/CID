import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const MainSlider = () => {
    return (
        <section className='w-full h-[calc(100vh-80px)] flex flex-col'>
            
            <div className="h-full relative">
                
                <Image priority layout='fill' objectFit='cover' objectPosition='center' src={'/images/RADIOLOGIA.jpg'} alt='IMAGEN DE FONDO RADIOLOGIA' />
                
                <div className="w-full h-full absolute white-gradient" />

                <div className="
                    absolute bottom-16 px-6 flex w-full max-w-screen-sm 
                    lg:flex-col lg:justify-center lg:gap-20 lg:w-max lg:max-w-none lg:h-full lg:bottom-0 lg:top-0 lg:left-10 lg:p-0
                ">
                    
                    <figure className='w-full min-w-[65%] h-max leading-none'>
                        <Image layout='responsive' width={496} height={204} src='/icons/LOGO_CID_DESC.svg' alt='LOGO CID DESCRIPCION' />
                    </figure>
                    <figure className="w-full h-max leading-none lg:max-w-[50%]">
                        <Image width={508} height={200} src='/icons/LOGO_FERNANDEZ_OULTON.svg' alt='LOGO FDEZ. OULTON DESCRIPCION' />
                    </figure>
                </div>
                
            </div>

            <article className="
                bg-brandOrange px-12 py-5 flex flex-col items-center gap-5
                lg:flex-row lg:justify-between lg:px-20 lg:py-7
            ">

                <h1 className='
                    text-2xl text-center leading-9 font-main font-bold
                    lg:max-w-2xl lg:text-left lg:text-3xl
                '>CID, primer servicio de imágenes médicas totalmente digital de las Sierras Chicas.</h1>
                
                <Link href='/nosotros' passHref>
                    <a className='bg-white flex justify-center items-center gap-3 w-max py-2 px-6 rounded'>
                        
                        <div className="relative w-5 h-5">
                            <Image layout='fill' src='/icons/COMUNIDAD_ORANGE.svg' alt='ICONO COMUNIDAD' />
                        </div>
                        <span className='uppercase text-brandOrange text-sm font-main font-bold lg:text-xl'>Conocé más sobre nosotros</span>
                    </a>
                </Link>
            </article>
        </section>
    )
}

export default MainSlider