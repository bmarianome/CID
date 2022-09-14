import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import 'swiper/css';

const images = [
    '/images/CARRUSEL_1.jpg',
    '/images/CARRUSEL_2.jpg',
    '/images/CARRUSEL_3.jpg',
    '/images/CARRUSEL_4.jpg',
    '/images/CARRUSEL_5.jpg',
]

const SwiperPictures = () => {
    return (
        <div className="relative h-max mb-10 lg:mb-20">
            <Swiper spaceBetween={48} autoplay={{ delay: 1500, disableOnInteraction: false }} modules={[ Autoplay ]}>
                {
                    images.map((image, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="block w-full aspect-[2/1] lg:aspect-[3/1] relative ">
                                    <Image priority={index === 0} layout='fill' objectFit='cover' objectPosition='center' src={image} alt='IMAGEN DE FONDO ECOGRAFÍA' />
                                </div>
                            </SwiperSlide>
                        )
                    })             
                }
            </Swiper>  
        </div>
    )
}

export default SwiperPictures