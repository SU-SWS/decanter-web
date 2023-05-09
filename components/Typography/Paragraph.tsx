import React from 'react';
import { Text, TypographyProps } from './Text';

export type ParagraphProps = TypographyProps & React.HTMLAttributes<HTMLParagraphElement>;

// Convenience component for paragraphs
export const Paragraph = (props: ParagraphProps) => <Text {...props} as="p" />;
