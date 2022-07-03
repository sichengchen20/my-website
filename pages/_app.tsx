import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react';
import 'aos/dist/aos.css'
import aos from 'aos'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    aos.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <>
      <Head>
        <title>Sicheng Chen</title>
        <meta name="description" content="Sicheng's personal website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
