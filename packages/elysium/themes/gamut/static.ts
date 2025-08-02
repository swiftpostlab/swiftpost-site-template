import { ThemeOptions } from '@mui/material/styles';

export const staticThemeOptions: ThemeOptions = {
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
} as const;
