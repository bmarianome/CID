import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Divisor from 'components/Divisor'
import { Footer } from 'components/Layout'
import { FormEvent, useState } from 'react'
import MainImage from 'components/MainImage'
import { usePlausible } from 'next-plausible'

interface Estudio {
    estudio?: string
    fecha?: string
    hora?: string
    ingreso?: string
    nro_afiliado?: string
    paciente?: string
}

const Estudios: NextPage = () => {

    const plausible = usePlausible()

    const [estudios, setEstudios] = useState<never[] | Estudio[]>([])
    const [hash, setHash] = useState<string>()

    const requestEstudios = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)

        const dni = form.get('dni')
        const estudio = form.get('estudio')
        // const dni = "34601317"
        // const estudio = "31181.9"

        const hash = await fetch(`https://impacs.cidvillaallende.com.ar/cgi-bin/minisite.bf/verify_study/${estudio}/${dni}`)
        .then(hash => hash.json())
        .then(arr => arr[0].hashed_id)
        .catch(error => {
            throw alert('Los datos ingresados no corresponden a un estudio en el sistema')
        })

        setHash(hash)

        const estudios = await fetch(`https://impacs.cidvillaallende.com.ar/cgi-bin/minisite.bf/studies/${hash}`)
        .then(estudios => estudios.json())
        .then(estudios => {
            plausible('EstudioBuscado')
            setEstudios(estudios)
            window.scrollTo(0, document.body.scrollHeight)
        })
        .catch(error => {
            throw alert('Hubo un error')
        })        
    }

    return (
        <>
            <Head>
                <title>Mis Estudios</title>
                <meta name="description" content="Accedé a todos tus estudios con tu DNI y tu número de estudio, de manera 100% digital." />
            </Head>   
            <section className='pt-10 lg:pt-20'>

                {/* TOP */}
                {/* <MainImage className='mb-10 lg:mb-20' image={{ src: '/images/DOCTOR_PC.jpg', position: 'center', fit: 'cover', alt: 'IMAGEN DE FONDO RADIOLOGIA' }} /> */}

                <div className="flex flex-col gap-5 lg:flex-row lg:px-20 lg:w-full lg:max-w-screen-2xl lg:mx-auto mb-10 lg:mb-20">
                    <article className="lg:w-1/2">
                        <h1 className="title-w-desc lg:text-7xl lg:text-left">Mis estudios</h1>
                        <p className='description w-3/4 mx-auto lg:text-left lg:m-0 lg:p-0'>Accedé a todos tus estudios con tu DNI y tu número de estudio, de manera 100% digital.</p>
                    </article>
                    <div className="lg:mx-auto lg:max-w-screen-xl lg:w-1/2">
                        
                        <form className='flex flex-col items-center gap-2' onSubmit={(e) => requestEstudios(e)}>
                            <div className="flex flex-col gap-2 w-3/4 lg:w-full">
                                <input name='dni' className='contactanos-input h-12 placeholder:text-brandOrange' type="number" placeholder='Número de DNI:' />
                                <input name='estudio' className='contactanos-input h-12 placeholder:text-brandOrange' type="text" placeholder='Número de Estúdio:' />
                            </div>
                            <div className="flex flex-col gap-2 w-3/4 lg:w-full">
                                <input type="submit" value="Ver mis estudios en la web" className='
                                    w-full text-white font-main font-medium text-lg bg-brandOrange py-2 rounded-md
                                    lg:text-left pl-4 shadow-xl
                                ' />
                                <a href='https://wa.me/+543543608379?text=Hola, quiero realizar una consulta' target='_blank' rel='noreferrer' className='
                                    w-full text-white font-main font-medium text-lg bg-[#25D366] py-2 rounded-md text-center
                                    lg:text-left lg:px-4 lg:flex lg:justify-between
                                ' 
                                onClick={() => plausible('WhatsappClick')}
                                >O pedí tus estudios por Whatsapp
                                    <div className="hidden lg:block relative w-6">
                                        <Image layout='fill' src='/icons/WHATSAPP_WHITE.svg' alt='ICONO WHATSAPP' />
                                    </div>
                                </a>
                            </div>
                        </form>

                    </div>
                </div>

                {/* <span className='block mx-auto w-3/4 lg:w-full h-1 bg-brandOrange' /> */}
                <div className="mb-10 lg:mb-20">
                    <Divisor />
                </div>

                {
                    estudios.length === 0 ? 

                    <div>
                        <h4 className='title'>No hay estudios.</h4>
                    </div>

                    :
                    <>
                        <div className="">
                            <h4 className='title-w-desc'>Hola, {estudios[0].paciente}</h4>
                            <p className='description'>Aquí se puede ver una lista con tus estudios.</p>
                        </div>
                        <div className="w-11/12 mx-auto lg:max-w-screen-lg lg:px-20">
                            <table className="text-brandOrange w-full">
                                <thead>
                                    <tr className='text-xl font-din'>
                                        <td className='border-b-2 border-brandOrange lg:text-4xl'>Estudio</td>
                                        <td className='border-b-2 border-brandOrange lg:text-4xl'>Fecha</td>
                                        <td className='border-b-2 border-brandOrange lg:text-4xl'>Link</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        estudios.map((estudio: Estudio, index: number) => {
                                            return (
                                                <tr key={index}>
                                                    <td className='text-md font-din-pro font-[400] lg:text-2xl'>{estudio.estudio}</td>
                                                    <td className='text-md font-din-pro font-[400] lg:text-2xl'>{estudio.fecha}</td>
                                                    <td className='text-xl font-din-pro font-[400] lg:text-2xl w-12 h-12 text-center bg-brandOrange text-white'>
                                                        <a href={`https://estudio.informemedico.com.ar/#/54/${hash}`} target='_blank' rel='noreferrer'
                                                            onClick={() => plausible('EstudioVisto')}
                                                        >Ver</a>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>                
                        </div>
                    </>
                }




            </section>
            <Footer footer />
        </>
    )
}

export default Estudios