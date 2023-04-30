import type { NextPage } from 'next'
import Head from 'next/head'
import Divisor from 'components/Divisor'
import { Footer } from 'components/Layout'

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Página no encontrada</title>
      </Head>
      <h2 className='title mt-20 lg:mt-40'>Página no encontrada</h2>
      <Divisor />
      <Footer media map footer />
    </>
  )
}

export default NotFound
