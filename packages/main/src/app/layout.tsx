import type { Metadata } from 'next';
import './globals.css';
import { AppRouterCacheProvider } from '@swiftpost/elysium-ui/src/core';

export const metadata: Metadata = {
  title: 'SwiftPost Next Static Template',
  description: 'Batteries included Next static template',
};

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
