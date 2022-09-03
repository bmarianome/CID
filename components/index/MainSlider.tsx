import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const MainSlider = () => {
    return (
        <section className='w-screen h-[calc(100vh-80px)] flex flex-col'>
            <section className="h-full relative">
                
                <Image priority layout='fill' objectFit='cover' objectPosition='center' src={'/images/RADIOLOGIA.jpg'} alt='IMAGEN DE FONDO RADIOLOGIA' />
                
                <div className="w-full h-full absolute white-gradient"></div>

                <div className="absolute bottom-16 px-6 flex">
                    <Image width={248} height={102} src='/icons/LOGO_CID_DESC.svg' alt='LOGO CID DESCRIPCION' />
                    <picture className="w-52">
                        <Image width={254} height={100} src='/icons/LOGO_FERNANDEZ_OULTON.svg' alt='LOGO FDEZ. OULTON DESCRIPCION' />
                    </picture>
                </div>
                
            </section>
            <article className="bg-brandOrange px-12 py-5 flex flex-col items-center gap-5">
                <h1 className='text-2xl text-center leading-9 font-main font-bold'>CID, primer servicio de imágenes médicas totalmente digital de las Sierras Chicas.</h1>
                <Link href='/nosotros' passHref>
                    <a className='bg-white flex justify-center items-center gap-3 w-max py-2 px-6 rounded'>
                        <div className="relative w-5 h-5">
                            <Image layout='fill' src='/icons/COMUNIDAD_ORANGE.svg' alt='ICONO COMUNIDAD' />
                        </div>
                        <span className='uppercase text-brandOrange text-sm font-main font-bold'>Conocé más sobre nosotros</span>
                    </a>
                </Link>
            </article>
        </section>
    )
}

export default MainSlider