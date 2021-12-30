import React, { memo } from 'react';
import { Button } from 'tdesign-react';

import networkErrorIcon from 'assets/images/network-error-light.png';
import style from '../index.module.less';

const NetworkError = () => (
  <div className={style.Content}>
    <img src={networkErrorIcon} className={style.icon} />
    <div className={style.title}>网络异常</div>
    <div className={style.description}>当前网络异常，请稍后再试！</div>
    <div>
      <Button>重新加载</Button>
      <Button className={style.rightButton} theme='default'>
        返回首页
      </Button>
    </div>
  </div>
);

export default memo(NetworkError);
