import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
import { DefaultSeo } from "next-seo";
import Script from "next/script";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    const getCategories = () =>{
      store.dispatch({type:"LOAD_CATEGORIES",payload:["Dreamworks","Deportes"]})
    }

    getCategories()
  })

  return (
    <Provider store={store}>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-TEEZ802RPY"
      />
      <Script strategy="afterInteractive" id="google-analytics">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TEEZ802RPY')
  `}
      </Script>
      <DefaultSeo
        additionalMetaTags={[
          {
            name: "google-site-verification",
            content: "k8T0bep__3ADBGgZIZB6NJOQu3m-NwmLgdHsASvK10U",
          },
        ]}
      />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
