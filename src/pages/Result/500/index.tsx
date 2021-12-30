import React, { memo } from 'react';
import { Button } from 'tdesign-react';

import Light500Icon from 'assets/images/500-light.png';
import style from '../index.module.less';

const ServerError = () => (
  <div className={style.Content}>
    <img src={Light500Icon} className={style.icon} />
    <div className={style.title}>500 Internal Server Error</div>
    <div className={style.description}>抱歉，服务器出错啦！</div>
    <Button theme='primary'>返回首页</Button>
  </div>
);

export default memo(ServerError);
