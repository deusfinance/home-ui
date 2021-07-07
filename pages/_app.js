import '../styles/globals.css'
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from '../public/theme'
import { I18nextProvider } from "react-i18next"
import i18n from '../utils/i18n';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../utils/gtag';
import '../public/styles/navbar.css';
import '../public/styles/index.css';
import '../public/styles/footer.css';
import '../public/styles/base.css';
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
    <Head>
        <title>DEUS finance</title>
        <meta name="description" content="DEUS FINANCE UNLIMITED ACCESS TO GLOBAL MARKETS transpose any digitally verifiable asset securely onto the blockchain. DEUS lets you trade real-world assets and derivatives, like stocks and commodities, directly on the Ethereum blockchain." />
        <meta data-react-helmet="true" property="og:image" content="https://wiki.deus.finance/img/deus.png" />
        <meta name="keywords" content="deus,dea" />
        <meta name="author" content="deus finance" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="imgs/favicon.ico" />
    </Head>

    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </ThemeProvider>
    </>
  )
}

export default MyApp
