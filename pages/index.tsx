import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <nav className="su-vertical-nav su-relative" aria-label="Section Menu">
        <ul
          className="
            su-nav-group su-list-none su-p-0
            children:su-border-t
            children:su-border-solid
            children:su-border-black-20
            children:children:su-text-21
          "
        >
          <li className="su-nav-item su-m-0">
            <Link
              href="/"
            >
              <a className="
                su-group su-no-underline
                hocus:su-underline
                su-border-l-5 su-py-14 su-block su-pl-10 su-transition-all
                hocus:su-text-digital-blue-dark hocus:su-border-digital-blue-dark
                su-border-white
              ">Home</a>
            </Link>
          </li>
          <li className="su-nav-item su-m-0">
            <Link
              href="posts/about"
            >
              <a className="
                su-group su-no-underline
                hocus:su-underline
                su-border-l-5 su-py-14 su-block su-pl-10 su-transition-all
                hocus:su-text-digital-blue-dark hocus:su-border-digital-blue-dark
                su-border-white
              ">About</a>
            </Link>
          </li>
          <li className="su-nav-item su-m-0">
            <Link
              href="posts/why-decanter"
            >
              <a className="
                su-group su-no-underline
                hocus:su-underline
                su-border-l-5 su-py-14 su-block su-pl-10 su-transition-all
                hocus:su-text-digital-blue-dark hocus:su-border-digital-blue-dark
                su-border-white
              ">Why Decanter</a>
            </Link>
          </li>
          <li className="su-nav-item su-m-0">
            <Link
              href="posts/use-decanter"
            >
              <a className="
                su-group su-no-underline
                hocus:su-underline
                su-border-l-5 su-py-14 su-block su-pl-10 su-transition-all
                hocus:su-text-digital-blue-dark hocus:su-border-digital-blue-dark
                su-border-white
              ">Use Decanter</a>
            </Link>
          </li>
        </ul>
      </nav>

      <section>
        <h2>Posts</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
