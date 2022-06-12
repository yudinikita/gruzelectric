import 'styles/fontStyles.css'
import { NextUIProvider } from '@nextui-org/react'
import { darkTheme } from 'styles/theme'
import { globalStyles } from 'styles/globalStyles'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
