'use client';

import StackLayout from '@swiftpost/elysium/layouts/StackLayout';
import Text from '@swiftpost/elysium/ui/Text';
import Stack from '@swiftpost/elysium/ui/Stack';
import ContentFittedStack from '@swiftpost/elysium/ui/ContentFittedStack';
import Menu from '@/components/Menu';
import Logo from '@/components/Logo';

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
                backgroundColor: 'primary.dark',
              }}
            ></Stack>
            <ContentFittedStack
              height={(theme) => theme.spacing(12)}
              direction="row"
              alignItems="center"
              contentMaxWidth={(theme) => theme.breakpoints.values.lg}
              containerProps={{ padding: (theme) => theme.spacing(2) }}
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
            margin={(theme) => theme.spacing(2)}
            containerProps={{
              sx: {
                backgroundColor: 'black',
              },
            }}
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
