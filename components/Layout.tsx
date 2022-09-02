import { ReactNode } from "react"
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

const Nav = () => {
    return (
        <div className="relative bg-brandOrange shadow-xl w-screen flex items-center px-4 h-20 justify-between xl:px-16">
                    
            <picture className="w-16 leading-none">
                <Image src={'/icons/CID_WHITE.svg'} width={280} height={231} alt='CID LOGO BLANCO' />
            </picture>
            
            {/* <nav className="hidden lg:flex gap-10">
                <ItemLink link='/' text='Home' />
                <ItemLink link='/' text='Nosotros' />
                <ItemLink link='/' text='Servicios' />
                <ItemLink link='/' text='Obras Sociales' />
                <ItemLink link='/' text='Contacto' />
                <ItemLink link='/' text='Mis Estudios' />

                <div className="flex justify-between p-8">
                    <DateButton />
                    <div className="flex gap-1">
                        <Image width={40} height={40} src={'/icons/INSTAGRAM_WHITE.svg'} />
                        <Image width={40} height={40} src={'/icons/FACEBOOK_WHITE.svg'} />
                    </div>
                </div>
                
            </nav> */}

            <DateButton />
            
            <div className="w-10 h-7 flex flex-col justify-between lg:hidden">
                <span className="w-full h-[3px] bg-white" />
                <span className="w-full h-[3px] bg-white" />
                <span className="w-full h-[3px] bg-white" />
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

    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    )
}

export default Layout