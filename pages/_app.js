import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import * as gtag from '../utils/gtag';
import '../public/styles/globals.css'
import ThemeProvider from '../public/theme'
import { I18nextProvider } from "react-i18next"
import i18n from '../utils/i18n';
import '../public/styles/navbar.css';
import '../public/styles/index.css';
import '../public/styles/footer.css';
import '../public/styles/base.css';
import '../public/styles/index.scss'

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
        <meta name="description" content="UNLIMITED ACCESS TO GLOBAL MARKETS DEUS Finance Evolution is a marketplace of decentralized financial services,
          where we provide the infrastructure for others to build financial instruments,
          such as synthetic stock trading platforms, options, and futures trading." />
        <meta data-react-helmet="true" property="og:image" content="https://wiki.deus.finance/img/deus.png" />
        <meta name="keywords" content="deus,dea" />
        <meta name="author" content="deus finance" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="imgs/favicon.ico" />
        <link href='https://fonts.googleapis.com/css?family=Roboto:500' rel='stylesheet'></link>
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
