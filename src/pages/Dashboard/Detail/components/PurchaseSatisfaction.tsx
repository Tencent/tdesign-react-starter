import { getScatterChartOptions } from '../chart';
import React, { useState } from 'react';
import LastWeekDatePicker from '../../common/DatePicker';
import { Button } from 'tdesign-react';
import Style from '../index.module.less';
import classnames from 'classnames';
import Board from '../../common/Board';
import ReactEcharts from 'echarts-for-react';

const PurchaseSatisfaction = () => {
  const options = getScatterChartOptions();
  const [customOptions, setCustomOptions] = useState(options);
  const onTimeChange = (value: Array<string>) => {
    const options = getScatterChartOptions(value);
    setCustomOptions(options);
  };

  const actionComp = (): React.ReactElement => (
    <>
      {LastWeekDatePicker(onTimeChange)}
      <Button className={Style.exportBtn}>导出数据</Button>
    </>
  );
  return (
    <div className={classnames(Style.purchaseSatisfaction, Style.boardMargin)}>
      <Board title='采购商品满意度分布' operation={actionComp()}>
        <ReactEcharts
          option={customOptions} // option：图表配置项
          notMerge={true}
          lazyUpdate={true}
          style={{ height: 374 }}
        />
      </Board>
    </div>
  );
};

export default React.memo(PurchaseSatisfaction);
