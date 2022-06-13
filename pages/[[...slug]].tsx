import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { allPages, Page } from '../.contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Counter } from '../components/counter';
import { Container } from 'components/Container';

export async function getStaticProps({ params: { slug = [] } }) {
  const pagePath = '/' + slug.join('/');

  return {
    props: {
      page: allPages.find((p) => p.url === pagePath),
    },
  };
}

export async function getStaticPaths() {
  const paths = allPages.map((p) => p.url);

  return { paths, fallback: false };
}

const Home: NextPage<{ page: Page }> = ({ page }) => {
  const MdxBody = useMDXComponent(page.body.code);
  console.log(allPages);

  return (
    <Container width='full'>
      <Head>
        <title>{page.title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <div className='su-cc su-identity-bar su-pt-5 su-pb-3 su-bg-cardinal-red'>
          <a
            className='su-logo su-text-white hocus:su-text-white su-text-20 su-leading-none'
            href='https://www.stanford.edu'
          >
            Stanford University
          </a>
        </div>
      </header>
      <div className='su-grid su-grid-gap su-grid-cols-12 su-cc su-rs-pb-8 su-rs-pt-2'>
        <div className='basic-page-left-sidebar su-col-span-12 lg:su-col-span-4 2xl:su-col-span-3 su-basefont-21 su-relative'>
          <Container as="aside" width="full" className='su-absolute su-top-0 su-left-0 su-sticky'>
            {/* <ul>
              {allPages.map((page) => (
                <a key={page._id} href={`/${page._raw.flattenedPath}`}>{page.title} </a>
              ))}
            </ul> */}
            <Link href='/'>
              <a className="su-font-bold su-type-4 xl:su-type-5 su-no-underline hocus:su-underline">Decanter V7</a>
            </Link>
            <nav
              className='su-vertical-nav su-relative'
              aria-label='Section Menu'
            >
              <ul
                className='
                  su-nav-group su-list-none su-p-0
                  children:su-border-t
                  children:su-border-solid
                  children:su-border-black-20
                  children:children:su-text-21
                '
              >
                {allPages.map((page) => (
                  <li className='su-nav-item su-m-0' key={page._id}>
                    <a
                      href={`/${page._raw.flattenedPath}`}
                      className='
                        su-group su-no-underline
                        hocus:su-underline
                        su-border-l-5 su-py-14 su-block su-pl-10 su-transition-all
                        hocus:su-text-digital-blue-dark hocus:su-border-digital-blue-dark
                        su-border-white
                      '
                    >
                      {page.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Container>
        </div>
        <div className='basic-page-main-content su-col-span-12 lg:su-col-span-8 2xl:su-col-start-5 su-basefont-23 su-ml-0'>
          <Container as="main" width="full">
            <Container as="article" width="full">
              <div className='su-mb-8'>
                <h1 className="su-type-4 xl:su-type-5">{page.title}</h1>
                <MdxBody components={{ Counter }} />
              </div>
              {/* <div dangerouslySetInnerHTML={{ __html: page.body.html }} /> */}
            </Container>
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default Home;
