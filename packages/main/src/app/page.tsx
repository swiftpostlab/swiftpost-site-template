import StackLayout from '@swiftpost/elysium/layouts/StackLayout';
import Stack from '@swiftpost/elysium/ui/base/Stack';
import Footer from '@/components/Footer';
import { useStaticTheme } from '@/styles/useStaticTheme';
import Header from '@/components/Header';
import Box from '@swiftpost/elysium/ui/base/Box';

const TopBar = () => {
  const theme = useStaticTheme();
  return (
    <Stack
      height={theme.spacing(4)}
      width="100%"
      sx={{
        backgroundColor: 'primary.dark',
      }}
    />
  );
};

const Home: React.FC = () => {
  const theme = useStaticTheme();
  return (
    <StackLayout
      slotProps={{
        mainContainer: {
          children: (
            <Stack>
              <TopBar />
              <Header contentMaxWidth={theme.breakpoints.values.lg} />
              <Box component="main" id="main">{`Content`}</Box>
            </Stack>
          ),
        },
        footerContainer: {
          children: <Footer contentMaxWidth={theme.breakpoints.values.lg} />,
        },
      }}
    />
  );
};

export default Home;
