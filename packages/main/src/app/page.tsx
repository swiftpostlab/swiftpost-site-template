import PageLayout from '@/layouts/PageLayout';

const Home: React.FC = () => {
  return (
    <PageLayout footerChildren={<>This is a footer</>}>
      <h1>Hello template</h1>
    </PageLayout>
  );
};

export default Home;
