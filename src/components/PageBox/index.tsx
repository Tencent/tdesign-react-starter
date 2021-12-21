import React from 'react';
import { Layout } from '@tencent/tdesign-react';
import classnames from 'classnames';
import Style from './index.module.less';

const { Content } = Layout;

interface IProps extends React.HTMLAttributes<HTMLElement> {
  withColor?: boolean;
}

const PageBox = ({ children, withColor = true, ...others }: IProps) => (
  <Content className={classnames(Style.pageBox, { [Style.pageBoxWithColor]: withColor })} {...others}>
    {children}
  </Content>
);

export default React.memo(PageBox);
