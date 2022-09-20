import type { NextPage } from 'next'
import Divisor from 'components/Divisor'
import { Footer } from 'components/Layout'

const NotFound: NextPage = () => {
    return (
        <>
            <h2 className='title mt-20 lg:mt-40'>Página no encontrada</h2>
            <Divisor />
            <Footer media map footer />
        </>
    )
}

export default NotFound
