import { ReactNode, useState, SetStateAction, Dispatch, useEffect, useRef } from "react"
import { usePlausible } from 'next-plausible'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

const ItemLink = ({ text, link }: { text: string, link: string }) => {

  const router = useRouter()

  return (
    (<Link
      href={link}
      passHref
      className={` relative
                text-xl px-10 py-3 border-b-[1px] font-din-pro font-[400]
                lg:p-0 lg:font-din lg:font-[300] lg:border-none
                hover:before:w-full
                ${router.pathname === link ? "before-under-line-active" : "before-under-line"}
                `}>

      {text}

    </Link>)
  );
}

const Nav = ({ mobileMenuActive, setMenuMobile }: { mobileMenuActive: boolean, setMenuMobile: Dispatch<SetStateAction<boolean>> }) => {

  const plausible = usePlausible()

  return (
    <header className="
            NavContainer sticky top-0 z-50 bg-brandOrange shadow-xl w-full flex items-center px-4 h-20 justify-between 
            lg:px-16 lg:py-4 lg:h-max
        ">

      <Link href='/' passHref legacyBehavior>
        <figure className="w-16 leading-none">
          <Image width={280} height={231} src={'/icons/CID_WHITE.svg'} alt='' />
        </figure>
      </Link>

      <div className={`
                absolute top-full z-20 flex flex-col w-3/4 rounded-br-lg bg-brandOrange duration-500 shadow-[0px_10px_5px_-5px_rgb(0,0,0,0.1)_inset] ${mobileMenuActive ? 'left-0 ' : '-left-full'}
                lg:static lg:shadow-none lg:w-max
            `}>

        <nav className="flex flex-col lg:flex-row lg:justify-center lg:gap-10">
          <ItemLink link='/' text='Home' />
          <ItemLink link='/nosotros' text='Nosotros' />
          <ItemLink link='/servicios' text='Servicios' />
          <ItemLink link='/obras-sociales' text='Obras Sociales' />
          <ItemLink link='/contacto' text='Contacto' />
          <ItemLink link='/estudios' text='Mis Estudios' />
        </nav>

        {/* MOBILE: REDES SOCIALES */}
        <div className="flex justify-between p-6 lg:hidden">
          <Link href={`https://wa.me/+543543608379?text=${encodeURIComponent("Hola, quiero realizar una consulta")}`} target='_blank' rel='noreferrer'
            className="block bg-white rounded p-2 leading-none" onClick={() => plausible('WhatsappClick')}>
            <Image width={30} height={30} src={'/icons/WHATSAPP_ORANGE.svg'} alt='' />
          </Link>
          <div className="flex gap-2">
            <Link href="https://www.instagram.com/cid.va/" target='_blank' rel='noreferrer' className="flex items-center justify-center" onClick={() => plausible('InstagramClick')}>
              <Image width={30} height={30} src={'/icons/INSTAGRAM_WHITE.svg'} alt='' />
            </Link>
            <Link href="https://www.facebook.com/Cid.Villaallende" target='_blank' rel='noreferrer' className="flex items-center justify-center" onClick={() => plausible('FacebookClick')}>
              <Image width={30} height={30} src={'/icons/FACEBOOK_WHITE.svg'} alt='' />
            </Link>
          </div>
        </div>

      </div>

      {/* DESKTOP: BOTÓN PEDÍ UN TURNO */}
      <Link href={`https://wa.me/+543543608379?text=${encodeURIComponent("Hola, quiero realizar una consulta")}`} target='_blank' rel='noreferrer' onClick={() => plausible('WhatsappClick')}
        className="hidden bg-white lg:flex items-center gap-4 py-2 px-4 rounded shadow-simple hover:hover:-translate-y-[0.125rem] duration-200">

        <div className="relative w-6 h-6">
          <Image layout="fill" src={'/icons/WHATSAPP_ORANGE.svg'} alt='' />
        </div>
        <span className="hidden font-din-pro uppercase text-brandOrange text-lg whitespace-pre xl:inline">Pedí un turno</span>
      </Link>

      {/* MOBILE: BOTÓN MIS ESTUDIOS */}
      <Link
        href='/estudios'
        passHref
        className="lg:hidden 
                    font-din-pro uppercase text-brandOrange text-lg whitespace-pre
                    bg-white flex items-center gap-4 py-2 px-4 rounded shadow-simple hover:hover:-translate-y-[0.125rem] duration-200
                ">
        
          Mis Estudios
        
      </Link>

      {/* MOBILE: BOTÓN MENÚ */}
      <div className="MenuContainer w-10 h-7 flex flex-col justify-between lg:hidden" onClick={() => setMenuMobile(() => mobileMenuActive ? false : true)}>
        <span className={`relative w-full h-[3px] bg-white duration-200 ${mobileMenuActive ? 'rotate-45 top-[12.5px]' : 'rotate-0 top-0'}`} />
        <span className={`relative w-full h-[3px] bg-white duration-200 ${mobileMenuActive ? 'opacity-0' : 'opacity-1'}`} />
        <span className={`relative w-full h-[3px] bg-white duration-200 ${mobileMenuActive ? '-rotate-45 -top-[12.5px]' : 'rotate-0 top-0'}`} />
      </div>

    </header>
  );
}

