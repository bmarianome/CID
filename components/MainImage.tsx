import Image from "next/legacy/image";

interface MainImage { 
    src: string,
    fit?: 'contain' | 'cover',
    position?: string,
    alt?: string,
    priority?: boolean
}

const MainImage = ({ image, className, items }: { image: MainImage, className?: string, items?: boolean }) => {
    return (
        <div className={`h-full ${className}`}>
            <div className={`h-full relative flex flex-col justify-center items-center ${ items ? "bg-white/80" : "" }`}>
                <div className="w-full h-full absolute -z-10">
                    <Image priority={image.priority} layout='fill' objectFit={image.fit} objectPosition={image.position} src={image.src} alt={image.alt ?? ''} />
                </div>

                {
                    items ?
                    <>
                        {/* DESKTOP */}
                        <figure className="hidden lg:inline leading-none">
                            <Image width={981} height={217} src='/icons/LOGO_CID_COMPLETO.png' alt='' />
                        </figure>

                        {/* MOBILE */}
                        <figure className="lg:hidden w-4/5 leading-none">
                            <Image width={544} height={457} src='/icons/LOGO_CID_COMPLETO_MOBILE.png' alt='' />
                        </figure>
                    </>
                    : null
                }
                
            </div>
        </div>
    )
}

export default MainImage


