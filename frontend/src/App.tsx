import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import 'antd/dist/antd.css';

import AppProvider from './context';

import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
  	<AppProvider>
    		<Routes />
    </AppProvider>

    <GlobalStyle />
  </BrowserRouter>
);

export default App;