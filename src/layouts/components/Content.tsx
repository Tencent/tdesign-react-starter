import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'tdesign-react';
import router from 'router';

const { Content } = Layout;

export default React.memo(() => (
  <Content>
    <Suspense fallback={<div>页面加载中</div>}>
      <Switch>
        {router.map((route, index) => (
          <Route key={index} exact={route.exact} path={route.path} component={route.Component} />
        ))}
      </Switch>
    </Suspense>
  </Content>
));
