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
        <div className='basic-page-left-sidebar su-col-span-12 lg:su-col-span-3 2xl:su-col-span-2 su-basefont-20 su-relative su-bg-black'>
          <Container as="aside" width="full" >
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
                <Container className='2xl:su-px-80 su-rs-pt-4 su-rs-pb-8'>
                  <MdxBody components={{ Counter }} />
                </Container>
              </div>
              {/* <div dangerouslySetInnerHTML={{ __html: page.body.html }} /> */}
            </Container>
          </Container>
        </div>
      </div>
      <section className="su-global-footer su-basefont-21 su-bg-digital-red su-rs-py-0 su-text-white su-link-white">
        <div className="su-cc su-flex su-flex-col lg:su-flex-row" title="Common Stanford resources">
          <div className="su-text-center su-mt-5 su-mb-9">
            <a className="su-logo su-type-3 hocus:su-text-white" href="https://www.stanford.edu">Stanford<br/>University</a>
          </div>
          <div className="lg:su-pl-45 xl:su-pl-50 su-text-left sm:su-text-center lg:su-text-left su-flex-grow">
            <nav aria-label="global footer menu" className="su-flex su-flex-row sm:su-flex-col su-justify-center sm:su-items-center lg:su-items-start su-mb-10 su-link-no-underline">
              <ul className="su-list-unstyled su-mb-10 sm:su-mb-4 su-mr-19 sm:su-mr-0 su-p-0 su-text-15 md:su-text-17 2xl:su-text-18 su-flex su-flex-col sm:su-flex-row">
                <li className="sm:su-mr-10 md:su-mr-20 lg:su-mr-27">
                  <a href="https://www.stanford.edu" className="hover:su-underline focus:su-underline">
                    Stanford Home
                    <span className="su-sr-only">(link is external)</span>
                  </a>
                </li>
                <li className="sm:su-mr-10 md:su-mr-20 lg:su-mr-27">
                  <a href="https://visit.stanford.edu/plan/" className="hover:su-underline focus:su-underline">
                    Maps &amp; Directions
                    <span className="su-sr-only">(link is external)</span>
                  </a>
                </li>
                <li className="sm:su-mr-10 md:su-mr-20 lg:su-mr-27">
                  <a href="https://www.stanford.edu/search/" className="hover:su-underline focus:su-underline">
                    Search Stanford
                    <span className="su-sr-only">(link is external)</span>
                  </a>
                </li>
                <li>
                  <a href="https://emergency.stanford.edu" className="hover:su-underline focus:su-underline">
                    Emergency Info
                    <span className="su-sr-only">(link is external)</span>
                  </a>
                </li>
              </ul>
              <ul className="su-list-unstyled su-mb-10 sm:su-mb-0 su-ml-19 sm:su-ml-0 su-p-0 su-text-15 sm:su-text-14 md:su-text-15 xl:su-text-16 su-flex su-flex-col sm:su-flex-row sm:su-link-regular">
                <li className="sm:su-mr-10 md:su-mr-20 lg:su-mr-27">
                  <a href="https://www.stanford.edu/site/terms/" title="Terms of use for sites" className="hover:su-underline focus:su-underline">
                    Terms of Use
                    <span className="su-sr-only">(link is external)</span>
                  </a>
                </li>
                <li className="sm:su-mr-10 md:su-mr-20 lg:su-mr-27">
                  <a href="https://www.stanford.edu/site/privacy/" title="Privacy and cookie policy" className="hover:su-underline focus:su-underline">
                    Privacy
                    <span className="su-sr-only">(link is external)</span>
                  </a>
                </li>
                <li className="sm:su-mr-10 md:su-mr-20 lg:su-mr-27">
                  <a href="https://uit.stanford.edu/security/copyright-infringement" title="Report alleged copyright infringement" className="hover:su-underline focus:su-underline">
                    Copyright
                    <span className="su-sr-only">(link is external)</span>
                  </a>
                </li>
                <li className="sm:su-mr-10 md:su-mr-20 lg:su-mr-27">
                  <a href="https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4" title="Ownership and use of Stanford trademarks and images" className="hover:su-underline focus:su-underline">
                    Trademarks
                    <span className="su-sr-only">(link is external)</span>
                  </a>
                </li>
                <li className="sm:su-mr-10 md:su-mr-20 lg:su-mr-27">
                  <a href="https://studentservices.stanford.edu/more-resources/student-policies/non-academic/non-discrimination" title="Non-discrimination policy" className="hover:su-underline focus:su-underline">
                    Non-Discrimination
                    <span className="su-sr-only">(link is external)</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.stanford.edu/site/accessibility" title="Report web accessibility issues" className="hover:su-underline focus:su-underline">
                    Accessibility
                    <span className="su-sr-only">(link is external)</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="su-text-13 sm:su-text-14 su-text-center lg:su-text-left">
              <span className="su-whitespace-no-wrap">© Stanford University.</span>
              <span className="su-whitespace-no-wrap">&nbsp; Stanford, California 94305.</span>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Home;
