import React, { memo } from 'react';
import { Button } from 'tdesign-react';

import Light404Icon from 'assets/images/404-result.png';
import style from '../index.module.less';

const NotFound = () => (
  <div className={style.Content}>
    <img src={Light404Icon} className={style.icon} />
    <div className={style.title}>404 Not Found</div>
    <div className={style.description}>抱歉，您访问的页面不存在。</div>
    <Button theme='primary'>返回首页</Button>
  </div>
);

export default memo(NotFound);
