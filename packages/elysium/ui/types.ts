import type { SxProps, Theme } from '@mui/material';
import type { SystemStyleObject } from '@mui/system';

export { SxProps, SystemStyleObject, Theme };
export type SxArray<TTheme extends Theme = Theme> = ReadonlyArray<
  SystemStyleObject<TTheme> | ((theme: TTheme) => SystemStyleObject<TTheme>)
>;
