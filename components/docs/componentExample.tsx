import type { ReactNode } from 'react';
import { CodeBlock, type CodeTab, TabbedCodeBlock } from '@/components/docs/CodeBlock';

type ComponentExampleProps = {
  children: ReactNode;
  code?: string;
  codeTabs?: CodeTab[];
  language?: string;
  label?: string;
  previewClassName?: string;
  previewTone?: 'dark' | 'light';
  title?: string;
};

export function ComponentExample({
  children,
  code,
  codeTabs,
  language = 'tsx',
  label = 'React',
  previewClassName = '',
  title = 'Rendered example',
}: ComponentExampleProps) {
  return (
    <div className="component-example my-24 overflow-hidden rounded-[0.8rem] border border-black-20 bg-white shadow-sm">
      <div className="flex min-h-44 items-center border-b border-black-20 bg-white px-20 py-10 sm:px-28">
        <p className="m-0 text-11 font-bold uppercase tracking-[0.14em] text-black-70">{title}</p>
      </div>
      <div className={`preview-surface min-w-0 p-20 sm:p-28 ${previewClassName}`}>
        {children}
      </div>
      {codeTabs?.length ? (
        <TabbedCodeBlock className="m-0 rounded-none border-0 border-t border-white/10 shadow-none" tabs={codeTabs} />
      ) : code ? (
        <CodeBlock className="m-0 rounded-none border-0 border-t border-white/10 shadow-none" code={code} label={label} language={language} />
      ) : null}
    </div>
  );
}
