import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'tdesign-react';
import { routes } from 'configs/routes';
import UnAuthorized from 'pages/Result/403';
import NotFound from 'pages/Result/404';
import ServerError from 'pages/Result/500';

const { Content } = Layout;

export default React.memo(() => {
  const home = routes.find((item) => item.isHome);
  return (
    <Content>
      <Switch>
        {home && <Redirect path='/' exact to={home.path} />}
        {routes.map((route, index) => (
          <Route key={index} exact={route.exact} path={route.path} component={route.Component} />
        ))}
        <Route path='/403' component={UnAuthorized} />
        <Route path='/500' component={ServerError} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Content>
  );
});