const MediaIgFb = () => {

  const plausible = usePlausible()

  return (
    <div className="flex gap-5 justify-center w-max">
      <Link href="https://www.instagram.com/cid.va/" target='_blank' rel='noreferrer' className="relative w-10 aspect-square hover:scale-105 duration-200" onClick={() => plausible('InstagramClick')}>
        <Image layout='fill' src='/icons/INSTAGRAM_ORANGE.svg' alt="" />
      </Link>
      <Link href="https://www.facebook.com/Cid.Villaallende" target='_blank' rel='noreferrer' className="relative w-10 aspect-square hover:scale-105 duration-200" onClick={() => plausible('FacebookClick')}>
        <Image layout='fill' src='/icons/FACEBOOK_ORANGE.svg' alt="" />
      </Link>
    </div>
  )
}

export const Footer = ({ media, map, footer }: { media?: boolean, map?: boolean, footer?: boolean }) => {

  const plausible = usePlausible()

  const Media = () => {
    return (
      <>
        <div className="flex flex-col lg:flex-row-reverse lg:justify-center lg:items-center">
          <div className="">
            <h2 className="title lg:max-w-sm lg:text-left lg:text-6xl lg:mb-5">Encontranos en las redes</h2>
            <div className="hidden lg:inline-block w-full pb-5 border-b-4 border-brandOrange">
              <MediaIgFb />
            </div>
          </div>
          <figure className="
                        relative w-full aspect-square max-w-md flex justify-center mx-auto mb-5
                        lg:max-w-none lg:w-2/5 lg:m-0 
                    ">

            <Image layout="fill" objectFit="cover" src='/icons/TELEFONOS_REDES.png' sizes="(max-width: 1024px) 80vw, 50vw" alt=' SOCIALES' />
          </figure>
        </div>

        <div className="flex justify-center lg:hidden">
          <MediaIgFb />
        </div>
      </>
    )
  }

  const Map = () => {
    return (
      <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-6 lg:p-6">

        <div className="py-10 px-5 w-full aspect-square max-w-xl mx-auto lg:aspect-video lg:max-w-4xl lg:p-0 lg:m-0">
          <iframe title="google-maps" className="w-full h-full border-2 border-brandOrange p-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3409.394804730663!2d-64.2967309129843!3d-31.292831431852548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329d1c0a7d7123%3A0xe4e6f92e385c8c4b!2sCentro%20De%20Im%C3%A1genes%20Diagnosticas!5e0!3m2!1ses-419!2sar!4v1662144970990!5m2!1ses-419!2sar" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>

        <div className="text-brandOrange text-xl flex flex-col items-center gap-2 lg:gap-4 lg:items-end">
          <div className="relative w-10 h-10 lg:w-20 lg:h-20">
            <Image layout="fill" src='/icons/UBICACION_ORANGE.svg' alt='' />
          </div>
          <div className="flex gap-2 lg:flex-col items-end">
            <h2 className="font-main font-bold whitespace-pre text-xl lg:text-4xl lg:text-right">25 de Mayo 245,</h2>
            <span className="font-secondary font-medium text-xl text-right lg:text-3xl lg:max-w-[260px] lg:leading-10">Villa Allende, Córdoba</span>
          </div>
        </div>

      </div>
    )
  }

  const Foot = () => {
    return (
      <div className="bg-brandOrange mt-10 p-5 lg:mt-20 lg:p-12">

        {/* LOGO, NAV Y MEDIA */}
        <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center lg:m-auto">
          <div className="block w-1/3 m-auto max-w-[150px] lg:m-0">
            <Image src={'/icons/CID_WHITE.svg'} width={280} height={231} alt='' />
          </div>

          <div className="flex flex-col w-max px-2 m-auto gap-5 max-w-md lg:m-0 lg:flex-row lg:gap-20">
            <div className="flex justify-center gap-10 lg:flex-col lg:gap-2">
              <Link
                href='/'
                className="w-1/3 text-center text-sm whitespace-pre font-din-pro font-[400] lg:text-xl">Home</Link>
              <Link
                href='/nosotros'
                className="w-1/3 text-center text-sm whitespace-pre font-din-pro font-[400] lg:text-xl">Nosotros</Link>
              <Link
                href='/servicios'
                className="w-1/3 text-center text-sm whitespace-pre font-din-pro font-[400] lg:text-xl">Servicios</Link>
            </div>
            <div className="flex justify-center gap-10 lg:flex-col lg:gap-2">
              <Link
                href='/'
                className="w-1/3 text-center text-sm whitespace-pre font-din-pro font-[400] lg:text-xl">Mis Estudios</Link>
              <Link
                href='/obras-sociales'
                className="w-1/3 text-center text-sm whitespace-pre font-din-pro font-[400] lg:text-xl">Obras Sociales</Link>
              <Link
                href='/contacto'
                className="w-1/3 text-center text-sm whitespace-pre font-din-pro font-[400] lg:text-xl">Contacto</Link>
            </div>
          </div>

          <div className="flex gap-5 justify-center">
            <Link href="https://www.instagram.com/cid.va/" target='_blank' rel='noreferrer' className="relative w-8 aspect-square lg:w-10 hover:scale-110 duration-200" onClick={() => plausible('InstagramClick')}>
              <Image layout='fill' src='/icons/INSTAGRAM_WHITE.svg' alt="" />
            </Link>
            <Link href="https://www.facebook.com/Cid.Villaallende" target='_blank' rel='noreferrer' className="relative w-8 aspect-square lg:w-10 hover:scale-110 duration-200" onClick={() => plausible('FacebookClick')}>
              <Image layout='fill' src='/icons/FACEBOOK_WHITE.svg' alt="" />
            </Link>
          </div>
        </div>

        {/* LÍNEA SEPARADORA */}
        <span className="block h-[1px] bg-white mx-auto my-5" />

        {/* DERECHOS, TELÉFONOS, DESARROLLO */}
        <div className="flex flex-col justify-center items-center gap-2 lg:flex-row lg:justify-between">
          <span className="text-center text-sm font-secondary font-light">CID 2022 - Todos los derechos reservados</span>

          {/* TELEFONOS */}
          <span className="text-center flex gap-4">
            <Link onClick={() => plausible('Click en Llamada')} className="flex items-center gap-4 rounded-md border-[1px] border-white px-2 py-1 group" href="tel:+543543432372">
              <span className="text-white text-lg font-secondary font-medium whitespace-pre">3543 - 432372</span>
              <figure className="h-5 w-5 relative group-hover:scale-110 duration-200">
                <Image layout="fill" src='/icons/TELEFONO_WHITE.svg' alt='' />
              </figure>
            </Link>
            <Link onClick={() => plausible('Click en Llamada')} className="flex items-center gap-4 rounded-md border-[1px] border-white px-2 py-1 group" href="tel:+543543432646">
              <span className="text-white text-lg font-secondary font-medium whitespace-pre">3543 - 432646</span>
              <figure className="h-5 w-5 relative group-hover:scale-110 duration-200">
                <Image layout="fill" src='/icons/TELEFONO_WHITE.svg' alt='' />
              </figure>
            </Link>
          </span>
          <span className="text-sm font-secondary font-light">
            <div className="flex flex-col items-end">
              <span>Diseños: 0092 Estudio Creativo.</span>
              <span>Desarrollador: <Link className="underline" href="https://bmariano.me">bmariano.me</Link></span>
            </div>
          </span>
        </div>
      </div>
    );
  }

  return (
    <footer className="mt-10 lg:mt-20">

      {
        !media ? null :
          <Media />
      }

      {
        !map ? null :
          <Map />
      }

      {
        !footer ? null :
          <Foot />
      }

    </footer>
  )
}

