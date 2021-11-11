import React from 'react';
import classnames from 'classnames';

import Style from './index.module.less';

interface IErrorPageProps {
  code: '403' | '404' | '500';
  msg?: string;
}

const ErrorPage = (props: IErrorPageProps) => {
  let codeStyle;

  switch (props.code) {
    case '403':
      codeStyle = Style.error403;
      break;
    case '404':
      codeStyle = Style.error404;
      break;
    case '500':
      codeStyle = Style.error500;
      break;
  }

  return (
    <div className={Style.errorBox}>
      <div className={classnames(Style.errorImage, codeStyle)}></div>
      <div className={Style.errorCode}>{props.code}</div>
      <div className={Style.errorMsg}>{props.msg ? props.msg : '发生错误'}</div>
    </div>
  );
};

export default React.memo(ErrorPage);
