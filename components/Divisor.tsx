import Image from "next/legacy/image";

const Divisor = ({ styles }: { styles?: string }) => {
    return (
        <picture className={styles}>
            <Image layout='responsive' width={1924} height={104} src='/icons/LINEA_DIVISORIA.svg' alt='' />
        </picture>
    )
}

export default Divisor