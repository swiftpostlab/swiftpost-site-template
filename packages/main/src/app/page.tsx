import StackLayout from '@swiftpost/elysium/layouts/StackLayout';
import Stack from '@swiftpost/elysium/ui/base/Stack';
import Footer from '@/components/Footer';
import { staticTheme } from '@/styles/staticTheme';
import Header from '@/components/Header';
import Box from '@swiftpost/elysium/ui/base/Box';
import TopBar from '@/components/TopBar';
import ContentFittedStack from '@swiftpost/elysium/ui/ContentFittedStack';

const contentMaxWidth = staticTheme.breakpoints.values.lg;

const Home: React.FC = () => {
  return (
    <StackLayout
      slotProps={{
        mainContainer: {
          children: (
            <Stack>
              <TopBar />
              <Header contentMaxWidth={contentMaxWidth} />
              <ContentFittedStack
                component="main"
                id="main"
                marginX={staticTheme.spacing(2)}
                contentMaxWidth={contentMaxWidth}
              >
                {`Content`}
              </ContentFittedStack>
              <Box component="main" id="main"></Box>
            </Stack>
          ),
        },
        footerContainer: {
          children: <Footer contentMaxWidth={contentMaxWidth} />,
        },
      }}
    />
  );
};

export default Home;
