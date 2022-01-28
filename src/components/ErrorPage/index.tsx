import React, { memo } from 'react';
import { Button } from 'tdesign-react';

import Light403Icon from 'assets/images/403.png';
import Light404Icon from 'assets/images/404.png';
import Light500Icon from 'assets/images/500.png';
import style from './index.module.less';

type TCode = '403' | '404' | '500';
interface IErrorProps {
  code: TCode;
  title?: string;
  desc?: string;
}

const errorInfo = {
  '403': {
    title: '403 Forbidden',
    desc: '抱歉，您无权限访问此页面',
    icon: Light403Icon,
  },
  '404': {
    title: '404 Not Found',
    desc: '抱歉，您访问的页面不存在。',
    icon: Light404Icon,
  },
  '500': {
    title: '500 Internal Server Error',
    desc: '抱歉，服务器出错啦！',
    icon: Light500Icon,
  },
};

const ErrorPage = (props: IErrorProps) => {
  const info = errorInfo[props.code];
  return (
    <div className={style.errorBox}>
      <img src={info?.icon} className={style.icon} />
      <div className={style.title}>{info?.title}</div>
      <div className={style.description}>{info?.desc}</div>
      <Button theme='primary'>返回首页</Button>
    </div>
  );
};

export default memo(ErrorPage);
