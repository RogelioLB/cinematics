import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
import { DefaultSeo } from "next-seo";

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
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
