'use client';

import StackLayout from '@swiftpost/elysium/layouts/StackLayout';
import Text from '@swiftpost/elysium/ui/Text';
import Stack from '@swiftpost/elysium/ui/Stack';
import { useTheme } from '@swiftpost/elysium/ui/useTheme';
import ContentFittedStack from '@swiftpost/elysium/ui/ContentFittedStack';
import { blue } from '@swiftpost/elysium/colors/material';

const Logo: React.FC = () => (
  <Text variant="h3">
    <Text variant="h3" component="span" fontWeight="bold" color={blue['A400']}>
      El
    </Text>
    ysium
  </Text>
);

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

const Home: React.FC = () => {
  return (
    <StackLayout
      elements={{
        mainContent: (
          <Stack>
            <Stack
              height={(theme) => theme.spacing(4)}
              width="100%"
              sx={{
                backgroundColor: blue[900],
              }}
            ></Stack>
            <ContentFittedStack
              height={(theme) => theme.spacing(12)}
              direction="row"
              alignItems="center"
              contentMaxWidth={(theme) => theme.breakpoints.values.lg}
            >
              <Stack flex={1}>
                <Logo />
              </Stack>
              <Menu />
            </ContentFittedStack>
          </Stack>
        ),
        footerContent: (
          <ContentFittedStack
            minHeight={(theme) => theme.spacing(6)}
            alignItems="center"
            contentMaxWidth={(theme) => theme.breakpoints.values.lg}
            containerSx={(theme) => ({
              backgroundColor: 'black',
              padding: theme.spacing(2),
            })}
          >
            <Text color="white" gutterBottom>
              Elysium UI / Gamut Theme / SwiftPost Template.
            </Text>
            <Text color="white" gutterBottom>
              Copyright © SwiftPostLab | Fabio Colella 2025.
            </Text>
          </ContentFittedStack>
        ),
      }}
    />
  );
};

export default Home;
