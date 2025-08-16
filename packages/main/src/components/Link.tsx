import ElysiumLink from '@swiftpost/elysium/ui/base/Link';
import NextLink from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
  inheritStyle?: boolean;
  external?: boolean;
  blank?: boolean;
}

const Link: React.FC<Props> = ({
  href,
  children,
  external,
  inheritStyle,
  blank,
}) => {
  return (
    <ElysiumLink
      href={href}
      {...(!external && { component: NextLink })}
      {...(inheritStyle && {
        color: 'inherit',
        fontWeight: 'inherit',
      })}
      {...(blank && { target: '_blank' })}
      sx={{
        '&:hover': {
          color: 'primary.light',
        },
      }}
    >
      {children}
    </ElysiumLink>
  );
};

export type LinkProps = Props;
export default Link;
