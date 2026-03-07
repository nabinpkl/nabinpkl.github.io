import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';

const siteUrl = 'https://nabin.js.org';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Nabin Pokhrel',
    template: '%s | Nabin Pokhrel',
  },
  description:
    'Personal portfolio for Nabin Pokhrel, built with Next.js and ready for static deployment.',
  applicationName: 'Nabin Pokhrel Portfolio',
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Nabin Pokhrel',
    description:
      'A clean Next.js portfolio for showcasing projects, skills, and experience.',
    url: siteUrl,
    siteName: 'Nabin Pokhrel Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nabin Pokhrel',
    description:
      'A clean Next.js portfolio for showcasing projects, skills, and experience.',
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}