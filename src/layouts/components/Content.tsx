import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'tdesign-react';
import { routes } from 'configs/routes';
import { useAppSelector } from 'modules/store';
import { selectGlobal } from 'modules/global';
import UnAuthorized from 'pages/Result/403';
import NotFound from 'pages/Result/404';
import ServerError from 'pages/Result/500';
import LayoutMap from './Container';

const { Content } = Layout;

export default React.memo(() => {
  const home = routes.find((item) => item.isHome);
  const globalState = useAppSelector(selectGlobal);
  const Container = LayoutMap[globalState.layout];
  return (
    <Content>
      <Switch>
        {home && <Redirect path='/' exact to={home.path} />}
        {routes.map((route, index) => {
          const { Component } = route;
          return route.isFullPage ? (
            <Route key={index} exact={route.exact} path={route.path} component={Component} />
          ) : (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              render={() => (
                <Container>
                  <Component />
                </Container>
              )}
            />
          );
        })}
        <Route path='/403' component={UnAuthorized} />
        <Route path='/500' component={ServerError} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Content>
  );
});
