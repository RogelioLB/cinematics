import '../styles/globals.css';
import { Provider } from 'react-redux';
import { DefaultSeo } from 'next-seo';
import Script from 'next/script';
import { useEffect } from 'react';
import axios from 'axios';
import store from '../store';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const getCategories = async () => {
      const res = await axios('https://strapi-production-9ea0.up.railway.app/api/categories');
      const { data } = res;
      const categories = data.data;
      store.dispatch({ type: 'LOAD_CATEGORIES', payload: categories });
    };

    getCategories();
  });

  return (
    <Provider store={store}>
      <DefaultSeo
        additionalMetaTags={[
          {
            name: 'google-site-verification',
            content: 'k8T0bep__3ADBGgZIZB6NJOQu3m-NwmLgdHsASvK10U',
          },
        ]}
      />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
