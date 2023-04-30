import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { Footer } from 'components/Layout'
import { useState } from 'react'
import ObrasSocialesLogos from 'components/ObrasSocialesLogos'

const ObrasSocialesList = () => {

  const ObrasSocialesList = ['ACA SALUD', 'APM', 'APROSS', 'BOREAL', 'COMFYE', 'CPCE', 'FEDERADA G1', 'FEDERADA G2-G3', 'GALENO', 'JERARQUÍA SALUD', 'MEDIFE', 'MET', 'NOBIS', 'OMINT', 'OSDE', 'OSITAC', 'OSMATA SANITAS', 'OSPECOR', 'OSPEDYC', 'OSPES', 'OSPIA', 'OSPOCE INT.', 'OSSEG', 'OSSOELSAC', 'PARQUE SALUD', 'POETA LUGONES', 'PREVENCIÓN SALUD', 'PRIVERAL', 'SANCOR SALUD', 'SWISS MEDICAL', 'UNIMED']

  const ObraSocial = ({ name }: { name: string }) => {
    return (
      <li className='text-brandGray font-secondary font-light lg:text-2xl'>
        {name}
      </li>
    )
  }

  const [listOpen, setList] = useState(false)
  const [search, setSearch] = useState<string | undefined>()

  return (

    <div className=''>
      <div className="lg:flex lg:items-end lg:justify-between lg:max-w-screen-2xl lg:px-20 lg:mx-auto lg:gap-10">
        <article className='flex flex-col justify-center lg:w-1/2'>
          <h1 className="text-brandOrange text-center lg:text-left text-4xl font-din-pro mb-5
                        lg:text-5xl
                    ">Obras Sociales</h1>
          <p className='text-center text-brandOrange font-din-pro font-[400] mb-5 px-3
                        lg:text-2xl lg:mb-5 lg:text-left lg:px-0
                    '>Conocé las obras sociales con las que trabajamos actualmente</p>
        </article>

        {/* INPUT */}
        <label htmlFor='search' className="relative w-3/4 lg:w-1/2 h-max flex
                    border-2 border-brandOrange mx-auto rounded-md overflow-hidden
                    text-brandOrange px-2 mb-5 
                    lg:mb-5 lg:max-w-3xl
                ">

          <div className="absolute h-full flex items-center left-2">
            <Image width={20} height={20} src='/icons/LUPA.svg' alt='ICONO LUPA' />
          </div>

          <input type="text" id='search' placeholder='Buscá tu obra social' className='
                        placeholder:text-brandOrange w-full text-left pl-8 py-2 font-secondary font-light
                        focus:border-brandGray active:placeholder:text-transparent focus:placeholder:text-transparent
                        lg:text-2xl
                        
                    ' onChange={(e) => { setSearch(e.target.value.toLowerCase()); setList(false) }} />

        </label>
      </div>

      <div className="mx-auto w-3/4 lg:px-20 lg:w-full lg:max-w-screen-2xl mb-5 lg:mb-10">
        <span className='h-[2px] w-full bg-brandOrange block' />
      </div>

      {/* LISTA */}
      <ul className={`flex flex-col w-3/4 mx-auto overflow-hidden mb-5
                duration-500 ease-out lg:w-full lg:mb-20
                lg:h-max lg:max-w-screen-2xl lg:px-20 lg:grid lg:grid-cols-3 lg:min-h-[308px]
                ${!listOpen ? 'h-[288px]' : `h-[744px]`} 
            `}>
        {ObrasSocialesList.map((name, index) => {

          if (search)
            if (name.toLowerCase().includes(search))
              return <ObraSocial key={index} name={name} />
            else
              return null

          else
            return <ObraSocial key={index} name={name} />

        })}
      </ul>

      {/* VER MAS */}
      <button className="text-brandOrange font-secondary font-light block mx-auto lg:hidden mb-10"
        onClick={() => !search ? setList(!listOpen) : null}
      >{!listOpen ? "Ver Más" : "Ocultar"}</button>
    </div>
  )
}

const ObrasSociales: NextPage = () => {

  return (
    <>
      <Head>
        <title>Obras Sociales</title>
        <meta name="description" content="Conocé las obras sociales con las que trabajamos actualmente" />
      </Head>
      <section className='pt-10 lg:pt-20'>
        {/* <MainImage className='mb-10 lg:mb-20' image={{ src: '/images/OBRAS_SOCIALES.jpg', position: 'center', fit: 'cover', alt: 'IMAGEN DE FONDO RADIOLOGIA' }} /> */}

        <ObrasSocialesList />
        <ObrasSocialesLogos />
      </section>
      <Footer footer />
    </>
  )

}

export default ObrasSociales
