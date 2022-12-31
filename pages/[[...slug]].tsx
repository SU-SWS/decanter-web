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
  Section,
  SectionNav,
  SectionNavItem,
  SidebarNav,
  SidebarNavData,
  Skiplink,
} from '../components';
import { Homepage } from 'components/Homepage/Homepage';

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

  return (
    <FlexBox direction="col" className="su-w-full su-min-h-screen">
      <Head>
        <title>{page.title}</title>
      </Head>
      <header>
        <Skiplink />
        <div className='su-identity-bar su-pl-30 su-pt-5 su-pb-1 su-bg-digital-red'>
          <Logo
            isLink
            type="full"
            color="white"
            className='su-text-20 su-leading-none'
          />
        </div>
      </header>
      <FlexBox direction="col" className="lg:su-flex-row su-grow">
        <aside className="su-shrink-0 lg:su-w-300 su-min-w-[30rem] su-basefont-20 su-bg-black">
          <Link href='/'>
            <a className="su-font-bold su-type-3 su-pl-26 su-py-30 su-no-underline su-text-white hocus:su-text-white su-inline-block">Decanter V7</a>
          </Link>
          {/* <VerticalNav menu={menuTree} className="su-sticky su-top-0" activeClasses="!su-text-plum" showNestedLevels={false} /> */}
          <SidebarNav navItems={SidebarNavData} className="lg:su-sticky lg:su-top-0" />
        </aside>
        <div className='su-basefont-21 su-w-full su-grow su-ml-0'>
          {page.title !== 'Decanter Homepage' ? (
            <Container as="main" width="full" id="main-content">
              <Container as="article" width="full">
                <div className='su-mb-8'>
                  <h1 className="su-type-3 su-cc 2xl:su-px-80 su-rs-py-3 su-mb-0 su-bg-black-90 su-text-white">{page.title}</h1>
                  <Container className='2xl:su-px-80 su-rs-pt-4 su-rs-pb-8 su-ml-0'>
                      <MdxBody components={{ Counter, Section, SectionNav, SectionNavItem, GlobalFooter }} />
                  </Container>
                </div>
                {/* <div dangerouslySetInnerHTML={{ __html: page.body.html }} /> */}
              </Container>
            </Container>
          ) : (
            <Homepage />
          )}
        </div>
      </FlexBox>
      <GlobalFooter className="su-w-full" />
    </FlexBox>
  );
};

export default Home;
