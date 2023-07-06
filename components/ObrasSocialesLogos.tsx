import Image from "next/legacy/image";

const obrasSocialesImagenes = [
    { src: '/obras-sociales/medife.svg', w:400, h:101.87, alt: 'LOGO DE MEDIFE' },
    { src: '/obras-sociales/osde.svg', w:400, h:154.72, alt: 'LOGO DE OSDE' },
    { src: '/obras-sociales/prevencion-salud.svg', w:400, h:44.65, alt: 'LOGO DE PREVENCIÓN SALUD' },
    { src: '/obras-sociales/swiss-medical.svg', w:400, h:80, alt: 'LOGO DE SWISS MEDICAL' },
    { src: '/obras-sociales/sancor-salud.svg', w:400, h:129.63, alt: 'LOGO DE SANCOR SALUD' },
    { src: '/obras-sociales/omint.png', w:400, h:112, alt: 'LOGO DE OMINT' },
] 

const ObrasSocialesLogos = () => {
    return (
        <ul className="
            grid grid-cols-2 grid-rows-3 gap-5 justify-center items-center px-5 mb-10 
            lg:grid-cols-3 lg:grid-rows-2 lg:mb-20 lg:max-w-5xl lg:mx-auto lg:gap-10
        ">
            {
                obrasSocialesImagenes.map((image, index) => {
                    return (
                        <li className='flex items-center justify-center h-max w-full' key={index}>
                            <Image width={image.w} height={image.h} src={image.src} alt={image.alt} />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ObrasSocialesLogos