import { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"

const ItemLink = ({ link, text }: { link: string, text: string }) => {
    return (
        <Link href={link} passHref>
            <a className="text-white text-xl whitespace-pre font-secondary tracking-wider">{text}</a>
        </Link>
    )
}

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

const Layout = ({children}: {children: ReactNode}) => {

    return (
        <>
        {/* drop-shadow-[0_0px_15px_rgba(0,0,0)]  */}
            <div className="relative bg-brandOrange shadow-xl w-screen flex items-center px-4 py-2 justify-between xl:px-16">
                
                <div className="w-16 leading-none xl:w-24">
                    <Image src={'/icons/CID_WHITE.svg'} width={280} height={231} alt='CID LOGO BLANCO' />
                </div>
                
                <nav className="hidden lg:flex gap-10">
                    <ItemLink link='/' text='Home' />
                    <ItemLink link='/' text='Nosotros' />
                    <ItemLink link='/' text='Servicios' />
                    <ItemLink link='/' text='Obras Sociales' />
                    <ItemLink link='/' text='Contacto' />
                    <ItemLink link='/' text='Mis Estudios' />

                    {/* <div className="flex justify-between p-8">
                        <DateButton />
                        <div className="flex gap-1">
                            <Image width={40} height={40} src={'/icons/INSTAGRAM_WHITE.svg'} />
                            <Image width={40} height={40} src={'/icons/FACEBOOK_WHITE.svg'} />
                        </div>
                    </div> */}
                    
                </nav>

                <DateButton />
                
                <div className="w-10 h-7 flex flex-col justify-between lg:hidden">
                    <span className="w-full h-[3px] bg-white" />
                    <span className="w-full h-[3px] bg-white" />
                    <span className="w-full h-[3px] bg-white" />
                </div>

            </div>

            {children}
        </>
    )
}

export default Layout