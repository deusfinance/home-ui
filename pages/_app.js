import '../styles/globals.css'
import '../components/Navbar/navbar.scss'
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
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </ThemeProvider>
  )
}

export default MyApp
