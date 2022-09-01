import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
    return (
        <div className='flex justify-center my-20'>
            <Image width={280} height={231} src='/icons/CID_ORANGE.svg' alt='LOGO CID' />
        </div>
    )
}

export default Home
