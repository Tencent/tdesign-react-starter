import React from 'react';
import classnames from 'classnames';
import Style from './index.module.less';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  withColor?: boolean;
}

const PageBox = ({ children, withColor = true, ...others }: IProps) => (
  <div className={classnames(Style.pageBox, { [Style.pageBoxWithColor]: withColor })} {...others}>
    {children}
  </div>
);

export default React.memo(PageBox);
