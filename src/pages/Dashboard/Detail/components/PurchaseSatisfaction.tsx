import React, { useState } from 'react';
import { Button } from 'tdesign-react';
import ReactEcharts from 'echarts-for-react';
import classnames from 'classnames';
import { getScatterChartOptions } from '../chart';
import LastWeekDatePicker from '../../common/DatePicker';
import Board from '../../common/Board';
import useDynamicChart from 'utils/hooks/useDynamicChart';

import Style from '../index.module.less';

const PurchaseSatisfaction = () => {
  const options = getScatterChartOptions();
  const [customOptions, setCustomOptions] = useState(options);
  const onTimeChange = (value: Array<string>) => {
    const options = getScatterChartOptions(value);
    setCustomOptions(options);
  };

  const dynamicChartOption = useDynamicChart(customOptions, {
    placeholderColor: ['legend.textStyle.color', 'xAxis.axisLabel.color', 'yAxis.axisLabel.color'],
  });

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
          option={dynamicChartOption} // option：图表配置项
          notMerge={true}
          lazyUpdate={true}
          style={{ height: 374 }}
        />
      </Board>
    </div>
  );
};

export default React.memo(PurchaseSatisfaction);
