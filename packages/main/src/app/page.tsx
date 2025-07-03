import PageLayout from '@swiftpost/elysium/layouts/PageLayout';
import Text from '@swiftpost/elysium/ui/Text';

const Home: React.FC = () => {
  return (
    <PageLayout
      elements={{
        mainContent: <Text variant="h1">Hello template</Text>,
        footerContent: <Text>This is a footer</Text>,
      }}
    />
  );
};

export default Home;
