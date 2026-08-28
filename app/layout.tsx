import type { Metadata, Viewport } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { GlobalFooter } from '@/components/site/global-footer';
import { IdentityBar } from '@/components/site/identity-bar';
import { SiteHeader } from '@/components/site/site-header';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://decanter.stanford.edu'),
  title: {
    default: 'Decanter — Stanford’s design system for Tailwind CSS',
    template: '%s | Decanter',
  },
  description: 'Developer documentation, design guidance, and examples for Decanter v8, Stanford University’s Tailwind CSS design system.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    siteName: 'Decanter',
    title: 'Decanter — Stanford’s design system for Tailwind CSS',
    description: 'Build accessible, Stanford-branded digital experiences with Tailwind CSS v4.',
    url: '/',
  },
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#2E2D29',
};

const analyticsEnabled = process.env.CONTEXT === 'production'
  || process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
        {/* The stylesheet is declared once in the root App Router layout. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col bg-white text-black antialiased">
        <a className="skiplink" href="#main-content">Skip to main content</a>
        <IdentityBar />
        <SiteHeader />
        <div className="grow">{children}</div>
        <GlobalFooter />
        {analyticsEnabled ? <GoogleAnalytics gaId="G-SZ6LS311C9" /> : null}
      </body>
    </html>
  );
}
