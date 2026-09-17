import { Fragment } from 'react';
import { CodeTabs } from '@/components/docs/CodeTabs';
import { CopyButton } from '@/components/docs/CopyButton';

type CodeBlockProps = {
  className?: string;
  code: string;
  language?: string;
  label?: string;
};

export type CodeTab = {
  code: string;
  label: string;
  language: string;
};

type SyntaxKind = 'attribute' | 'comment' | 'function' | 'keyword' | 'number' | 'property' | 'punctuation' | 'string' | 'tag';

const keywords = new Set([
  'as', 'async', 'await', 'class', 'const', 'default', 'else', 'export', 'extends',
  'false', 'from', 'function', 'if', 'import', 'interface', 'let', 'new', 'null',
  'return', 'true', 'type', 'undefined', 'var',
]);

const tokenPattern = /(<!--[\s\S]*?-->|\/\*[\s\S]*?\*\/|\/\/[^\n]*|`(?:\\.|[^`\\])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|<\/?[A-Za-z][\w.-]*|\/?>|@[\w-]+|--[\w-]+|\b[A-Za-z_:][\w:.-]*(?=\s*=)|\b[A-Za-z_$][\w$-]*(?=\s*\()|\b[A-Za-z_$][\w$-]*(?=\s*:)|\b(?:as|async|await|class|const|default|else|export|extends|false|from|function|if|import|interface|let|new|null|return|true|type|undefined|var)\b|\b\d+(?:\.\d+)?\b|[{}\[\]();,:.=+*\/<>!-])/g;

function syntaxKind(token: string, source: string, end: number): SyntaxKind {
  if (token.startsWith('<!--') || token.startsWith('/*') || token.startsWith('//')) return 'comment';
  if (/^[`"']/.test(token)) return 'string';
  if (/^<\/?[A-Za-z]/.test(token)) return 'tag';
  if (/^@[\w-]+$/.test(token) || keywords.has(token)) return 'keyword';
  if (/^--[\w-]+$/.test(token) || /^\s*=/.test(source.slice(end))) return 'attribute';
  if (/^\d/.test(token)) return 'number';
  if (/^[A-Za-z_$][\w$-]*$/.test(token)) {
    if (/^\s*:/.test(source.slice(end))) return 'property';
    return token.includes('-') ? 'property' : 'function';
  }
  return 'punctuation';
}

function highlightedCode(code: string, language: string) {
  const pattern = language === 'text'
    ? /(#[^\n]*|--[\w-]+|\b(?:npm|npx|node|pnpm|yarn|install|run|build|dev)\b|@[\w/-]+|\b\d+(?:\.\d+)*\b)/g
    : tokenPattern;
  const nodes = [];
  let cursor = 0;

  for (const match of code.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > cursor) nodes.push(code.slice(cursor, index));

    const token = match[0];
    let kind: SyntaxKind;
    if (language === 'text') {
      kind = token.startsWith('#') ? 'comment'
        : token.startsWith('--') ? 'attribute'
          : /^(npm|npx|node|pnpm|yarn)$/.test(token) ? 'function'
            : /^\d/.test(token) ? 'number'
              : token.startsWith('@') ? 'string'
                : 'keyword';
    } else {
      kind = syntaxKind(token, code, index + token.length);
    }

    nodes.push(<span className={`syntax-${kind}`} key={`${index}-${token}`}>{token}</span>);
    cursor = index + token.length;
  }

  if (cursor < code.length) nodes.push(code.slice(cursor));
  return nodes.map((node, index) => <Fragment key={index}>{node}</Fragment>);
}

function CodePanel({ code, language }: Pick<CodeTab, 'code' | 'language'>) {
  return (
    <pre className="m-0 overflow-x-auto bg-[#0b1020] px-18 py-18 font-mono text-14 leading-[1.75] text-[#e5e7eb] [tab-size:2]"><code>{highlightedCode(code, language)}</code></pre>
  );
}

export function CodeBlock({ className = '', code, language = 'text', label }: CodeBlockProps) {
  return (
    <figure className={`code-block my-24 overflow-hidden rounded-[0.8rem] border border-white/10 bg-[#0b1020] text-white shadow-lg ${className}`}>
      <figcaption className="m-0 flex min-h-44 items-center justify-between gap-12 border-b border-white/10 bg-[#111827] px-14 py-8 text-12 font-semibold text-white/75">
        <span className="flex min-w-0 items-center gap-12">
          <span aria-hidden="true" className="hidden items-center gap-5 sm:flex">
            <span className="size-7 rounded-full bg-[#fb7185]" />
            <span className="size-7 rounded-full bg-[#facc15]" />
            <span className="size-7 rounded-full bg-[#4ade80]" />
          </span>
          <span className="truncate text-white/85">{label ?? language}</span>
          <span className="rounded-[0.3rem] bg-white/8 px-6 py-3 font-mono text-10 font-medium uppercase tracking-[0.08em] text-[#93c5fd]">{language}</span>
        </span>
        <CopyButton code={code} label={label ?? language} />
      </figcaption>
      <CodePanel code={code} language={language} />
    </figure>
  );
}

export function TabbedCodeBlock({ className = '', tabs }: { className?: string; tabs: CodeTab[] }) {
  return (
    <CodeTabs className={className} tabs={tabs}>
      {tabs.map((tab) => <CodePanel code={tab.code} key={tab.label} language={tab.language} />)}
    </CodeTabs>
  );
}
