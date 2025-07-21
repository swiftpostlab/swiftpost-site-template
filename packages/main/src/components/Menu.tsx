'use client';

import Text from '@swiftpost/elysium/ui/Text';
import Stack from '@swiftpost/elysium/ui/Stack';
import { useTheme } from '@swiftpost/elysium/ui/useTheme';
import useMediaQuery from '@swiftpost/elysium/ui/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const menuItems = ['Home', 'Blog', 'Portfolio', 'About', 'Contact'];

const MenuBar: React.FC = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" spacing={theme.spacing(2)}>
      {menuItems.map((item) => (
        <Text key={item}>{item}</Text>
      ))}
    </Stack>
  );
};

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const paddingSize = 2;
  const MenuButton = () => (
    <MenuIcon
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    />
  );

  return (
    <Stack>
      <Stack position="relative" padding={2}>
        <MenuButton />
        <Stack
          position="absolute"
          alignItems="flex-end"
          direction="column"
          top={-paddingSize}
          right={-paddingSize}
          padding={paddingSize}
          sx={{
            backgroundColor: 'white',
            boxShadow: isOpen ? '0px 8px 12px rgba(0, 0, 0, 0.2)' : undefined,
          }}
        >
          <MenuButton />
          {isOpen && (
            <>
              {menuItems.map((item) => (
                <Stack key={item} padding={1}>
                  <Text>{item}</Text>
                </Stack>
              ))}
            </>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

const Menu: React.FC = () => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  return (
    <>
      {matches ?
        <MenuBar />
      : <HamburgerMenu />}
    </>
  );
};

export default Menu;
