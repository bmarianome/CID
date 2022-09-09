import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import { useEffect, useState } from 'react';

const ServiceSlide = ({ text, index }: { text: string, index: number }) => {

    const [active, setActive] = useState(false)
    
    const swiperSlide = useSwiperSlide()

    useEffect(() => {
        setActive(false)
    }, [swiperSlide])
    
    return (    
        <div className={`bg-brandOrange py-4 flex flex-col items-center gap-1 w-full m-auto max-w-sm rounded-md hover:cursor-pointer`} onClick={() => setActive(() => active ? false : true)}>

            <h3 className='
                font-secondary font-bold text-2xl
                lg:text-3xl
            '>{text}</h3>

            <p className={`
                font-din font-light text-lg text-center flex items-center justify-center px-4 transition-[height,_opacity] 
                ${active ? 'h-32 opacity-1 delay-[0s,_.1s]' : 'h-0 opacity-0 delay-[.1s,_0s]'}
            `}>
                { index%2 === 0 ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium in ipsa, qui quisquam aspernatur maiores." : "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            </p>
            <span className='font-din font-light text-lg lg:text-xl'>Ver Mas</span>
        </div>
    )
}

export const serviciosList: string[] = ["Ecografías", "Radiología", "Mamografía", "Cardiología", "Ortopantomografía", "Laboratorio",]

const Servicios = () => {
    return (
        <section className='py-10 lg:py-20'>
            <h2 className='title'>Nuestros Servicios</h2>

            <div className="relative w-3/4 mb-10 mx-auto md:max-w-5xl lg:max-w-7xl lg:mb-20 select-none">
                <Swiper
                    slidesPerView='auto'
                    spaceBetween={48}
                    breakpoints={{
                        768: {
                            slidesPerView: 2
                        },
                        1280: {
                            slidesPerView: 3
                        }
                    }}
                    autoplay={{
                        delay: 2000,
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
                    modules={[ Autoplay, Pagination, Navigation ]}
                >
                    {
                        serviciosList.map((text, index) => (
                            <SwiperSlide key={index}>
                                <ServiceSlide text={text} index={index} />
                            </SwiperSlide>
                        ))
                    }
                    <div className="pagination-container flex justify-center gap-2 mt-5 w-max m-auto" />

                </Swiper>     

                <div className="prev-arrow w-8 h-8 absolute z-10 top-[calc(50%-36px)] -left-10 md:-left-20 rotate-180 hover:cursor-pointer">
                    <Image layout='fill' src='/icons/FLECHA_CARRUSEL.svg' alt='ICONO FLECHA CARRUSEL' />
                </div>
                <div className="next-arrow w-8 h-8 absolute z-10 top-[calc(50%-36px)] -right-10 md:-right-20 hover:cursor-pointer">
                    <Image layout='fill' src='/icons/FLECHA_CARRUSEL.svg' alt='ICONO FLECHA CARRUSEL' />
                </div>

            </div>                

            <Link href='/servicios' passHref>
                <a className='orange-button mx-auto'>Ir a la sección Servicios</a>
            </Link>

        </section>
    )
}

export default Servicios