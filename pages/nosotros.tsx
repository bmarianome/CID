import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Estudios from 'components/index/Estudios'
import Divisor from 'components/Divisor'

const Nosotros: NextPage = () => {
    return (
        <section className=''>
            <div className="w-screen h-[calc(100vh-80px)] flex flex-col">
                <div className="h-full relative">
                    
                    <Image priority layout='fill' objectFit='cover' objectPosition='center' src={'/images/RADIOLOGIA.jpg'} alt='IMAGEN DE FONDO RADIOLOGIA' />
                    
                    <div className="w-full h-full absolute white-gradient"></div>

                    <div className="absolute bottom-16 px-6 flex">
                        <Image width={248} height={102} src='/icons/LOGO_CID_DESC.svg' alt='LOGO CID DESCRIPCION' />
                        <picture className="w-52">
                            <Image width={254} height={100} src='/icons/LOGO_FERNANDEZ_OULTON.svg' alt='LOGO FDEZ. OULTON DESCRIPCION' />
                        </picture>
                    </div>
                    
                </div>
                <article className="flex flex-col items-center gap-5">
                    <h2 className='text-2xl text-center leading-9 font-main font-bold flex flex-col gap-2 mb-10'>
                    <span className='text-brandOrange text-4xl'>CID ahora es</span> 
                    <span className='text-brandGray font-secondary font-light text-xl'>Centro de Imágenes Diagnósticas <br /> Villa Allende</span> 
                    </h2>
                    <h3 className="bg-brandOrange w-screen font-main font-bold text-center text-3xl py-5">Conocé mas sobre nosotros</h3>
                </article>
            </div>

            {/* MISION */}
            <div className="">
                
                <div className="flex items-center gap-5 mt-10">
                    <span className='w-full max-w-[20px] h-1 bg-brandOrange' />
                    <h3 className='text-brandOrange whitespace-pre text-4xl font-secondary font-bold'>Nuestra Visión</h3>
                    <span className='w-full h-1 bg-brandOrange' />
                </div>

                <div className="px-6 py-4 flex flex-col gap-5">
                    <div className="">
                        <Image width={1988} height={1327} src='/images/ECOGRAFIA_2.jpg' alt='FOTO ECOGRAFÍA' />
                    </div>

                    <p className='text-brandGray font-secondary font-light text-xl'>Ser el Centro de Imágenes referente de las Sierras Chicas, brindando calidad y calidez a nuestros pacientes y profesionales derivantes</p>
                </div>

            </div>

            {/* VISION */}
            <div className="">
                
                <div className="flex items-center gap-5 mt-10">
                    <span className='w-full h-1 bg-brandOrange' />
                    <h3 className='text-brandOrange whitespace-pre text-4xl font-secondary font-bold'>Nuestra Misión</h3>
                    <span className='w-full max-w-[20px] h-1 bg-brandOrange' />
                </div>

                <div className="px-6 py-4 flex flex-col gap-5">
                    <div className="">
                        <Image width={1988} height={1327} src='/images/ECOGRAFIA_2.jpg' alt='FOTO ECOGRAFÍA' />
                    </div>

                    <p className='text-brandGray text-right font-secondary font-light text-xl'>Participar en el proceso asistencial satisfaciendo las necesidades diagnósticas de los médicos derivantes mediante el uso de la imagentología, en el contexto de una asistencia eficiente y de alta calidad centrada en el paciente.</p>
                </div>

            </div>

            <div className="relative py-12">
                <Divisor />
                <div className="w-full h-max top-[calc(50%-29px)] absolute flex justify-center">
                    <span className='text-4xl font-secondary font-bold text-brandOrange  border border-brandOrange py-2 px-4 bg-white'>Valores</span>
                </div>
            </div>

            <Estudios />

        </section>
    )
}

export default Nosotros
