import { CSSProperties } from 'react';

const Page: React.FC<React.PropsWithChildren<{ style?: CSSProperties }>> = ({
  children,
}) => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <main
        style={{
          height: '100%',
        }}
      >
        {children}
      </main>
      <footer>This is a footer</footer>
    </div>
  );
};

export default Page;
