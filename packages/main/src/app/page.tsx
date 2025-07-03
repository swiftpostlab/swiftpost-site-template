import StackLayout from '@swiftpost/elysium/layouts/StackLayout';
import Text from '@swiftpost/elysium/ui/Text';

const Home: React.FC = () => {
  return (
    <StackLayout
      elements={{
        mainContent: <Text variant="h1">Hello template</Text>,
        footerContent: <Text>This is a footer</Text>,
      }}
    />
  );
};

export default Home;
