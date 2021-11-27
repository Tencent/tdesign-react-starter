import React from 'react';
import { BrowserRouterProps } from 'react-router-dom';
import Home from 'pages/Home';
import Monitor from 'pages/Monitor';
import Report from 'pages/Report';
import Form from 'pages/Form';
import StepForm from 'pages/StepForm';
import UploadCollection from 'pages/UploadCollection';
import ComplexForm from 'pages/ComplexForm';
import CustomTable from 'pages/CustomTable';
import ComplexTable from 'pages/ComplexTable';
import BaseList from 'pages/BaseList';
import CardList from 'pages/CardList';
import Editor from 'pages/Editor';

interface IRouteItem {
  key?: string; // 无key时，没有权限校验
  path: string;
  exact?: boolean;
  Component: React.FC<BrowserRouterProps>;
}

export const routes: IRouteItem[] = [
  {
    key: 'home',
    path: '/',
    exact: true,
    Component: Home,
  },
  {
    path: '/monitor',
    Component: Monitor,
  },
  {
    path: '/report',
    Component: Report,
  },
  {
    // key: 'form',
    path: '/form',
    Component: Form,
  },
  {
    path: '/step-form',
    Component: StepForm,
  },
  {
    path: '/upload-collection',
    Component: UploadCollection,
  },
  {
    // key: 'form',
    path: '/complex-form',
    Component: ComplexForm,
  },
  {
    path: '/custom-table',
    Component: CustomTable,
  },
  {
    path: '/complex-table',
    Component: ComplexTable,
  },
  {
    path: '/editor',
    Component: Editor,
  },
  {
    path: '/base-list',
    Component: BaseList,
  },
  {
    path: '/card-list',
    Component: CardList,
  },
];
