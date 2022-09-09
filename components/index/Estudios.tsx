import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Estudios = () => {
    return (
        <section className='relative h-max'>

            <figure className="absolute w-full h-full -z-10">
                <Image layout='fill' objectPosition='center' objectFit='cover' src='/images/ECOGRAFIA_NARANJA.png' alt='FONDO ECOGRAFIA' />
            </figure>

            <div className="
                flex flex-col justify-evenly items-center w-full p-5 gap-5 aspect-[4/1] 
                lg:aspect-auto lg:items-start lg:max-w-5xl lg:p-20 lg:gap-20
            ">
                
                <h2 className='
                    text-white text-4xl font-secondary font-bold text-center
                    lg:max-w-sm lg:text-left lg:text-7xl drop-shadow-lg
                '>Lo más importante, sos vos.</h2>

                <Link href='/estudios'>
                    <a className='white-button'>Ver mis estudios online</a>
                </Link>
            </div>
            
        </section>
    )
}

export default Estudios