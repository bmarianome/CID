import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {

    return (
        <>
            <Head>
                <link rel="shortcut icon" type="image/png" href="/favicon.png" />
            </Head> 
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
