import type { NextPage } from 'next'
import Head from 'next/head'
import Divisor from 'components/Divisor'
import { Footer } from 'components/Layout'

const ServerError: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hubo un error</title>
      </Head>
      <h2 className='title mt-20 lg:mt-40'>Hubo un error interno</h2>
      <Divisor />
      <Footer media map footer />
    </>
  )
}

export default ServerError