import type { ReactNode } from 'react';

type PageHeaderProps = {
  children?: ReactNode;
  description: string;
  eyebrow?: string;
  title: string;
};

export function PageHeader({ children, description, eyebrow, title }: PageHeaderProps) {
  return (
    <header className="hero-surface text-white">
      <div className="cc rs-py-5">
        {eyebrow ? <p className="mb-14 text-13 font-bold uppercase tracking-[0.14em] text-digital-red-xlight">{eyebrow}</p> : null}
        <h1 className="mb-16 max-w-1000 fluid-type-5 tracking-[-0.025em] text-white">{title}</h1>
        <p className="mb-0 max-w-800 text-20 leading-normal text-white/80 md:text-22">{description}</p>
        {children ? <div className="mt-24">{children}</div> : null}
      </div>
    </header>
  );
}
