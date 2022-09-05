import { ReactNode, useState, SetStateAction, Dispatch, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

const ItemLink = ({ text, link} : { text: string, link: string}) => {
    return (
        <Link href={link} passHref>
            <a className="
                text-xl px-10 py-3 border-b-[1px] font-main font-medium
                lg:p-0 lg:border-0 lg:font-main lg:font-light
            ">

                {text}
            </a>
        </Link>
    )
}

const Nav = ({mobileMenuActive, setMenuMobile}: { mobileMenuActive: boolean, setMenuMobile: Dispatch<SetStateAction<boolean>> }) => {

    return (
        <div className="
            NavContainer sticky top-0 z-50 bg-brandOrange shadow-xl w-full flex items-center px-4 h-20 justify-between 
            lg:px-16 lg:py-4 lg:h-max
        ">
                    
            <picture className="w-16 leading-none">
                <Image src={'/icons/CID_WHITE.svg'} width={280} height={231} alt='CID LOGO BLANCO' />
            </picture>
            
            <div className={`
                absolute top-full z-20 flex flex-col w-3/4 rounded-br-lg bg-brandOrange duration-500 shadow-[0px_10px_5px_-5px_rgb(0,0,0,0.1)_inset] ${ mobileMenuActive ? 'left-0 ' : '-left-full' }
                lg:static lg:shadow-none lg:w-max
            `}>
                
                <nav className="flex flex-col lg:flex-row lg:justify-center lg:gap-10">
                    <ItemLink link='/' text='Home' />
                    <ItemLink link='/' text='Nosotros' />
                    <ItemLink link='/' text='Servicios' />
                    <ItemLink link='/' text='Obras Sociales' />
                    <ItemLink link='/' text='Contacto' />
                    <ItemLink link='/' text='Mis Estudios' />
                </nav>
                
                {/* MOBILE: REDES SOCIALES */}
                <div className="flex justify-between p-6 lg:hidden">
                    <div className="block bg-white rounded p-2 leading-none">
                        <Image width={30} height={30} src={'/icons/WHATSAPP_ORANGE.svg'} alt='WHATSAPP ICON' />
                    </div>
                    <div className="flex gap-2">
                        <Image width={30} height={30} src={'/icons/INSTAGRAM_WHITE.svg'} alt='ICONO INSTAGRAM' />
                        <Image width={30} height={30} src={'/icons/FACEBOOK_WHITE.svg'} alt='ICONO FACEBOOK' />
                    </div>
                </div>

            </div>

            {/* DESKTOP: BOTÓN PEDÍ UN TURNO */}
            <button className="bg-white flex items-center gap-4 py-2 px-4 rounded">
                <div className="relative w-6 h-6">
                    <Image layout="fill" src={'/icons/WHATSAPP_ORANGE.svg'} alt='WHATSAPP ICON' />
                </div>
                <span className="hidden font-medium uppercase text-brandOrange font-main text-lg whitespace-pre xl:inline">Pedí un turno</span>
            </button>
            
            {/* MOBILE: BOTÓN MENÚ */}
            <div className="MenuContainer w-10 h-7 flex flex-col justify-between lg:hidden" onClick={() => setMenuMobile(() => mobileMenuActive ? false : true)}>
                <span className={`relative w-full h-[3px] bg-white duration-200 ${mobileMenuActive ? 'rotate-45 top-[12.5px]' : 'rotate-0 top-0'}`}  />
                <span className={`relative w-full h-[3px] bg-white duration-200 ${mobileMenuActive ? 'opacity-0' : 'opacity-1'}`} />
                <span className={`relative w-full h-[3px] bg-white duration-200 ${mobileMenuActive ? '-rotate-45 -top-[12.5px]' : 'rotate-0 top-0'}`} />
            </div>

        </div>
    )
}

const MediaIgFb = () => {
    return (
        <div className="flex gap-5 justify-center w-max">
            <div className="relative w-8 aspect-square lg:w-10">
                <Image layout='fill' src='/icons/INSTAGRAM_ORANGE.svg' alt="ICONO INSTAGRAM" />
            </div>
            <div className="relative w-8 aspect-square lg:w-10">
                <Image layout='fill' src='/icons/FACEBOOK_ORANGE.svg' alt="ICONO FACEBOOK" />
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <footer className="mt-10 lg:mt-20">
            
            <div className="flex flex-col lg:flex-row-reverse lg:justify-center lg:items-center">
                <div className="">
                    <h2 className="title lg:max-w-sm lg:text-left lg:text-6xl lg:mb-5">Encontranos en las redes</h2>
                    <div className="hidden lg:inline-block w-full pb-5 border-b-4 border-brandOrange">
                        <MediaIgFb />
                    </div>
                </div>
                <picture className="
                    relative w-full aspect-square max-w-md flex justify-center mx-auto
                    lg:max-w-none lg:w-2/5 lg:m-0
                ">

                    <Image layout="fill" objectFit="cover" src='/icons/TELEFONOS_REDES.svg' alt='FOTO REDES SOCIALES' />
                </picture>
            </div>
            
            <div className="flex justify-center lg:hidden">
                <MediaIgFb />
            </div>

            {/* MAPA Y DIRECCIÓN */}
            <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-6 lg:p-6">

                <div className="py-10 px-5 w-full aspect-square max-w-xl mx-auto lg:aspect-video lg:max-w-4xl lg:p-0 lg:m-0">
                    <iframe className="w-full h-full border-2 border-brandOrange p-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3409.394804730663!2d-64.2967309129843!3d-31.292831431852548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329d1c0a7d7123%3A0xe4e6f92e385c8c4b!2sCentro%20De%20Im%C3%A1genes%20Diagnosticas!5e0!3m2!1ses-419!2sar!4v1662144970990!5m2!1ses-419!2sar" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>

                <div className="text-brandOrange text-xl flex flex-col items-center gap-2 lg:gap-4 lg:items-end">
                    <div className="relative w-10 h-10 lg:w-20 lg:h-20">
                        <Image layout="fill" src='/icons/UBICACION_ORANGE.svg' alt='ICONO UBICACIÓN' />
                    </div>
                    <div className="flex gap-2 lg:flex-col items-end">
                        <h2 className="font-main font-bold whitespace-pre text-xl lg:text-5xl lg:text-right">25 de Mayo 245,</h2>
                        <span className="font-secondary font-medium text-xl text-right lg:text-3xl lg:max-w-[200px] lg:leading-10">Villa Allende, Córdoba</span>
                    </div>
                </div>
                
            </div>

            {/* FOOTER BOTTOM BG NARANJA */}
            <div className="bg-brandOrange mt-10 p-5 lg:mt-20 lg:p-12">
                
                <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center lg:m-auto">
                    <div className="block w-1/3 m-auto max-w-[150px] lg:m-0">
                        <Image src={'/icons/CID_WHITE.svg'} width={280} height={231} alt='CID LOGO BLANCO' />
                    </div>
                    <div className="flex flex-col w-full px-2 m-auto gap-5 max-w-md lg:m-0 lg:flex-row lg:gap-20">
                        <div className="flex justify-center gap-10 lg:flex-col lg:gap-2">
                            <Link href='/'><a className="w-1/3 text-center text-sm whitespace-pre font-secondary font-light lg:text-base">Home</a></Link>
                            <Link href='/'><a className="w-1/3 text-center text-sm whitespace-pre font-secondary font-light lg:text-base">Nosotros</a></Link>
                            <Link href='/'><a className="w-1/3 text-center text-sm whitespace-pre font-secondary font-light lg:text-base">Servicios</a></Link>
                        </div>
                        <div className="flex justify-center gap-10 lg:flex-col lg:gap-2">
                            <Link href='/'><a className="w-1/3 text-center text-sm whitespace-pre font-secondary font-light lg:text-base">Mis Estudios</a></Link>
                            <Link href='/'><a className="w-1/3 text-center text-sm whitespace-pre font-secondary font-light lg:text-base">Obras Sociales</a></Link>
                            <Link href='/'><a className="w-1/3 text-center text-sm whitespace-pre font-secondary font-light lg:text-base">Contacto</a></Link>
                        </div>
                    </div>
                    <div className="flex gap-5 justify-center">
                        <div className="relative w-8 aspect-square lg:w-10">
                            <Image layout='fill' src='/icons/INSTAGRAM_WHITE.svg' alt="ICONO INSTAGRAM" />
                        </div>
                        <div className="relative w-8 aspect-square lg:w-10">
                            <Image layout='fill' src='/icons/FACEBOOK_WHITE.svg' alt="ICONO FACEBOOK" />
                        </div>
                    </div>                    
                </div>

                <span className="block h-[1px] bg-white mx-auto my-5" />

                <div className="flex flex-col justify-center items-center gap-2 lg:flex-row lg:justify-between">
                    <span className="text-center text-sm font-secondary font-light">CID Villa Allende 2022 - Todos los derechos reservados</span>
                    <span className="text-center text-sm font-secondary font-light">Realizado por 0092 Estudio Creativo</span>
                </div>
            </div>
            
        </footer>
    )
}

const Layout = ({children}: {children: ReactNode}) => {

    const [mobileMenuActive, setMenuMobile] = useState(false)

    useEffect(() => {

        const menu = document.querySelector('.MenuContainer')!
        const nav = document.querySelector('.NavContainer')!

        const closeMenuEscape = (e: KeyboardEvent) => e.key === 'Escape' ? setMenuMobile(false) : null
        const closeMenuClick = (e: MouseEvent) => {

            if (window.innerWidth >= 1024) return            
            if (menu.contains(e.target as Node)) return

            const clickOnNav = nav.contains(e.target as Node)
            setMenuMobile(clickOnNav)
        } 

        window.addEventListener('click', (e) => closeMenuClick(e))
        window.addEventListener('keydown', (e) => closeMenuEscape(e))
        return() => {
            window.removeEventListener('keydown', (e) => closeMenuEscape(e))
            window.removeEventListener('click', (e) => closeMenuClick(e))
        }

    }, [])

    return (
        <div className="relative">
            <Nav mobileMenuActive={mobileMenuActive} setMenuMobile={setMenuMobile} />

            <div className={`
                absolute w-full h-full top-0 transition-[background-color,z-index] duration-[.5s,0s]
                ${ mobileMenuActive ? 'bg-black/75 z-30 delay-[0s,0s]' : "bg-black/0 -z-10 delay-[0s,.5s]"} 
                lg:hidden
            `} />
            
            {children}  
            <Footer />
        </div>
    )
}

export default Layout