import React, { Suspense, useEffect, memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'tdesign-react';
import routers from 'router';
import { resolve } from 'utils/path';
import { useAppDispatch } from '../../modules/store';
import { switchFullPage } from '../../modules/global';

const { Content } = Layout;

const FullPage = memo(
  ({
    children,
    isFullPage,
  }: React.PropsWithChildren<{
    isFullPage?: boolean;
  }>) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(switchFullPage(isFullPage));
    }, [isFullPage]);

    return <>{children}</>;
  },
);

const renderRoutes = (routes: any, parentPath = '') =>
  routes.map((route: any, index: number) => {
    const { Component } = route;
    const { children } = route;
    const currentPath = resolve(parentPath, route.path);

    if (Component) {
      return (
        <Route
          key={index}
          path={currentPath}
          element={
            <FullPage isFullPage={route.isFullPage}>
              <Component />
            </FullPage>
          }
        >
          {children && renderRoutes(children, currentPath)}
        </Route>
      );
    }
    if (children) {
      return renderRoutes(children, currentPath);
    }
    return null;
  });

export default memo(() => (
  <Content>
    <Suspense fallback={null}>
      <Routes>{renderRoutes(routers)}</Routes>
    </Suspense>
  </Content>
));
