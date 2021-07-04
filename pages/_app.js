import '../styles/globals.css'
import '../components/Navbar/navbar.scss'
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from '../public/theme'
import { I18nextProvider } from "react-i18next"
import i18n from '../utils/i18n';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </ThemeProvider>
  )
}

export default MyApp
