import type { SxProps } from '../ui/types';
import { spreadSx } from '../utils/styles/sxProps';
import Stack from '../ui/Stack';
import Box from '../ui/Box';
import { memo } from 'react';

interface MainProps {
  sx: SxProps;
}

interface FooterProps {
  sx: SxProps;
}

interface Props {
  elements: {
    mainContent: React.ReactNode;
    footerContent?: React.ReactNode;
  };
  slotProps?: {
    main?: MainProps;
    footer?: FooterProps;
  };
  sx?: SxProps;
}

const PageLayout: React.FC<Props> = ({ elements, slotProps, sx }) => {
  return (
    <Stack sx={[{ height: '100%' }, ...spreadSx(sx)]}>
      <Box
        component="main"
        sx={[{ height: '100%' }, ...spreadSx(slotProps?.main?.sx)]}
      >
        {elements.mainContent}
      </Box>
      {elements.footerContent != null && (
        <Box component="footer" sx={slotProps?.footer?.sx}>
          {elements.footerContent}
        </Box>
      )}
    </Stack>
  );
};

export type PageLayoutProps = Props;
export default memo(PageLayout);
