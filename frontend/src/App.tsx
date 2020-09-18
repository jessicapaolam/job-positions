import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import 'antd/dist/antd.css';

import { ApolloProvider } from 'react-apollo';
import apolloClient from './services/apollo';

import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
  	<ApolloProvider client={apolloClient}>
    		<Routes />
    </ApolloProvider>

    <GlobalStyle />
  </BrowserRouter>
);

export default App;
