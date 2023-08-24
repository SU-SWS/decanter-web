import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script src="/dist/js/scripts.js" strategy='afterInteractive' defer />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}