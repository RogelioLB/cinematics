import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
import { DefaultSeo } from "next-seo";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <DefaultSeo
        additionalMetaTags={[
          {
            name: "google-site-verification",
            content: "k8T0bep__3ADBGgZIZB6NJOQu3m-NwmLgdHsASvK10U",
          },
        ]}
      />
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-TEEZ802RPY"
      ></Script>
      <Script strategy="lazyOnload" id="google-analitycs">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TEEZ802RPY')
  `}
      </Script>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
