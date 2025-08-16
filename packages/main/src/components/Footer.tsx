import { staticTheme } from '@/styles/staticTheme';
import Text from '@swiftpost/elysium/ui/base/Text';
import ContentFittedStack from '@swiftpost/elysium/ui/ContentFittedStack';
import type { ContentFittedStackProps } from '@swiftpost/elysium/ui/ContentFittedStack';

interface Props {
  contentMaxWidth: ContentFittedStackProps['contentMaxWidth'];
}

const Footer: React.FC<Props> = ({ contentMaxWidth }) => {
  return (
    <ContentFittedStack
      component="footer"
      id="footer"
      minHeight={staticTheme.spacing(6)}
      alignItems="center"
      contentMaxWidth={contentMaxWidth}
      margin={staticTheme.spacing(2)}
      slotProps={{
        container: {
          sx: {
            backgroundColor: 'black',
          },
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
  );
};

export type FooterProps = Props;
export default Footer;
