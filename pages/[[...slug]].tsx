import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { allPages, Page } from '../.contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import {
  Counter,
  FlexBox,
  Container,
  GlobalFooter,
  Logo,
  VerticalNav,
} from '../components';

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
    if (page._raw.flattenedPath.includes('for-designers/')) {
      forDesigners.children.push(
        {
          id: page._id,
          link: (
            <a href={`/${page._raw.flattenedPath}`}>{page.title}</a>
          )
        }
      )
    }
    if (page._raw.flattenedPath.includes('for-developers/')) {
      forDevelopers.children.push(
        {
          id: page._id,
          link: (
            <a href={`/${page._raw.flattenedPath}`}>{page.title}</a>
          )
        }
      )
    }
    if (page._raw.flattenedPath.includes('examples/')) {
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
    <FlexBox direction="col" className="su-w-full su-h-screen">
      <Head>
        <title>{page.title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <div className='su-identity-bar su-pl-30 su-pt-5 su-pb-1 su-bg-digital-red'>
          <Logo
            isLink
            type="full"
            color="white"
            className='su-text-20 su-leading-none'
          />
        </div>
      </header>
      <div className='su-grid su-grid-cols-12 su-grow'>
        <div className='basic-page-left-sidebar su-col-span-12 lg:su-col-span-3 2xl:su-col-span-2 su-basefont-20 su-relative su-bg-black'>
          <Container as="aside" width="full">
            <Link href='/'>
              <a className="su-font-bold su-type-3 su-pl-26 su-py-30 su-no-underline su-text-white hocus:su-text-white su-inline-block">Decanter V7</a>
            </Link>
            <VerticalNav menu={menuTree} className="" activeClasses="" showNestedLevels={false} />
          </Container>
        </div>
        <div className='basic-page-main-content su-col-span-12 lg:su-col-span-9 2xl:su-col-span-10 su-basefont-23 su-ml-0'>
          <Container as="main" width="full">
            <Container as="article" width="full">
              <div className='su-mb-8'>
                <h1 className="su-type-3 su-cc 2xl:su-px-80 su-rs-py-3 su-mb-0 su-bg-black-90 su-text-white">{page.title}</h1>
                <Container className='2xl:su-px-80 su-rs-pt-4 su-rs-pb-8 su-ml-0'>
                  <MdxBody components={{ Counter }} />
                </Container>
              </div>
              {/* <div dangerouslySetInnerHTML={{ __html: page.body.html }} /> */}
            </Container>
          </Container>
        </div>
      </div>
      <GlobalFooter className="su-w-full" />
    </FlexBox>
  );
};

export default Home;
