import React from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import DashboardBase from 'pages/Dashboard/Base';
import DashboardDetail from 'pages/Dashboard/Detail';
import ListBase from 'pages/List/Base';
import ListCard from 'pages/List/Card';
import ListSelect from 'pages/List/Select';
import ListTree from 'pages/List/Tree';
import FormBase from 'pages/Form/Base';
import FormStep from 'pages/Form/Step';
import DetailBase from 'pages/Detail/Base';
import DetailAdvanced from 'pages/Detail/Advanced';
import DetailDeploy from 'pages/Detail/Deploy';
import DetailSecondary from 'pages/Detail/Secondary';
import User from 'pages/User';

interface IRouteItem {
  key?: string;
  path: string;
  exact?: boolean;
  isHome?: boolean;
  Component: React.FC<BrowserRouterProps>;
}

export const routes: IRouteItem[] = [
  // {
  //   key: 'home',
  //   path: '/',
  //   exact: true,
  //   Component: Home,
  // },
  {
    path: '/dashboard/base',
    Component: DashboardBase,
    isHome: true,
  },
  {
    path: '/dashboard/detail',
    Component: DashboardDetail,
  },
  {
    path: '/list/base',
    Component: ListBase,
  },
  {
    path: '/list/card',
    Component: ListCard,
  },
  {
    path: '/list/select',
    Component: ListSelect,
  },
  {
    path: '/list/tree',
    Component: ListTree,
  },
  {
    path: '/form/base',
    Component: FormBase,
  },
  {
    path: '/form/step',
    Component: FormStep,
  },
  {
    path: '/detail/base',
    Component: DetailBase,
  },
  {
    path: '/detail/advanced',
    Component: DetailAdvanced,
  },
  {
    path: '/detail/deploy',
    Component: DetailDeploy,
  },
  {
    path: '/detail/secondary',
    Component: DetailSecondary,
  },
  {
    path: '/user/index',
    Component: User,
  },
];
