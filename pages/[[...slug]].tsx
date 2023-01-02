/* eslint-disable import/no-relative-packages */
import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { home } from 'utils/routes';
import { Homepage } from 'components/Homepage/Homepage';
import { allPages, Page } from '../.contentlayer/generated';
import {
  Counter,
  FlexBox,
  Heading,
  Text,
  Container,
  GlobalFooter,
  IdentityBar,
  Link,
  Section,
  SectionNav,
  SectionNavItem,
  SidebarNav,
  SidebarNavData,
  Skiplink,
} from '../components';

export async function getStaticProps({ params: { slug = [] } }) {
  const pagePath = `/${slug.join('/')}`;

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
        <IdentityBar />
      </header>
      <FlexBox direction="col" className="lg:su-flex-row su-grow">
        <aside className="su-flex su-items-center su-justify-between lg:su-block su-shrink-0 lg:su-w-300 lg:su-min-w-[30rem] su-basefont-20 su-bg-black">
          <Link
            href={home()}
            className="su-px-20 sm:su-px-30 md:su-px-50 su-rs-py-1 lg:su-px-30 su-leading-none su-no-underline hocus:su-text-white su-inline-block su-w-fit"
          >
            <Text color="white" weight="bold" size={2} className="su-inline-block">Decanter</Text>
            <Text weight="semibold" className="su-text-white/90 su-inline-block su-ml-10 su--top-5 su-relative su-text-16 su-bg-black-80 su-pt-3 su-pb-5 su-px-8 su-rounded">v7</Text>
          </Link>
          <SidebarNav navItems={SidebarNavData} className="su-mr-30 lg:su-mr-0 lg:su-sticky lg:su-top-0" />
        </aside>
        <div className="su-basefont-21 su-w-full su-grow su-ml-0">
          {page.title !== 'Decanter Homepage' ? (
            <Container as="main" width="full" id="main-content">
              <Container as="article" width="full">
                <Heading
                  as="h1"
                  size={3}
                  color="white"
                  className="su-px-20 sm:su-px-30 md:su-px-50 lg:su-px-80 xl:px-100 su-rs-py-3 su-mb-0 su-bg-gradient-to-r su-from-black-90 su-to-plum"
                >
                  {page.title}
                </Heading>
                <Container className="2xl:su-px-80 su-rs-pt-4 su-rs-pb-8 su-ml-0">
                  <MdxBody
                    components={{
                      Counter,
                      Section,
                      SectionNav,
                      SectionNavItem,
                      GlobalFooter,
                      IdentityBar,
                    }}
                  />
                </Container>
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
