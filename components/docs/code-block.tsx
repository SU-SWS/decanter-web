'use client';

import { useRef, useState } from 'react';
import { CheckIcon, CopyIcon } from '@/components/icons';

type CodeBlockProps = {
  code: string;
  language?: string;
  label?: string;
};

export function CodeBlock({ code, language = 'text', label }: CodeBlockProps) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <figure className="code-block my-24 overflow-hidden rounded-[0.6rem] border border-white/10 bg-black text-white shadow-lg">
      <figcaption className="flex items-center justify-between border-b border-white/10 bg-black-90 px-14 py-9 text-12 font-semibold text-white/75">
        <span>{label ?? language}</span>
        <button className="flex items-center gap-6 rounded-[0.3rem] px-8 py-5 text-12 text-white hocus:bg-white/10" onClick={copy} type="button">
          {copied ? <CheckIcon className="size-16" /> : <CopyIcon className="size-16" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </figcaption>
      <pre className="m-0 overflow-x-auto px-18 py-16 text-14 leading-[1.65] text-white"><code>{code}</code></pre>
    </figure>
  );
}
