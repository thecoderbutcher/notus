import Image from 'next/image';
import Link from 'next/link';

import Navbar from '@/app/(protected)/components/Navbar';
import Menu from '@/app/(protected)/components/Menu';

export default function DasboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="h-screen flex">
      {/* left */}
      <div className="w-[14%] md:w-[8%] lg:w-[14%] bg-white shadow-xl shadow-shadow rounded-r-2xl text-content/70">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start p-4 gap-2"
        >
          <Image
            src="/icons/notus-logo.webp"
            alt="Notus Logo"
            width={32}
            height={32}
            className="drop-shadow-[0_2px_2px_rgba(165,236,250,0.7)] "
          />
          <span className="hidden lg:block text-xl font-semibold">Notus</span>
        </Link>
        <Menu />
      </div>
      {/* right */}
      <div className="w-[86%] md:w-[92%] lg:w-[86%] overflow-scroll px-2 flex flex-col">
        <Navbar />
        {children}
      </div>
    </main>
  );
}
