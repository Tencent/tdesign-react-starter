import React, { memo } from 'react';
import { Button } from 'tdesign-react';

import Light403Icon from 'assets/images/403-result.png';
import style from '../index.module.less';

const UnAuthorized = () => (
  <div className={style.Content}>
    <img src={Light403Icon} className={style.icon} />
    <div className={style.title}>403 Forbidden</div>
    <div className={style.description}>抱歉，您无权限访问此页面，企业微信联系创建者 Xiaolaoshi 。</div>
    <Button theme='primary'>返回首页</Button>
  </div>
);

export default memo(UnAuthorized);
