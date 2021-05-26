import '../styles/globals.css'
import type {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}

// eslint-disable-next-line
export default MyApp;
