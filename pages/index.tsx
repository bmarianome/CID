import type { NextPage } from 'next'
import MainSlider from 'components/index/MainSlider'
import Servicios from 'components/index/Servicios'
import ObrasSociales from 'components/index/ObrasSociales'
import Divisor from 'components/Divisor'
import Image from 'next/image'
import Estudios from 'components/index/Estudios'
import { Footer } from 'components/Layout'

const Home: NextPage = () => {
    return (
        <>
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
