import { GlobalStyle } from 'GlobalStyle';
import { Layout } from './Layout/Layout.styled';
import { Feedback } from './Feedback/Feedback';

export const App = () => {
  return (
    <Layout>
      <Feedback/>
      <GlobalStyle/>
    </Layout>
  );
};
