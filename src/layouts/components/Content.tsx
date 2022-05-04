import React, { Suspense, useEffect, memo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout, Loading } from 'tdesign-react';
import routers, { IRouter } from 'router';
import { resolve } from 'utils/path';
import { useAppDispatch } from '../../modules/store';
import { switchFullPage } from '../../modules/global';
import Style from './Content.module.less';

const { Content } = Layout;

const PageBox = memo(
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

const PageLoading = memo(() => (
  <div className={Style.loading}>
    <Loading />
  </div>
));

const renderRoutes = (routes: IRouter[], parentPath = ''): React.ReactNode[] =>
  routes.map((route, index: number) => {
    const { Component, children, redirect } = route;
    const currentPath = resolve(parentPath, route.path);

    if (redirect) {
      // 重定向
      return <Route key={index} path={currentPath} element={<Navigate to={redirect} replace />} />;
    }

    if (Component) {
      return (
        <Route
          key={index}
          path={currentPath}
          element={
            <PageBox isFullPage={route.isFullPage}>
              <Component />
            </PageBox>
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
    <Suspense fallback={<PageLoading />}>
      <Routes>{renderRoutes(routers)}</Routes>
    </Suspense>
  </Content>
));
