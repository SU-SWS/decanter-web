import React from 'react';
import { dcnb } from 'cnbuilder';
import { Heading, HeadingType } from 'components/Typography';

/**
 * Simple section component for used in content markdown files
 */
export interface SectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
  heading?: string;
  headingLevel?: HeadingType;
  headingSize?: 1 | 2 | 3;
  id?: string;
  width?: 'default' | 'full';
  children?: React.ReactNode;
  className?: string;
}

export const Section = ({
  heading,
  headingLevel = 'h2',
  headingSize = 2,
  id,
  width = 'default',
  className,
  children
}: SectionProps) => (
  <section id={id} className={dcnb('last:su-mb-0 su-wysiwyg', headingLevel === 'h2' ? 'su-rs-mb-5' : '', className)}>
    {heading && (
      <Heading as={headingLevel} size={headingSize} className="su-max-w-900">
        {heading} {id && <a href={`#${id}`} className="su-text-black-40">#</a>}
      </Heading>
    )}
    <div className={width === 'default' ? 'su-max-w-prose-wide' : 'su-w-full'}>
      {children}
    </div>
  </section>
);
