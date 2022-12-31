import React from 'react';
import { dcnb } from 'cnbuilder';
import { Heading, HeadingType } from 'components/Typography';

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: string;
  headingLevel?: HeadingType;
  id?: string;
  width?: 'default' | 'full';
  children?: React.ReactNode;
}

export const Section = ({
 heading,
 headingLevel = 'h2',
 id,
 width = 'default',
 className,
 children
}: SectionProps) => (
  <section id={id} className={dcnb('su-rs-mb-5 last:su-mb-0 su-wysiwyg', className)}>
    {heading && (
      <Heading as={headingLevel} size={2} className="su-max-w-900">
       {heading} {id && <a href={`#${id}`} className="su-text-black-40">#</a>}
      </Heading>
    )}
    <div className={width === 'default' ? 'su-max-w-prose-wide' : 'su-w-full'}>
      {children}
    </div>
  </section>
);
