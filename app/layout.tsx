import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Rawfile Media',
    template: '%s | Rawfile Media',
  },
  description:
    'Rawfile Media is the studio of Kingsley Chibuikem, a photographer and web developer based in Anambra, Nigeria. Where ideas come to life.',
  metadataBase: new URL('https://rawfile-media-tau.vercel.app/'),
  openGraph: {
    title: 'Rawfile Media - Photography & Web Development',
    description: 'Photography and web development, under one brand. Where ideas come to life.',
    url: 'https://rawfile-media-tau.vercel.app',
    siteName: 'Rawfile Media',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  );
}
