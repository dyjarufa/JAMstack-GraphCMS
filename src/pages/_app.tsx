import { Provider } from 'urql'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { client, ssrCache } from '../lib/urql'

import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  // reaproveitar o cache que vem do server side da aplicação
  // e aproveitar os dados no client side
  if(pageProps.urlState) {
    ssrCache.restoreData(pageProps.urlState)
  }

  return (
    <Provider value={client}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}

export default MyApp
