import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Estudios = () => {
    return (
        <section className='relative w-screen aspect-video'>
            <Image layout='fill' objectPosition='center' objectFit='cover' src='/images/ECOGRAFIA_NARANJA.png' alt='FONDO ECOGRAFIA' />

            <div className="flex flex-col justify-center items-center absolute z-20 w-full h-full p-5 gap-5">
                <h2 className='text-white text-4xl font-secondary font-bold text-center'>Lo más importante, sos vos.</h2>
                <Link href='/estudios'>
                    <a className='bg-white text-brandOrange text-center text-base block w-7/12 py-1 rounded-md'>Ver mis estudios online</a>
                </Link>
            </div>
            
        </section>
    )
}

export default Estudios