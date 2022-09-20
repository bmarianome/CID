import type { NextPage } from 'next'
import Divisor from 'components/Divisor'
import { Footer } from 'components/Layout'

const ServerError: NextPage = () => {
    return (
        <>
            <h2 className='title mt-20 lg:mt-40'>Hubo un error interno</h2>
            <Divisor />
            <Footer media map footer />
        </>
    )
}

export default ServerError