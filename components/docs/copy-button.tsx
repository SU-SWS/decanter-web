'use client';

import { useEffect, useRef, useState } from 'react';
import { CheckIcon, CopyIcon } from '@/components/icons';

type CopyButtonProps = {
  code: string;
  label: string;
};

export function CopyButton({ code, label }: CopyButtonProps) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

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
    <button
      aria-label={copied ? `${label} code copied` : `Copy ${label} code`}
      className="flex shrink-0 items-center gap-6 rounded-[0.35rem] px-8 py-5 text-12 text-white hocus:bg-white/10"
      onClick={copy}
      type="button"
    >
      {copied ? <CheckIcon className="size-16" /> : <CopyIcon className="size-16" />}
      <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}
