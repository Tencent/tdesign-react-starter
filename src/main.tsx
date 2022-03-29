import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from 'modules/store';
import App from 'layouts/index';

import './styles/index.less';
import 'tdesign-react/esm/style/index.js'; // 少量公共样式

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>,
    document.getElementById('app'),
  );
};

renderApp();
