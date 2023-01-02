import React from 'react';
import Image from 'next/image';
import { Cta } from 'components/Cta';
import { Heading, Paragraph } from 'components/Typography';
import uiComponents from 'images/ui-components.png';
import * as routes from 'utils/routes';

export const Homepage = () => (
  <div id="main-content" className="su-w-full su-h-full su-basefont-20 su-bg-gradient-to-r su-from-black su-to-plum">
    <section className="su-rs-py-5 su-cc">
      <div className="su-max-w-900 su-mx-auto">
        <Heading as="h1" size={4} color="white">Welcome to the Decanter Style Guide and Pattern Library</Heading>
        <Paragraph variant="intro" className="su-rs-mb-2 su-text-black-10">
          Decanter is a web design and development system for Stanford University.
          It includes a responsive layout system and a browsable collection
          of design patterns that can be used in any Stanford project.
        </Paragraph>
        <Cta variant="primary" href={routes.installation()} icon="arrow-right" animate="right">Use Decanter v7</Cta>
      </div>
    </section>
    <section className="su-rs-pt-5 su-cc">
      <div className="su-max-w-1200 su-mx-auto">
        <div className="su-grid su-grid-gap lg:su-grid-cols-2">
          <Image src={uiComponents} alt="Decanter UI Components" />
          <div className="">
            <Heading as="h2" size={3} color="white">Get Started</Heading>
            <Paragraph size={1} className="su-rs-mb-2 su-text-black-10">
              Learn about how to use Decanter components with our onboarding guides, tailored to designers or developers.
            </Paragraph>
            <Cta variant="action" href={routes.installation()} icon="arrow-right" animate="right" className="su-block su-w-fit">
              View developer guide
            </Cta>
            <Cta variant="action" href={routes.figma()} icon="arrow-right" animate="right" className="su-block su-w-fit su-rs-mt-0">
              View designer guide
            </Cta>
          </div>
        </div>
      </div>
    </section>
    <section className="su-bg-cool-grey">
      <div className="su-rs-pt-5 su-rs-pb-6 su-rs-mt-8 su-cc">
        <div className="su-max-w-900 su-mx-auto">
          <Heading as="h2" color="white" size={3}>Who should use Decanter?</Heading>
          <Paragraph size={1} className="su-rs-mb-2 su-text-black-10">
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
