import type { AppProps } from "next/app"
import React from "react"
import Head from "next/head"
import { RecoilRoot } from "recoil"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>OPZZ</title>
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default MyApp
