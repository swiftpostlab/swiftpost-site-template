'use client';

import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

export const theme = createTheme({
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  spacing: (factor: number) => `${0.5 * factor}rem`,
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
});

export const mainFont = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});
