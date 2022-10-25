import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import Head from 'next/head'
import PlausibleProvider from 'next-plausible'
import { Analytics } from '@vercel/analytics/react';

function Cid({ Component, pageProps }: AppProps) {
    
    return (
        <>
            <PlausibleProvider 
                customDomain='https://plausible.bmariano.me' 
                domain="cidvillaallende.com.ar" 
                trackOutboundLinks={true} selfHosted={true}
            >

                <Head>
                    <link rel="shortcut icon" type="image/png" href="/favicon.png" />
                    <link rel="apple-touch-icon" type='image/png' href="/favicon.png" />
                    <meta name="theme-color" content="#EF6A34" />

                    <meta content="Centro de Imágenes" property="og:title" />
                    <meta property="og:description" content="CID, primer servicio de imágenes médicas totalmente digital de las Sierras Chicas." />
                    <meta content="https://www.cidvillaallende.com.ar/favicon.png" property="og:image" />
                    <meta content="https://www.cidvillaallende.com.ar/" property="og:url" />
                    <meta content="website" property="og:type" />

                    <link rel="manifest" href="/manifest.json" />
                    <meta name="google-site-verification" content="y9cPai12p28lTh7GrjVuyJWfG-1T7bfYyyopM64yKvo" />
                </Head> 
                <Layout>
                    <Component {...pageProps} />
                    <Analytics />
                </Layout>
            </PlausibleProvider>
        </>
    )
}

export default Cid
