import React from 'react';
import classnames from 'classnames';
import { dataInfo } from '../consts';
import Card from 'components/Card';
import Style from './Base.module.less';

const Base = () => (
  <Card title='基本信息'>
    <div className={Style.infoBox}>
      {dataInfo.map((item) => (
        <div key={item.id} className={Style.infoBoxItem}>
          <h1>{item.name}</h1>
          <span
            className={classnames({
              [Style.inProgress]: item.type === 'status',
              [Style.pdf]: item.type === 'link',
            })}
          >
            {item.type === 'status' && <i></i>}
            {item.value}
          </span>
        </div>
      ))}
    </div>
  </Card>
);

export default React.memo(Base);
