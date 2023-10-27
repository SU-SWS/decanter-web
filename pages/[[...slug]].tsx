/* eslint-disable import/no-relative-packages */
import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { home } from 'utils/routes';
import { Homepage } from 'components/Homepage/Homepage';
import { allPages, type Page } from '../.contentlayer/generated';
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
    <FlexBox direction="col" className="w-full min-h-screen">
      <Head>
        <title>{page.title}</title>
      </Head>
      <header>
        <Skiplink />
        <IdentityBar className="bg-digital-red" />
      </header>
      <FlexBox direction="col" className="lg:flex-row grow relative">
        <aside className="flex items-center justify-between lg:block shrink-0 lg:w-300 lg:min-w-[30rem] basefont-20 bg-black">
          <Link
            href={home()}
            className="px-20 sm:px-30 md:px-50 rs-py-1 lg:px-30 leading-none no-underline hocus:text-white inline-block w-fit"
          >
            <Text color="white" weight="bold" size={2} className="inline-block">Decanter</Text>
            <Text weight="semibold" className="text-white/90 inline-block ml-10 -top-5 relative text-16 bg-black-80 pt-3 pb-5 px-8 rounded">v7</Text>
          </Link>
          <SidebarNav navItems={SidebarNavData} className="mr-30 lg:mr-0 lg:sticky lg:top-0" />
        </aside>
        <div className="basefont-21 w-full grow ml-0">
          {page.title !== 'Decanter Homepage' ? (
            <Container as="main" width="full" id="main-content">
              <Container as="article" width="full">
                <Heading
                  as="h1"
                  size={3}
                  color="white"
                  className="px-20 sm:px-30 md:px-50 lg:px-80 xl:px-100 rs-py-3 mb-0 bg-gradient-to-r from-black-90 to-plum"
                >
                  {page.title}
                </Heading>
                <Container className="2xl:px-100 rs-pt-4 rs-pb-8 ml-0">
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
              </Container>
            </Container>
          ) : (
            <Homepage />
          )}
          <div className="absolute md:right-0 bottom-[-5px]">
            <a href="https://www.netlify.com" className="inline-block">
              <Image src="https://www.netlify.com/img/global/badges/netlify-dark.svg" height={50} width={114} alt="Hosting By Netlify" />
            </a>
          </div>
        </div>
      </FlexBox>
      <GlobalFooter className="w-full bg-digital-red" />
    </FlexBox>
  );
};

export default Home;
