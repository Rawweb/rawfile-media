import type { Metadata } from 'next';
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const archivo = Archivo({
  variable: '--font-display-base',
  subsets: ['latin'],
});

const plexSans = IBM_Plex_Sans({
  variable: '--font-sans-base',
  subsets: ['latin'],
  weight: ['400', '500'],
});

const plexMono = IBM_Plex_Mono({
  variable: '--font-mono-base',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: {
    default: 'Rawfile Media',
    template: '%s | Rawfile Media',
  },
  description:
    'Rawfile Media is the studio of Kingsley Chibuikem, a photographer and web developer based in Anambra, Nigeria. Where ideas come to life.',
  metadataBase: new URL('https://rawfile-media-tau.vercel.app'),
  openGraph: {
    title: 'Rawfile Media - Photography & Web Development',
    description:
      'Photography and web development, under one brand. Where ideas come to life.',
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
    <html
      lang='en'
      className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col font-sans'>{children}</body>
    </html>
  );
}
