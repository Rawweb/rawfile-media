import DevFooter from './footer';
import DevNav from './nav';

export default function DevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-ink text-paper min-h-screen flex flex-col'>
      {/* top bar - nav */}
      <DevNav />

      {/* page content */}
      <main className='flex-1'>{children}</main>

      {/* footer */}
      <DevFooter />
    </div>
  );
}
