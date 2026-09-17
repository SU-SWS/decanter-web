import Link from 'next/link';
import { ArrowIcon } from '@/components/Icons';

type FeatureCardProps = {
  description: string;
  href: string;
  label?: string;
  title: string;
};

export const FeatureCard = ({ description, href, label, title }: FeatureCardProps) => {
  return (
    <article className="relative border border-black-20 bg-white p-22 shadow-sm">
      {label ? <p className="mb-9 text-11 font-bold uppercase tracking-[0.12em] text-cardinal-red">{label}</p> : null}
      <h2 className="mb-8 text-22 font-bold leading-display">
        <Link className="stretched-link text-black no-underline hocus:text-cardinal-red hocus:underline" href={href}>{title}</Link>
      </h2>
      <p className="mb-16 text-16 leading-normal text-black-70">{description}</p>
      <span aria-hidden="true" className="inline-flex items-center gap-6 text-14 font-bold text-cardinal-red">
        Read documentation <ArrowIcon className="size-16" />
      </span>
    </article>
  );
};
