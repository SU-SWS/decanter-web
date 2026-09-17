import type { ReactNode } from 'react';

type CalloutProps = {
  children: ReactNode;
  title: string;
  variant?: 'note' | 'important' | 'beta';
};

const variants = {
  note: 'border-digital-blue bg-digital-blue-light/15',
  important: 'border-cardinal-red bg-digital-red-xlight/10',
  beta: 'border-plum bg-plum-light/10',
};

export const Callout = ({ children, title, variant = 'note' }: CalloutProps) => {
  return (
    <aside className={`my-24 border-l-4 px-18 py-14 ${variants[variant]}`}>
      <p className="mb-5 text-14 font-bold uppercase tracking-[0.08em] text-black">{title}</p>
      <div className="callout-content text-16 leading-normal text-black-80">{children}</div>
    </aside>
  );
};
