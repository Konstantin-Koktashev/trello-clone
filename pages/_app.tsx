 import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import { Provider as ReactProvider } from 'react-redux'
import { store } from '../redux/store'



function MyApp({ Component, pageProps }: AppProps) {
   return(
      <ReactProvider store={store}>
 <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
    </ReactProvider>
   )  
}
export default MyApp
