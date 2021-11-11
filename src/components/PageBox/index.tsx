import React from 'react';
import classnames from 'classnames';
import { layout } from 'configs';
import Style from './index.module.less';

const PageBox = ({ children, ...others }: React.HTMLAttributes<HTMLElement>) => (
  <div className={classnames(Style.pageBox, { [Style.pageBoxWithColor]: layout.pageBackground })} {...others}>
    {children}
  </div>
);

export default React.memo(PageBox);
