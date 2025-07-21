'use client';

import Text from '@swiftpost/elysium/ui/Text';
import Stack from '@swiftpost/elysium/ui/Stack';
import { useTheme } from '@swiftpost/elysium/ui/useTheme';

const Menu: React.FC = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" spacing={theme.spacing(2)}>
      {['Home', 'Blog', 'Portfolio', 'About', 'Contact'].map((item) => (
        <Text key={item}>{item}</Text>
      ))}
    </Stack>
  );
};

export default Menu;
