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
    'Software engineer portfolio for Nabin Pokhrel, highlighting full-stack development, backend systems, and engineering experience.',
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
      'Portfolio site for a software engineer with 4+ years of experience in full-stack, backend, and cloud-focused product development.',
    url: siteUrl,
    siteName: 'Nabin Pokhrel Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nabin Pokhrel',
    description:
      'Software engineer portfolio covering skills, experience, education, and product delivery work.',
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