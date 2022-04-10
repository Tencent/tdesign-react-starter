import React, { lazy } from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import dashboard from './modules/dashboard';
import list from './modules/list';
import form from './modules/form';
import detail from './modules/detail';
import result from './modules/result';
import user from './modules/user';
import login from './modules/login';

export interface IRouter {
  path: string;
  redirect?: string;
  Component?: React.FC<BrowserRouterProps> | (() => any);
  /**
   * 当前路由是否全屏显示
   */
  isFullPage?: boolean;
  /**
   * meta未赋值 路由不显示到菜单中
   */
  meta?: {
    title?: string;
    Icon?: React.FC;
  };
  children?: IRouter[];
}

const routes: IRouter[] = [
  {
    path: '/login',
    Component: lazy(() => import('pages/Login')),
    isFullPage: true,
  },
  {
    path: '/',
    redirect: '/dashboard/base',
  },
];

const otherRoutes: IRouter[] = [
  {
    path: '/403',
    Component: lazy(() => import('pages/Result/403')),
  },
  {
    path: '/500',
    Component: lazy(() => import('pages/Result/500')),
  },
  {
    path: '*',
    Component: lazy(() => import('pages/Result/404')),
  },
];

const allRoutes = [...routes, ...dashboard, ...list, ...form, ...detail, ...result, ...user, ...login, ...otherRoutes];

export default allRoutes;
