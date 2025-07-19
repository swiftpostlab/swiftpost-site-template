import Stack, { StackProps } from './Stack';

interface Props extends Exclude<StackProps, 'maxWidth' | 'width'> {
  contentMaxWidth: StackProps['maxWidth'];
  containerProps?: StackProps;
}

/**
 * Special stack to fit its content within a given width while maintaining the content alignment (centered by default).
 */
const ContentFittedStack: React.FC<Props> = ({
  contentMaxWidth,
  containerProps,
  children,
  ...otherProps
}) => {
  return (
    <Stack
      width="100%"
      alignItems={containerProps?.alignItems ?? 'center'}
      {...containerProps}
    >
      <Stack width="100%" maxWidth={contentMaxWidth} {...otherProps}>
        {children}
      </Stack>
    </Stack>
  );
};

export default ContentFittedStack;
