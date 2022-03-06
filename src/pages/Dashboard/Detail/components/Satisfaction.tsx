import React, { useState } from 'react';
import { Button } from 'tdesign-react';
import ReactEcharts from 'echarts-for-react';
import LastWeekDatePicker from 'components/DatePicker';
import Board from 'components/Card';
import useDynamicChart from 'utils/hooks/useDynamicChart';
import { getScatterChartOptions } from '../chart';
import Style from './Satisfaction.module.less';

const Satisfaction = () => {
  const options = getScatterChartOptions();
  const [customOptions, setCustomOptions] = useState(options);
  const onTimeChange = (value: Array<string>) => {
    const options = getScatterChartOptions(value);
    setCustomOptions(options);
  };

  const dynamicChartOption = useDynamicChart(customOptions, {
    placeholderColor: ['legend.textStyle.color', 'xAxis.axisLabel.color', 'yAxis.axisLabel.color'],
  });

  return (
    <div className={Style.satisfactionPanel}>
      <Board
        title='采购商品满意度分布'
        operation={
          <div className={Style.operation}>
            {LastWeekDatePicker(onTimeChange)}
            <Button className={Style.exportBtn}>导出数据</Button>
          </div>
        }
      >
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

export default React.memo(Satisfaction);
