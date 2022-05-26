import { Provider } from 'urql'
import { client } from '../lib/urql'

import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
