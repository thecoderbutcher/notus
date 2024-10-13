import Link from 'next/link';
import Image from 'next/image';
import SocialLogin from '@/app/(auth)/components/socials';

interface AuthCardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backLabel: string;
  backLink: string;
  social: boolean;
}

export const AuthCardWrapper = ({
  children,
  headerLabel,
  backLabel,
  backLink,
  social,
}: AuthCardWrapperProps) => {
  return (
    <div className="flex flex-col gap-4 space-y-4 w-[400px] shadow-md rounded-md bg-white p-8">
      <header className="flex flex-col items-center gap-1">
        <h2 className="flex items-end justify-center gap-1 pb-2 text-2xl font-bold text-secondary">
          <Image
            src={'/icons/notus-logo.webp'}
            alt="logo"
            width={35}
            height={35}
          />
          Notus
        </h2>
        <p className="text-lg lg:text-sm font-light text-secondary/80">
          {headerLabel}
        </p>
      </header>
      <main className="flex flex-col gap-4">
        {children}
        {social && <SocialLogin />}
      </main>
      <footer className="flex flex-col items-center">
        <Link
          href={backLink}
          className="text-lg lg:text-sm font-light text-secondary/80 "
        >
          {backLabel}
        </Link>
      </footer>
    </div>
  );
};
