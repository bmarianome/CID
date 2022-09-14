import Image from 'next/image'

interface MainImage { 
    src: string,
    fit?: 'contain' | 'cover',
    position?: string,
    alt?: string,
    priority?: boolean
}

const MainImage = ({ image, className }: { image: MainImage, className?: string }) => {
    return (
        <div className={`relative w-full h-[calc(100vh-80px)] ${className}`}>
            <div className="h-full relative bg-white/80 flex flex-col justify-center items-center">
                <div className="w-full h-full absolute -z-10">
                    <Image priority={image.priority} layout='fill' objectFit={image.fit} objectPosition={image.position} src={image.src} alt={image.alt ?? ''} />
                </div>

                {/* DESKTOP */}
                <figure className="hidden lg:inline leading-none">
                    <Image width={1000} height={187} src='/icons/LOGO_CID_COMPLETO.png' alt='CID LOGO COMPLETO' />
                </figure>

                {/* MOBILE */}
                <figure className="lg:hidden w-4/5 leading-none">
                    <Image width={587} height={481} src='/icons/LOGO_CID_COMPLETO_MOBILE.png' alt='CID LOGO COMPLETO' />
                </figure>
                
            </div>
        </div>
    )
}

export default MainImage


