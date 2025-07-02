import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SwiftPost Next Static Template',
  description: 'Batteries included Next static template',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
