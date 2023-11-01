import React from 'react';
import Image from 'next/image';
import { Cta } from 'components/Cta';
import { Heading, Paragraph } from 'components/Typography';
import uiComponents from 'images/ui-components.png';
import * as routes from 'utils/routes';

export const Homepage = () => (
  <div id="main-content" className="w-full h-full basefont-20 bg-gradient-to-r from-black to-plum">
    <section className="rs-py-5 cc">
      <div className="max-w-900 mx-auto">
        <Heading as="h1" size={4} color="white">Welcome to the Decanter Style Guide and Pattern Library</Heading>
        <Paragraph variant="intro" className="text-black-10">
          Decanter is a web design and development system for Stanford University.
          It includes a responsive layout system and a browsable collection
          of design patterns that can be used in any Stanford project.
        </Paragraph>
        <Cta variant="primary" href={routes.installation()} icon="arrow-right" animate="right" className="rs-mb-2 inline-block">Use Decanter v7</Cta>
        <Paragraph variant="subheading" className="rs-mb-1 text-black-10">
          Looking for Decanter v6?
          <br />
        </Paragraph>
        <Cta variant="primary" href="https://decanter6.stanford.edu" icon="arrow-right" animate="right">See Decanter v6</Cta>
      </div>
    </section>
    <section className="rs-pt-5 cc">
      <div className="max-w-1200 mx-auto">
        <div className="grid grid-gap lg:grid-cols-2">
          <Image src={uiComponents} alt="Decanter UI Components" />
          <div className="">
            <Heading as="h2" size={3} color="white">Get Started</Heading>
            <Paragraph size={1} className="rs-mb-2 text-black-10">
              Learn about how to use Decanter components with our onboarding guides,
              tailored to designers or developers.
            </Paragraph>
            <Cta variant="action" href={routes.installation()} icon="arrow-right" animate="right" className="block w-fit">
              View developer guide
            </Cta>
            <Cta variant="action" href={routes.figma()} icon="arrow-right" animate="right" className="block w-fit rs-mt-0">
              View designer guide
            </Cta>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-cool-grey">
      <div className="rs-pt-5 rs-pb-6 rs-mt-8 cc">
        <div className="max-w-900 mx-auto">
          <Heading as="h2" color="white" size={3}>Who should use Decanter?</Heading>
          <Paragraph size={1} className="rs-mb-2 text-black-10">
            Decanter is an open source design system and frontend framework,
            intended for use by Stanford University teams and vendors creating websites and other digital products.
          </Paragraph>
          <Cta variant="primary" href={routes.decanterFaq()} icon="arrow-right" animate="right">
            See if Decanter is right for you
          </Cta>
        </div>
      </div>
    </section>
  </div>
);
