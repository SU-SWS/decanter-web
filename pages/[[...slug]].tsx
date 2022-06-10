import type { NextPage } from 'next'
import Head from 'next/head'
import { allPages, Page } from '../.contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Counter } from '../components/counter';

export async function getStaticProps({ params: { slug = [] } }) {
  const pagePath = '/' + slug.join('/');

  return {
    props: {
      page: allPages.find((p) => p.url === pagePath),
    }
  }
}

export async function getStaticPaths() {
  const paths = allPages.map((p) => p.url);
  
  return { paths, fallback: false  };
}

const Home: NextPage<{ page: Page }> = ({ page }) => {
  const MdxBody = useMDXComponent(page.body.code);

  return (
    <div>
      <Head>
        <title>{page.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <article className="su-max-w-xl su-mx-auto py-8">
          <div className="su-text-center su-mb-8">
            <h1>{page.title}</h1>
            <MdxBody components={{ Counter }} />
          </div>
          {/* <div dangerouslySetInnerHTML={{ __html: page.body.html }} /> */}
      </article>
      </main>

      <aside>
        <ul>
          {allPages.map((page) => (
            <a key={page._id} href={`/${page._raw.flattenedPath}`}>{page.title} </a>
          ))}
        </ul>
      </aside>
    </div>
  )
}

export default Home
