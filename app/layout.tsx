import '@/app/globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
export const metadata: Metadata = {
  title: 'Notus',
  description: 'Sistema moderno de administración académica',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`antialiased transition-all duration-300`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
