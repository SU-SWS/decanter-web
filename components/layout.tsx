import Head from 'next/head'
import Link from 'next/link'

const name = '[Your Name]'
export const siteTitle = 'Decanter v7'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
      <div className="su-cc su-identity-bar su-pt-5 su-pb-3 su-bg-cardinal-red">
        <a className="su-logo su-text-white hocus:su-text-white su-text-20 su-leading-none" href="https://www.stanford.edu">Stanford University</a>
      </div>
      <Link href="/">
        <a><h1>{siteTitle}</h1></a>
      </Link>
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
