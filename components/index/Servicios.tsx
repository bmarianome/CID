import Head from 'next/head'
import Image from "next/legacy/image";
import Link from 'next/link'

import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import { useEffect, useState } from 'react';
import { usePlausible } from 'next-plausible';

type ServiciosProps = typeof serviciosList

const ServiceSlide = ({ item }: { item: { statisticsLabel: string, text: string, items: string[] } }) => {

  const [active, setActive] = useState(false)
  const plausible = usePlausible()

  const swiperSlide = useSwiperSlide()

  useEffect(() => {
    setActive(false)
  }, [swiperSlide])

  return (
    <div 
      className={`bg-brandOrange py-4 flex flex-col items-center w-full m-auto max-w-sm rounded-md hover:cursor-pointer duration-200 ${active ? "gap-3" : "gap-1"}`} 
      onClick={() => setActive(() => {
        !active ? plausible(item.statisticsLabel) : null
        return active ? false : true
      })}
    >
      <h3 className='font-secondary font-bold text-2xl lg:text-3xl'>
        {item.text}
      </h3>

      <ul className={`font-din font-light text-lg text-center flex flex-col items-start list-disc justify-center px-4 transition-[height,_opacity]`}>
        {item.items.map((text, index) => (
          <li key={index} className={`duration-200 text-white font-din-pro font-light ${active ? `h-[28px] opacity-100` : `h-[0px] opacity-0`}`}>{text}</li>
        ))}
      </ul>
      <span className='font-din font-light text-lg lg:text-2xl'>{active ? "Ocultar" : "Ver Mas"}</span>
    </div>
  )
}

export const serviciosList = [
  {
    statisticsLabel: "Click en: Resonancias", 
    text: "Resonancias", 
    items: ["Angioresonancia", "Colangioresonancia", "Contraste", "RMN Abdomen", "RMN Cabeza", "RMN de Torax", "RMN Osteoarticular", "RMN Raquis"] 
  },
  {
    statisticsLabel: "Click en: Ecografias", 
    text: "Ecografías", 
    items: ["General", "Endocavitaria", "Obstétricas", "Valoración de riesgo cromosómico", "Ecografías Obstétricas", "Ecodoppler color", "Ecocardiograma Doppler"] 
  },
  {
    statisticsLabel: "Click en: Radiologia", 
    text: "Radiología", 
    items: ["Radiología Digital"] 
  },
  {
    statisticsLabel: "Click en: Mamografia", 
    text: "Mamografía", 
    items: ["Mamografía Digital", "Magnificada", "Focalizada",] 
  },
  {
    statisticsLabel: "Click en: Cardiologia", 
    text: "Cardiología", 
    items: ["Eco Stress Cardiaco", "Electrocardiograma", "Prequirúrgicos", "Ergometrías", "Holter", "Mapa"] 
  },
  {
    statisticsLabel: "Click en: Ortopantomografia", 
    text: "Ortopantomografía", 
    items: ["Ortopantomografía", "Condilografía", "Telerradiografía", "Trazados Cefalométricos"] 
  },
  {
    statisticsLabel: "Click en: Punciones", 
    text: "Punciones", 
    items: ["Punciones mamarias", "Punciones Tiroideas"]
   }
]

const Servicios = () => {
  return (
    <section className='py-10 lg:py-20'>
      <h2 className='title'>Nuestros Servicios</h2>

      <div className="relative w-3/4 mb-10 mx-auto md:max-w-5xl lg:max-w-7xl lg:mb-20 select-none">
        <Swiper
          slidesPerView='auto' spaceBetween={48} speed={2000} modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 2
            },
            1280: {
              slidesPerView: 3
            }
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true
          }}
          pagination={{
            el: '.pagination-container',
            bulletClass: 'services-swiper-bullet',
            bulletActiveClass: 'services-swiper-bullet-active'
          }}
          navigation={{
            prevEl: '.prev-arrow',
            nextEl: '.next-arrow',
          }}
        >
          {
            serviciosList.map((item, index) => (
              <SwiperSlide key={index}>
                <ServiceSlide item={item} />
              </SwiperSlide>
            ))
          }
          <div className="pagination-container flex justify-center gap-2 mt-5 w-max m-auto" />

        </Swiper>

        <div className="prev-arrow w-8 h-8 absolute z-10 top-[calc(50%-36px)] -left-10 md:-left-20 rotate-180 hover:cursor-pointer">
          <Image layout='fill' src='/icons/FLECHA_CARRUSEL.svg' alt='' />
        </div>
        <div className="next-arrow w-8 h-8 absolute z-10 top-[calc(50%-36px)] -right-10 md:-right-20 hover:cursor-pointer">
          <Image layout='fill' src='/icons/FLECHA_CARRUSEL.svg' alt='' />
        </div>

      </div>

      <Link href='/servicios' passHref className='orange-button mx-auto'>
        Ir a la sección Servicios
      </Link>

    </section>
  );
}

export default Servicios