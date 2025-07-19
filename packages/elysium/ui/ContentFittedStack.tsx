import Stack, { StackProps } from './Stack';

interface Props extends Exclude<StackProps, 'maxWidth' | 'width'> {
  contentMaxWidth: StackProps['maxWidth'];
  containerAlignItems?: StackProps['alignItems'];
  containerSx?: StackProps['sx'];
}

/**
 * Special stack to fit its content within a given width while maintaining the content alignment (centered by default).
 */
const ContentFittedStack: React.FC<Props> = ({
  contentMaxWidth,
  containerAlignItems,
  containerSx,
  children,
  ...otherProps
}) => {
  return (
    <Stack
      width="100%"
      alignItems={containerAlignItems ?? 'center'}
      sx={containerSx}
    >
      <Stack width="100%" maxWidth={contentMaxWidth} {...otherProps}>
        {children}
      </Stack>
    </Stack>
  );
};

export default ContentFittedStack;
