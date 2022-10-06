import type { AppProps } from "next/app"
import styled from "styled-components"
import React from "react"
import Head from "next/head"
import { RecoilRoot } from "recoil"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>OPZZ</title>
      </Head>
      <style jsx global>
        {`
          p,
          button {
            margin: 0px;
            border: 0;
          }
        `}
      </style>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default MyApp
