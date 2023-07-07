import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'modules/store';
import App from 'layouts/index';

import 'tdesign-react/es/style/index.css';

import './styles/index.less';

const env = import.meta.env.MODE || 'development';
const baseRouterName = env === 'site' ? '/starter/react/' : '';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = document.getElementById('app')!;

const renderApp = () => {
  ReactDOM.createRoot(root).render(
    <Provider store={store}>
      <BrowserRouter basename={baseRouterName}>
        <App />
      </BrowserRouter>
    </Provider>,
  );
};

renderApp();
