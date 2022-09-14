import Image from "next/image";
import MainImage from "./MainImage";
import { Autoplay } from "swiper";
import { Swiper, useSwiper } from 'swiper/react';
import "swiper/css/pagination";
import 'swiper/css';
import { ReactNode } from "react";

const LeftArrow = () => {

    const swiper = useSwiper()
    
    return (
        <button className="absolute top-[calc(50%)] z-10 left-[1rem] lg:left-[4rem]">
            <figure onClick={() => swiper.slidePrev()} className="relative w-6 h-6 lg:w-10 lg:h-10 hover:cursor-pointer rotate-180">
                <Image layout='fill' src='/icons/FLECHA_CARRUSEL.svg' alt='ARROW ICON' />
            </figure>
        </button>
    )
}

const RightArrow = () => {

    const swiper = useSwiper()
    
    return (
        <button className="absolute top-[calc(50%)] z-10 right-[1rem] lg:right-[4rem]">
            <figure onClick={() => swiper.slideNext()} className="relative w-6 h-6 lg:w-10 lg:h-10 hover:cursor-pointer">
                <Image layout='fill' src='/icons/FLECHA_CARRUSEL.svg' alt='ARROW ICON' />
            </figure>
        </button>
    )
}

const MainSwiper = ({ children, className }: { children: ReactNode, className?: string }) => {

    return (
        <div className={className}>
            <Swiper
                autoplay={{ delay: 2000, disableOnInteraction: true }} modules={[ Autoplay ]}
                speed={500}
            >
                {children}            

                <LeftArrow />
                <RightArrow />
            </Swiper>  
        </div>
    )
}

export default MainSwiper