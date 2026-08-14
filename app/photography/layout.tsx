import PhotoNav from './nav';

export default function PhotographyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-paper text-ink min-h-screen flex flex-col'>
      {/* hero */}
      <PhotoNav />

      {/* page content */}
      <main className='flex-1 pt-[66px]'>{children}</main>

      {/* footer */}
    </div>
  );
}
