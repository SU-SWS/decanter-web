import type { MetadataRoute } from 'next';
import { docsNavigation, resourceNavigation } from '@/data/navigation';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://decanter.stanford.edu';
  const designerRoutes = [
    '/for-designers/figma',
    '/for-designers/accessibility-notes',
    '/for-designers/stanford-identity-and-brand-compliance',
    '/for-designers/type-grids-and-color',
  ];
  const exampleRoutes = [
    '/examples/content-patterns',
    '/examples/form-elements',
    '/examples/identity-bar',
    '/examples/global-footer',
  ];
  const paths = [
    '/',
    ...docsNavigation.flatMap((group) => group.items.map((item) => item.href)),
    ...resourceNavigation.map((item) => item.href),
    ...designerRoutes,
    ...exampleRoutes,
  ];

  return [...new Set(paths)].map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: path.startsWith('/docs') ? 'monthly' : 'yearly',
    priority: path === '/' ? 1 : path === '/docs' ? 0.9 : 0.7,
  }));
}
