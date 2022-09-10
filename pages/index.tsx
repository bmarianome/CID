import type { NextPage } from 'next'
import MainSlider from 'components/index/MainSlider'
import Servicios from 'components/index/Servicios'
import ObrasSociales from 'components/index/ObrasSociales'
import Divisor from 'components/Divisor'
import Image from 'next/image'
import Estudios from 'components/index/Estudios'
import { Footer } from 'components/Layout'
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Centro de Imágenes</title>
                <meta name="description" content="CID, primer servicio de imágenes médicas totalmente digital de las Sierras Chicas." />     
            </Head>
            <main>
                <MainSlider />
                <Servicios />
                <Divisor />
                <ObrasSociales />
                <Estudios />
            </main>
            <Footer media map footer />
        </>
    )
}

export default Home
