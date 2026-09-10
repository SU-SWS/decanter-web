import { DocsSidebar } from '@/components/docs/docsSidebar';

export default function DeveloperDocsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="border-t border-black-20 bg-white">
      <div className="cc lg:flex lg:gap-32">
        <DocsSidebar />
        {children}
      </div>
    </div>
  );
}