const WhatsappFixed = () => {

  const plausible = usePlausible()

  return (
    <Link href={`https://wa.me/+543543608379?text=${encodeURIComponent("Hola, quiero realizar una consulta")}`} target='_blank' rel='noreferrer'
      className="fixed flex items-center justify-center w-12 h-12 bg-[#25D366] rounded-full z-10 shadow-simple
            right-8 bottom-8 lg:right-10 lg:bottom-10 
            hover:shadow-xl hover:-translate-y-[0.125rem] duration-200
            hover:cursor-pointer group" onClick={() => plausible('WhatsappClick')}>
      <figure className="relative w-6 h-6 duration-200">
        <Image layout="fill" src='/icons/WHATSAPP_WHITE.svg' alt="WHATSAPP ICON" />
      </figure>
    </Link>
  )
}

const GrayGradient = ({ mobileMenuActive }: { mobileMenuActive: boolean }) => {
  return (
    <div className={`GrayGradient
            absolute w-full h-full top-0 transition-[background-color,z-index] duration-[.5s,0s]
            ${mobileMenuActive ? 'bg-black/75 z-30 delay-[0s,0s]' : "bg-black/0 -z-10 delay-[0s,.5s]"} 
            lg:hidden
        `} />
  )
}

const Layout = ({ children }: { children: ReactNode }) => {

  const [mobileMenuActive, setMenuMobile] = useState(false)
  const router = useRouter()

  useEffect(() => {

    const gradient = document.querySelector('.GrayGradient')!

    const closeMenuPageChange = () => setMenuMobile(false)
    const closeMenuEscape = (e: KeyboardEvent) => e.key === 'Escape' ? setMenuMobile(false) : null
    const closeMenuClick = (e: MouseEvent) => {
      if (window.innerWidth >= 1024) return
      if (gradient.contains(e.target as Node)) {
        setMenuMobile(false)
      }
    }

    if (window.innerWidth <= 1024) {
      router.events.on("routeChangeStart", closeMenuPageChange)
      window.addEventListener('click', (e) => closeMenuClick(e))
      window.addEventListener('keydown', (e) => closeMenuEscape(e))
    }

    return () => {
      window.removeEventListener('keydown', (e) => closeMenuEscape(e))
      window.removeEventListener('click', (e) => closeMenuClick(e))
      router.events.off("routeChangeStart", closeMenuPageChange)
    }

  }, [router.events])

  return (
    <div className="relative">
      <Nav mobileMenuActive={mobileMenuActive} setMenuMobile={setMenuMobile} />
      <GrayGradient mobileMenuActive={mobileMenuActive} />
      <WhatsappFixed />
      {children}
    </div>
  )
}

export default Layout