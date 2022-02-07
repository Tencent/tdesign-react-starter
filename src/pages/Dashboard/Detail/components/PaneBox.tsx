import React from 'react';
import Style from '../index.module.less';
import Trend, { TrendType } from '../../common/Trend';
import { Icon } from 'tdesign-icons-react';

interface IProps extends TrendType {
  count: number | string;
}

const PaneBox = ({ count = 0, type = 'up', description }: IProps): React.ReactElement => (
  <>
    <div className={Style.countValue}> {count}</div>
    <div className={Style.paneBtm}>
      <div>
        环比
        <Trend type={type} description={description} />
      </div>
      <Icon name='chevron-right' />
    </div>
  </>
);

export default React.memo(PaneBox);
