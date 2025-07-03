import { CSSProperties } from 'react';

interface Props {
  children: React.ReactNode;
  footerChildren?: React.ReactNode;
  rootStyle?: CSSProperties;
  mainStyle?: CSSProperties;
  footerStyle?: CSSProperties;
}

const PageLayout: React.FC<Props> = ({
  children,
  footerChildren,
  rootStyle,
  mainStyle,
  footerStyle,
}) => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        ...rootStyle,
      }}
    >
      <main
        style={{
          height: '100%',
          ...mainStyle,
        }}
      >
        {children}
      </main>
      {footerChildren && <footer style={footerStyle}>{footerChildren}</footer>}
    </div>
  );
};

export default PageLayout;
