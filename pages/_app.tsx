import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react"

const activeChainId = ChainId.Mainnet

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      desiredChainId={activeChainId}
      authConfig={{
        domain: process.env.DOMAIN || '',
        authUrl: "/api/auth",
        loginRedirect: "/",
      }}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp