import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import Head from 'next/head'

function Cid({ Component, pageProps }: AppProps) {

    return (
        <>
            <Head>
                <title>Centro de Imágenes</title>
                <link rel="shortcut icon" type="image/svg+xml" href="/favicon.svg" />
            </Head> 
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default Cid
