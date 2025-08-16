import Text from '@swiftpost/elysium/ui/base/Text';
import ContentFittedStack from '@swiftpost/elysium/ui/ContentFittedStack';
import type { ContentFittedStackProps } from '@swiftpost/elysium/ui/ContentFittedStack';
import { useStaticTheme } from '@/styles/useStaticTheme';

interface Props {
  contentMaxWidth: ContentFittedStackProps['contentMaxWidth'];
}

const Footer: React.FC<Props> = ({ contentMaxWidth }) => {
  const theme = useStaticTheme();
  return (
    <ContentFittedStack
      minHeight={theme.spacing(6)}
      alignItems="center"
      contentMaxWidth={contentMaxWidth}
      margin={theme.spacing(2)}
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
