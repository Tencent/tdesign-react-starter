import React from 'react';
import { Layout } from 'tdesign-react';
import classnames from 'classnames';
import Style from './index.module.less';

const { Content } = Layout;

export interface IPageBoxProps {
  withColor?: boolean;
  withPadding?: boolean;
  className?: string;
}

const PageBox: React.FC<React.PropsWithChildren<IPageBoxProps>> = ({
  children,
  withColor,
  withPadding,
  className,
  ...others
}) => (
  <Content
    className={classnames(
      Style.pageBox,
      {
        [Style.pageBoxWithColor]: withColor,
        [Style.pageBoxWithPadding]: withPadding,
      },
      className,
    )}
    {...others}
  >
    {children}
  </Content>
);

export default React.memo(PageBox);
