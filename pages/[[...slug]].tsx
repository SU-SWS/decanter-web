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
      <a href={`/for-designers`}>For Designers</a>
    ),
    children: [],
  }
  let forDevelopers: any = {
    link: (
      <a href={`/for-developers`}>For Developers</a>
    ),
    children: [],
  }
  let examples: any = {
    link: (
      <a href={`/examples`}>Examples</a>
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
        id: page._id,
        link: (
          <a href={`/${page._raw.flattenedPath}`}>{page.title}</a>
        )
      }
    }
    if (page._raw.flattenedPath.includes('for-designers')) {
      forDesigners.children.push(
        {
          id: page._id,
          link: (
            <a href={`/${page._raw.flattenedPath}`}>{page.title}</a>
          )
        }
      )
    }
    if (page._raw.flattenedPath.includes('for-developers')) {
      forDevelopers.children.push(
        {
          id: page._id,
          link: (
            <a href={`/${page._raw.flattenedPath}`}>{page.title}</a>
          )
        }
      )
    }
    if (page._raw.flattenedPath.includes('examples')) {
      examples.children.push(
        {
          id: page._id,
          link: (
            <a href={`/${page._raw.flattenedPath}`}>{page.title}</a>
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
        <div className='su-identity-bar su-pt-5 su-pb-3 su-pl-26 su-bg-digital-red'>
          <a
            className='su-logo su-text-white hocus:su-text-white su-text-20 su-leading-none'
            href='https://www.stanford.edu'
          >
            Stanford University
          </a>
        </div>
      </header>
      <div className='su-grid su-grid-cols-12'>
        <div className='basic-page-left-sidebar su-col-span-12 lg:su-col-span-3 su-basefont-20 su-relative su-bg-black'>
          <Container as="aside" width="full" >
            <Link href='/'>
              <a className="su-font-bold su-type-3 xl:su-type-3 su-pl-26 su-py-20 su-no-underline su-text-white hocus:su-text-white">Decanter V7</a>
            </Link>
            <VerticalNav menu={menuTree} className="" activeClasses="" showNestedLevels={false} />
          </Container>
        </div>
        <div className='basic-page-main-content su-col-span-12 lg:su-col-span-9 su-basefont-23 su-ml-0'>
          <Container as="main" width="full">
            <Container as="article" width="full">
              <div className='su-mb-8'>
                <h1 className="su-type-4 xl:su-type-5 su-cc 2xl:su-px-80 su-py-30 su-mb-0 su-bg-black-90 su-text-white">{page.title}</h1>
                <div className='su-cc 2xl:su-px-80 su-pt-50 md:su-pt-58 2xl:su-pt-61 su-pb-114 md:su-pb-126 2xl:su-pb-133'>
                  <MdxBody components={{ Counter }} />
                </div>
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
