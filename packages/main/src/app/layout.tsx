import type { Metadata } from 'next';
import './globals.css';
import AppRouterCacheProvider from '@swiftpost/elysium/src/core/AppRouterCacheProvider';
import ThemeProvider from '@swiftpost/elysium/src/core/ThemeProvider';
import { theme, mainFont } from '@swiftpost/elysium/src/themes/base';

export const metadata: Metadata = {
  title: 'SwiftPost Next Static Template',
  description: 'Batteries included Next static template',
};

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en" className={mainFont.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
