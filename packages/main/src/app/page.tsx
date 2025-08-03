import StackLayout from '@swiftpost/elysium/layouts/StackLayout';
import Text from '@swiftpost/elysium/ui/base/Text';
import Stack from '@swiftpost/elysium/ui/base/Stack';
import ContentFittedStack from '@swiftpost/elysium/ui/ContentFittedStack';
import Menu from '@/components/Menu';
import Logo from '@/components/Logo';
import { useStaticTheme } from '@/styles/useStaticTheme';

const Home: React.FC = () => {
  const theme = useStaticTheme();
  return (
    <StackLayout
      elements={{
        mainContent: (
          <Stack>
            <Stack
              height={theme.spacing(4)}
              width="100%"
              sx={{
                backgroundColor: 'primary.dark',
              }}
            ></Stack>
            <ContentFittedStack
              height={theme.spacing(12)}
              direction="row"
              alignItems="center"
              contentMaxWidth={theme.breakpoints.values.lg}
              containerProps={{ padding: theme.spacing(2) }}
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
            minHeight={theme.spacing(6)}
            alignItems="center"
            contentMaxWidth={theme.breakpoints.values.lg}
            margin={theme.spacing(2)}
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
