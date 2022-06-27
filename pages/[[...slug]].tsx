import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { allPages, Page } from '../.contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Counter } from '../components/counter';
import { Container } from 'components/Container';
import { VerticalNav } from 'components/VerticalNav/';

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

  let menuTree = [];
  let about = {};
  let forDesigners: any = {
    link: (
      <Link href={`/for-designers`}>For Designers</Link>
    ),
    children: [],
  }
  let forDevelopers: any = {
    link: (
      <Link href={`/for-developers`}>For Developers</Link>
    ),
    children: [],
  }
  let examples: any = {
    link: (
      <Link href={`/examples`}>Examples</Link>
    ),
    children: [],
  }

  // Giant if condition that checks if the url path contains any of the following.
  // 1. Home
  // 2. About
  // 3. For Designers
  //     |-> Nested pages
  // 4. For Developers
  //     |-> Nested pages
  // 5. Examples
  // 6. Any additional pages added later/not sorted into the design/dev bucket
  // If it does contain it, then store that <a> into its respect var
  allPages.map((page) => {
    if (page._raw.flattenedPath.includes('about')) {
      about = {
        link: (
          <Link href={`/${page._raw.flattenedPath}`}>{page.title}</Link>
        )
      }
    }
    if (page._raw.flattenedPath.includes('for-designers')) {
      forDesigners.children.push(
        {
          link: (
            <Link href={`/${page._raw.flattenedPath}`}>{page.title}</Link>
          )
        }
      )
    }
    if (page._raw.flattenedPath.includes('for-developers')) {
      forDevelopers.children.push(
        {
          link: (
            <Link href={`/${page._raw.flattenedPath}`}>{page.title}</Link>
          )
        }
      )
    }
    if (page._raw.flattenedPath.includes('examples')) {
      examples.children.push(
        {
          link: (
            <Link href={`/${page._raw.flattenedPath}`}>{page.title}</Link>
          )
        }
      )
    }
  })

  menuTree = [
    about, 
    forDesigners,
    forDevelopers,
    examples
  ]

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
            <Link href='/'>
              <a className="su-font-bold su-type-4 xl:su-type-5 su-no-underline hocus:su-underline">Decanter V7</a>
            </Link>
            <VerticalNav menu={menuTree} className="" activeClasses="" showNestedLevels />
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
