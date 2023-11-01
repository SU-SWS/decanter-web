import React, { HTMLAttributes } from 'react';
import { dcnb, ClassValue } from 'cnbuilder';
import { Logo } from '../Logo';
import { SrOnlyText } from '../SrOnlyText';
import { Container } from '../Container/Container';
import { FlexBox } from '../FlexBox/FlexBox';

type GlobalFooterProps = {
  className?: ClassValue;
};

type DCNBAttributes = Omit<HTMLAttributes<HTMLDivElement>, 'className'>;

export const GlobalFooter = ({ className, ...props }: GlobalFooterProps & DCNBAttributes) => (
  <Container
    as="footer"
    className={dcnb('global-footer basefont-20 rs-py-1 text-white', { 'bg-digital-red': !className }, className)}
    width="site"
    {...props}
  >
    <FlexBox direction="col" className="lg:flex-row" title="Common Stanford resources">
      <div className="text-center mt-5 mb-9">
        <Logo isLink className="type-3" type="stacked" color="white" />
      </div>
      <div className="lg:pl-45 xl:pl-50 text-left sm:text-center lg:text-left grow">
        <nav
          aria-label="global footer menu"
          className="flex flex-row sm:flex-col justify-center sm:items-center lg:items-start mb-10"
        >
          <ul className="list-unstyled mb-10 sm:mb-4 mr-19 sm:mr-0 p-0 text-15 md:text-17 2xl:text-18 flex flex-col sm:flex-row">
            <li className="sm:mr-10 md:mr-20 lg:mr-27">
              <a
                href="https://www.stanford.edu"
                className="text-white no-underline hocus:underline hocus:text-white"
              >
                Stanford Home
                <SrOnlyText />
              </a>
            </li>
            <li className="sm:mr-10 md:mr-20 lg:mr-27">
              <a
                href="https://visit.stanford.edu/plan/"
                className="text-white no-underline hocus:underline hocus:text-white"
              >
                Maps &amp; Directions
                <SrOnlyText />
              </a>
            </li>
            <li className="sm:mr-10 md:mr-20 lg:mr-27">
              <a
                href="https://www.stanford.edu/search/"
                className="text-white no-underline hocus:underline hocus:text-white"
              >
                Search Stanford
                <SrOnlyText />
              </a>
            </li>
            <li>
              <a
                href="https://emergency.stanford.edu"
                className="text-white no-underline hocus:underline hocus:text-white"
              >
                Emergency Info
                <SrOnlyText />
              </a>
            </li>
          </ul>
          <ul className="list-unstyled mb-10 sm:mb-0 ml-19 sm:ml-0 p-0 text-15 sm:text-14 md:text-15 xl:text-16 flex flex-col sm:flex-row sm:link-regular">
            <li className="sm:mr-10 md:mr-20 lg:mr-27">
              <a
                href="https://www.stanford.edu/site/terms/"
                title="Terms of use for sites"
                className="text-white no-underline hocus:underline hocus:text-white"
              >
                Terms of Use
                <SrOnlyText />
              </a>
            </li>
            <li className="sm:mr-10 md:mr-20 lg:mr-27">
              <a
                href="https://www.stanford.edu/site/privacy/"
                title="Privacy and cookie policy"
                className="text-white no-underline hocus:underline hocus:text-white"
              >
                Privacy
                <SrOnlyText />
              </a>
            </li>
            <li className="sm:mr-10 md:mr-20 lg:mr-27">
              <a
                href="https://uit.stanford.edu/security/copyright-infringement"
                title="Report alleged copyright infringement"
                className="text-white no-underline hocus:underline hocus:text-white"
              >
                Copyright
                <SrOnlyText />
              </a>
            </li>
            <li className="sm:mr-10 md:mr-20 lg:mr-27">
              <a
                href="https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4"
                title="Ownership and use of Stanford trademarks and images"
                className="text-white no-underline hocus:underline hocus:text-white"
              >
                Trademarks
                <SrOnlyText />
              </a>
            </li>
            <li className="sm:mr-10 md:mr-20 lg:mr-27">
              <a
                href="https://studentservices.stanford.edu/more-resources/student-policies/non-academic/non-discrimination"
                title="Non-discrimination policy"
                className="text-white no-underline hocus:underline hocus:text-white"
              >
                Non-Discrimination
                <SrOnlyText />
              </a>
            </li>
            <li>
              <a
                href="https://www.stanford.edu/site/accessibility"
                title="Report web accessibility issues"
                className="text-white no-underline hocus:underline hocus:text-white"
              >
                Accessibility
                <SrOnlyText />
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-13 sm:text-14 text-center lg:text-left">
          <span className="whitespace-no-wrap">&copy; Stanford University.</span>
          <span className="whitespace-no-wrap">&nbsp; Stanford, California 94305.</span>
        </div>
      </div>
    </FlexBox>
  </Container>
);
