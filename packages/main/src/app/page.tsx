'use client';

import StackLayout from '@swiftpost/elysium/layouts/StackLayout';
import Text from '@swiftpost/elysium/ui/Text';
import Stack from '@swiftpost/elysium/ui/Stack';
import { blue } from '@swiftpost/elysium/colors/material';

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
            <Stack></Stack>
          </Stack>
        ),
        footerContent: <Text>This is a footer</Text>,
      }}
    />
  );
};

export default Home;
