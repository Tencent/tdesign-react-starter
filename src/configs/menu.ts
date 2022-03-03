import React from 'react';
import {
  DashboardIcon,
  ViewModuleIcon,
  QueueIcon,
  LayersIcon,
  CheckCircleIcon,
  UserCircleIcon,
} from 'tdesign-icons-react';

export interface IMenuItem {
  key: string;
  label: string;
  path?: string;
  children?: IMenuItem[];
  Icon?: React.FC;
}

export const menu: IMenuItem[] = [
  {
    key: 'dashboard',
    label: '仪表盘',
    Icon: DashboardIcon,
    children: [
      {
        key: '/dashboard/base',
        label: '概览仪表盘',
        path: '/dashboard/base',
      },
      {
        key: '/dashboard/detail',
        label: '统计报表',
        path: '/dashboard/detail',
      },
    ],
  },
  {
    key: 'list',
    label: '列表页',
    Icon: ViewModuleIcon,
    children: [
      {
        key: '/list/base',
        label: '基础列表页',
        path: '/list/base',
      },
      {
        key: '/list/select',
        label: '筛选列表页',
        path: '/list/select',
      },
      {
        key: '/list/tree',
        label: '树状筛选列表页',
        path: '/list/tree',
      },
    ],
  },
  {
    key: 'form',
    label: '表单类',
    Icon: QueueIcon,
    children: [
      {
        key: '/form/base',
        label: '基础表单页',
        path: '/form/base',
      },
      {
        key: '/form/step',
        label: '分布表单页',
        path: '/form/step',
      },
    ],
  },
  {
    key: 'detail',
    label: '详情页',
    Icon: LayersIcon,
    children: [
      {
        key: '/detail/base',
        label: '基础详情页',
        path: '/detail/base',
      },
      {
        key: '/detail/advanced',
        label: '多卡片详情页',
        path: '/detail/advanced',
      },
      {
        key: '/detail/deploy',
        label: '数据详情页',
        path: '/detail/deploy',
      },
      {
        key: '/detail/secondary',
        label: '二级详情页',
        path: '/detail/secondary',
      },
    ],
  },
  {
    key: 'result',
    label: '结果页',
    Icon: CheckCircleIcon,
    children: [
      {
        key: '/result/success',
        label: '成功页',
        path: '/result/success',
      },
      {
        key: '/result/fail',
        label: '失败页',
        path: '/result/fail',
      },
      {
        key: '/result/network-error',
        label: '网络异常',
        path: '/result/network-error',
      },
      {
        key: '/result/403',
        label: '无权限',
        path: '/result/403',
      },
      {
        key: '/result/404',
        label: '访问页面不存在页',
        path: '/result/404',
      },
      {
        key: '/result/500',
        label: '服务器出错页',
        path: '/result/500',
      },
      {
        key: '/result/browser-incompatible',
        label: '浏览器不兼容页',
        path: '/result/browser-incompatible',
      },
    ],
  },
  {
    key: 'user',
    label: '个人页',
    Icon: UserCircleIcon,
    children: [
      {
        key: '/user/index',
        label: '个人中心',
        path: '/user/index',
      },
    ],
  },
  {
    key: 'level1',
    label: '一级菜单',
    Icon: UserCircleIcon,
    children: [
      {
        key: '/level1/level2',
        label: '二级菜单',
        path: 'user/index',
        children: [
          {
            key: '/level1/level2/level3',
            label: '三级菜单',
            path: 'user/index',
          },
        ],
      },
    ],
  },
];
