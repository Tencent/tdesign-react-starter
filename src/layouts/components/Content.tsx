import React, { Suspense, memo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout, Loading } from 'tdesign-react';
import routers, { IRouter } from 'router';
import { resolve } from 'utils/path';
import Page from './Page';
import Style from './Content.module.less';

const { Content } = Layout;

const PageLoading = memo(() => (
  <div className={Style.loading}>
    <Loading />
  </div>
));

/**
 * 渲染应用路由
 * @param routes
 * @param parentPath
 */
type TRenderRoutes = (routes: IRouter[], parentPath?: string, breadcrumbs?: string[]) => React.ReactNode[];
const renderRoutes: TRenderRoutes = (routes, parentPath = '', breadcrumb = []) =>
  routes.map((route, index: number) => {
    const { Component, children, redirect, meta } = route;
    const currentPath = resolve(parentPath, route.path);
    let currentBreadcrumb = breadcrumb;

    if (meta?.title) {
      currentBreadcrumb = currentBreadcrumb.concat([meta?.title]);
    }

    if (redirect) {
      // 重定向
      return <Route key={index} path={currentPath} element={<Navigate to={redirect} replace />} />;
    }

    if (Component) {
      // 有路由菜单
      return (
        <Route
          key={index}
          path={currentPath}
          element={
            <Page isFullPage={route.isFullPage} breadcrumbs={currentBreadcrumb}>
              <Component />
            </Page>
          }
        />
      );
    }
    // 无路由菜单
    return children ? renderRoutes(children, currentPath, currentBreadcrumb) : null;
  });

export default memo(() => (
  <Content className={Style.panel}>
    <Suspense fallback={<PageLoading />}>
      <Routes>{renderRoutes(routers)}</Routes>
    </Suspense>
  </Content>
));
