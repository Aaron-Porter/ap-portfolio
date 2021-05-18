import { globalStyles } from "stitches.config"

function MyApp({ Component, pageProps }) {
  globalStyles()
  return <Component {...pageProps} />
}

export default MyApp
