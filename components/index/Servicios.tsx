import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css';
import { useState } from 'react';

const ServiceSlide = ({ text, index }: { text: string, index: number }) => {

    const [active, setActive] = useState(false)
    
    const toggleActive = () => setActive(() => active ? false : true)
    
    return (    
        <div className={`bg-brandOrange py-4 flex flex-col items-center gap-1 w-2/3 m-auto rounded-md`} onClick={toggleActive}>
            <h3 className='font-secondary font-bold text-2xl'>{text}</h3>
            <p className={`font-secondary font-light text-center flex items-center justify-center transition-[height,_opacity] ${active ? 'h-32 opacity-1 delay-[0s,_.1s]' : 'h-0 opacity-0 delay-[.1s,_0s]'}`}>
                { index%2 === 0 ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium in ipsa, qui quisquam aspernatur maiores." : "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            </p>
            <span className='font-main font-light text-lg'>Ver Mas</span>
        </div>
    )
}

const servicios: string[] = ["Ecografías", "Radiología", "Mamografía", "Cardiología", "Ortopantomografía", "Laboratorio",]

const Servicios = () => {
    return (
        <section className='py-10'>
            <h2 className='title'>Nuestros Servicios</h2>

            <div className="relative w-screen mb-10">
                <Swiper
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
                    loop={true}
                    modules={[ Autoplay, Pagination, Navigation ]}
                >
                    {
                        servicios.map((text, index) => (
                            <SwiperSlide key={index}>
                                <ServiceSlide text={text} index={index} />
                            </SwiperSlide>
                        ))
                    }
                    <div className="pagination-container flex justify-center gap-2 mt-5 w-max m-auto" />

                    <div className="prev-arrow w-8 h-8 absolute z-10 top-[calc(50%-36px)] left-4 rotate-180">
                        <Image layout='fill' src='/icons/FLECHA_CARRUSEL.svg' alt='ICONO FLECHA CARRUSEL' />
                    </div>
                    <div className="next-arrow w-8 h-8 absolute z-10 top-[calc(50%-36px)] right-4">
                        <Image layout='fill' src='/icons/FLECHA_CARRUSEL.svg' alt='ICONO FLECHA CARRUSEL' />
                    </div>
                </Swiper>                

            </div>                

            <Link href='/servicios' passHref>
                <a className='bg-brandOrange text-white text-center text-base block w-7/12 py-1 m-auto rounded-md'>Ir a la sección Servicios</a>
            </Link>

        </section>
    )
}

export default Servicios