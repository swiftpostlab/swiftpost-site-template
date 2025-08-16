import StackLayout from '@swiftpost/elysium/layouts/StackLayout';
import Stack from '@swiftpost/elysium/ui/base/Stack';
import Footer from '@/components/Footer';
import { staticTheme } from '@/styles/staticTheme';
import Header from '@/components/Header';
import Box from '@swiftpost/elysium/ui/base/Box';
import TopBar from '@/components/TopBar';

const Home: React.FC = () => {
  return (
    <StackLayout
      slotProps={{
        mainContainer: {
          children: (
            <Stack>
              <TopBar />
              <Header contentMaxWidth={staticTheme.breakpoints.values.lg} />
              <Box component="main" id="main">{`Content`}</Box>
            </Stack>
          ),
        },
        footerContainer: {
          children: (
            <Footer contentMaxWidth={staticTheme.breakpoints.values.lg} />
          ),
        },
      }}
    />
  );
};

export default Home;
