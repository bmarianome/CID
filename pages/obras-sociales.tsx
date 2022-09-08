import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Divisor from 'components/Divisor'
import { Footer } from 'components/Layout'
import { useState } from 'react'

const ObrasSocialesList = () => {
        
    const ObrasSocialesList = ['ACA SALUD', 'APM', 'APROSS', 'BOREAL', 'COMFYE', 'CPCE', 'FEDERADA G1', 'FEDERADA G2-G3', 'GALENO', 'JERARQUÍA SALUD', 'MEDIFE', 'MET', 'NOBIS', 'OMINT', 'OSDE', 'OSITAC', 'OSMATA SANITAS', 'OSPECOR', 'OSPEDYC', 'OSPES', 'OSPIA', 'OSPOCE INT.', 'OSSEG', 'OSSOELSAC', 'PARQUE SALUD', 'POETA LUGONES', 'PREVENCIÓN SALUD', 'PRIVERAL', 'SANCOR SALUD', 'SWISS MEDICAL', 'UNIMED']

    const ObraSocial = ({ name }: { name: string}) => {
        return (
            <li className='
                text-brandGray font-secondary font-light lg:text-xl
            '>{name}</li>        
        )
    }

    const [listOpen, setList] = useState(false)
    const [search, setSearch] = useState<string | undefined>()

    return  (

        <>
            {/* INPUT */}
            <label htmlFor='search' className="relative w-3/4 h-max flex
                border-2 border-brandOrange mx-auto rounded-md overflow-hidden 
                text-brandOrange px-2 mb-5 
                lg:mb-10 lg:max-w-3xl
            ">

                <div className="absolute h-full flex items-center left-2">
                    <Image width={20} height={20} src='/icons/LUPA.svg' alt='ICONO LUPA' />
                </div>
                
                <input type="text" id='search' placeholder='Buscá tu obra social' className='
                    placeholder:text-brandOrange w-full text-center py-2 font-secondary font-light
                    focus:border-brandGray
                    lg:text-2xl
                    
                ' onChange={(e) => {setSearch(e.target.value.toLowerCase()); setList(false)}} />
                
            </label>        

            <span className='h-[2px] w-3/4 bg-brandOrange block mx-auto mb-5 lg:mb-10 lg:max-w-3xl' />

            {/* LISTA */}
            <ul className={`flex flex-col w-3/4 mx-auto overflow-hidden mb-5
                duration-500 ease-out
                lg:mb-10 lg:h-max lg:max-w-3xl lg:grid lg:grid-cols-3 lg:min-h-[308px]
                ${ !listOpen ? 'h-[288px]' : `h-[744px]` } 
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
            <button className="text-brandOrange font-secondary font-light block mx-auto lg:hidden"
                onClick={() => !search ? setList(!listOpen) : null}
            >{ !listOpen ? "Ver Más" : "Ocultar"}</button>
        </>
    )
}

const ObrasSociales: NextPage = () => {


    return (
        <>
            <section>

                {/* TOP */}
                <div className="relative w-full h-[calc(100vh-80px)] flex flex-col">

                    <div className="h-full relative bg-white-gradient">
                        <div className="w-full h-full absolute -z-10">
                            <Image priority layout='fill' objectFit='cover' objectPosition='0px -400px' src={'/images/ECOGRAFIA_3.jpg'} alt='IMAGEN DE FONDO RADIOLOGIA' />
                        </div>
                    </div>
                    
                    <div className="absolute top-1/3 w-full h-max lg:inline-block">
                        <Divisor />
                    </div>

                    <h1 className="title-w-desc">Obras Sociales</h1>
                    <p className='description'>Conocé las obras sociales con las que trabajamos actualmente</p>
                    
                </div>

                <ObrasSocialesList />

            </section>
            <Footer footer />
        </>
    )

}

export default ObrasSociales
