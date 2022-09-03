import { ReactNode, useState, SetStateAction, Dispatch, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const DateButton = () => {
    return (
        <button className="bg-white flex items-center gap-4 py-2 px-4 rounded">
            <div className="relative w-6 h-6">
                <Image layout="fill" src={'/icons/WHATSAPP_ORANGE.svg'} alt='WHATSAPP ICON' />
            </div>
            <span className="hidden font-medium uppercase text-brandOrange font-main text-xl whitespace-pre lg:hidden xl:inline">Pedí un turno</span>
        </button>
    )
}

const ItemLink = ({ text, link} : { text: string, link: string}) => {
    return (
        <Link href={link} passHref>
            <a className="text-xl px-10 py-3 border-b-[1px] font-main font-medium">
                {text}
            </a>
        </Link>
    )
}

const Nav = ({mobileMenuActive, setMenuMobile}: { mobileMenuActive: boolean, setMenuMobile: Dispatch<SetStateAction<boolean>> }) => {
    
    return (
        <div className="sticky top-0 z-50 bg-brandOrange shadow-xl w-screen flex items-center px-4 h-20 justify-between xl:px-16">
                    
            <picture className="w-16 leading-none">
                <Image src={'/icons/CID_WHITE.svg'} width={280} height={231} alt='CID LOGO BLANCO' />
            </picture>
            
            <div className={`absolute top-full z-20 flex flex-col w-3/4 rounded-br-lg bg-brandOrange duration-500 shadow-[0px_10px_5px_-5px_rgb(0,0,0,0.1)_inset] ${ mobileMenuActive ? 'left-0 ' : '-left-full' }`}>
                
                <nav className="flex flex-col">
                    <ItemLink link='/' text='Home' />
                    <ItemLink link='/' text='Nosotros' />
                    <ItemLink link='/' text='Servicios' />
                    <ItemLink link='/' text='Obras Sociales' />
                    <ItemLink link='/' text='Contacto' />
                    <ItemLink link='/' text='Mis Estudios' />
                </nav>
                
                <div className="flex justify-between p-6">
                    <div className="block bg-white rounded p-2 leading-none">
                        <Image width={30} height={30} src={'/icons/WHATSAPP_ORANGE.svg'} alt='WHATSAPP ICON' />
                    </div>
                    <div className="flex gap-2">
                        <Image width={30} height={30} src={'/icons/INSTAGRAM_WHITE.svg'} alt='ICONO INSTAGRAM' />
                        <Image width={30} height={30} src={'/icons/FACEBOOK_WHITE.svg'} alt='ICONO FACEBOOK' />
                    </div>
                </div>

            </div>

            <DateButton />
            
            <div className="w-10 h-7 flex flex-col justify-between lg:hidden" onClick={() => setMenuMobile(() => mobileMenuActive ? false : true)}>
                <span className={`relative w-full h-[3px] bg-white duration-200 ${mobileMenuActive ? 'rotate-45 top-[12.5px]' : 'rotate-0 top-0'}`}  />
                <span className={`relative w-full h-[3px] bg-white duration-200 ${mobileMenuActive ? 'opacity-0' : 'opacity-1'}`} />
                <span className={`relative w-full h-[3px] bg-white duration-200 ${mobileMenuActive ? '-rotate-45 -top-[12.5px]' : 'rotate-0 top-0'}`} />
            </div>

        </div>
    )
}

const Footer = () => {
    return (
        <footer className="mt-10">
            
            <div className="flex flex-col">
                <h2 className="title">Encontranos en las redes</h2>
                <picture className="relative w-screen aspect-square">
                    <Image layout="fill" objectFit="cover" src='/icons/TELEFONOS_REDES.svg' alt='FOTO REDES SOCIALES' />
                </picture>
            </div>
            
            <div className="flex gap-5 justify-center">
                <div className="relative w-8 aspect-square">
                    <Image layout='fill' src='/icons/INSTAGRAM_ORANGE.svg' alt="ICONO INSTAGRAM" />
                </div>
                <div className="relative w-8 aspect-square">
                    <Image layout='fill' src='/icons/FACEBOOK_ORANGE.svg' alt="ICONO FACEBOOK" />
                </div>
            </div>
            
            <div className="py-10 px-5 w-screen aspect-square">
                <iframe className="w-full h-full border-2 border-brandOrange p-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3409.394804730663!2d-64.2967309129843!3d-31.292831431852548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329d1c0a7d7123%3A0xe4e6f92e385c8c4b!2sCentro%20De%20Im%C3%A1genes%20Diagnosticas!5e0!3m2!1ses-419!2sar!4v1662144970990!5m2!1ses-419!2sar" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>

            <div className="text-brandOrange text-xl flex flex-col items-center gap-2">
                <div className="relative w-10 aspect-square">
                    <Image layout="fill" src='/icons/UBICACION_ORANGE.svg' alt='ICONO UBICACIÓN' />
                </div>
                <h2 className="font-main font-bold">25 de Mayo 245, <span className="font-secondary font-medium">Villa Allende, Córdoba</span></h2>
            </div>

            {/* FOOTER BOTTOM BG NARANJA */}
            <div className="bg-brandOrange mt-10 py-5">
                
                <div className=" flex flex-col gap-5">
                    <div className="block w-1/3 m-auto">
                        <Image src={'/icons/CID_WHITE.svg'} width={280} height={231} alt='CID LOGO BLANCO' />
                    </div>
                    <div className="flex flex-col w-screen px-2 m-auto gap-5">
                        <div className="flex justify-center gap-10">
                            <Link href='/'><a className="w-1/3 text-center text-sm whitespace-pre font-secondary font-light">Home</a></Link>
                            <Link href='/'><a className="w-1/3 text-center text-sm whitespace-pre font-secondary font-light">Nosotros</a></Link>
                            <Link href='/'><a className="w-1/3 text-center text-sm whitespace-pre font-secondary font-light">Servicios</a></Link>
                        </div>
                        <div className="flex justify-center gap-10">
                            <Link href='/'><a className="w-1/3 text-center text-sm whitespace-pre font-secondary font-light">Mis Estudios</a></Link>
                            <Link href='/'><a className="w-1/3 text-center text-sm whitespace-pre font-secondary font-light">Obras Sociales</a></Link>
                            <Link href='/'><a className="w-1/3 text-center text-sm whitespace-pre font-secondary font-light">Contacto</a></Link>
                        </div>
                    </div>
                    <div className="flex gap-5 justify-center">
                        <div className="relative w-8 aspect-square">
                            <Image layout='fill' src='/icons/INSTAGRAM_WHITE.svg' alt="ICONO INSTAGRAM" />
                        </div>
                        <div className="relative w-8 aspect-square">
                            <Image layout='fill' src='/icons/FACEBOOK_WHITE.svg' alt="ICONO FACEBOOK" />
                        </div>
                    </div>                    
                </div>

                <span className="block w-[90%] h-[1px] bg-white mx-auto my-5" />

                <div className="flex flex-col justify-center items-center gap-2">
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

        const closeMenuEscape = (e: KeyboardEvent) => e.key === 'Escape' ? setMenuMobile(false) : null

        // const closeMenuClick = (e: MouseEvent) => {
        //     const foo = document.querySelector('.)?.contains(e.target as Node)
        //     setMenuMobile(foo)
        // } 
        // window.addEventListener('click', (e) => closeMenuClick(e))

        window.addEventListener('keydown', (e) => closeMenuEscape(e))
        return() => window.removeEventListener('keydown', (e) => closeMenuEscape(e))

    }, [])

    return (
        <div className="relative">
            <Nav mobileMenuActive={mobileMenuActive} setMenuMobile={setMenuMobile} />
            <div className={`absolute w-full h-full bg-black/75 top-0 duration-500 transition-[background-color,z-index] ${ mobileMenuActive ? 'bg-black/75 z-30 delay-[0s,0s]' : "bg-black/0 -z-10 delay-[0s,.5s]"}`} />
            {children}
            <Footer />
        </div>
    )
}

export default Layout