import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';

export default function NotFound() {
  return (
    <main id="main-content">
      <PageHeader description="The page may have moved during the Decanter v8 documentation rebuild." eyebrow="404" title="Page not found" />
      <div className="cc rs-py-5">
        <p className="max-w-prose text-20">Start with the developer documentation or search for the feature you need.</p>
        <Link className="mt-10 inline-block bg-cardinal-red px-20 py-12 font-bold text-white no-underline hocus:bg-black hocus:text-white hocus:underline" href="/docs">
          Browse developer documentation
        </Link>
      </div>
    </main>
  );
}
