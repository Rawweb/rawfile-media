import { Cormorant } from 'next/font/google';

const cormorant = Cormorant({
  variable: '--font-display-photo-base',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
});

export default function PhotographyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${cormorant.variable} bg-paper text-ink min-h-screen flex flex-col`}
    >
      {/* hero */}

      {/* page content */}
      <main className='flex-1'>{children}</main>

      {/* footer */}
    </div>
  );
}
