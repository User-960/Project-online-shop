import { store } from '@/app/store/store';
import { Provider } from 'react-redux';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className='px-5 py-7'>
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default App;
