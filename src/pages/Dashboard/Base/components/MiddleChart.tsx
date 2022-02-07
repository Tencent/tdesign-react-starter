import React, { useState } from 'react';
import { Col, Row } from 'tdesign-react';
import ReactEcharts from 'echarts-for-react';
import Board from '../../common/Board';
import LastWeekDatePicker from '../../common/DatePicker';
import { getLineChartOptions, getPieChartOptions } from '../chart';
import Style from '../index.module.less';

const gutter = [16, 16];

const MiddleChart = () => {
  const lineOptions = getLineChartOptions();
  const pieOptions = getPieChartOptions();
  const [customOptions, setCustomOptions] = useState(lineOptions);
  const onTimeChange = (value: Array<string>) => {
    const options = getLineChartOptions(value);
    setCustomOptions(options);
  };
  return (
    <Row gutter={gutter} className={Style.rowContainer}>
      <Col xs={12} xl={9} span={12}>
        <Board title=' 统计数据 ' description='(万元)' operation={LastWeekDatePicker(onTimeChange)}>
          <ReactEcharts
            option={customOptions} // option：图表配置项
            notMerge={true}
            lazyUpdate={true}
            style={{ height: 280 }}
          />
        </Board>
      </Col>
      <Col xs={12} xl={3} span={12}>
        <Board title=' 销售渠道 ' description='2021-12'>
          <ReactEcharts
            option={pieOptions} // option：图表配置项
            notMerge={true}
            lazyUpdate={true}
            style={{ width: 280, height: 280, margin: '0 auto' }}
          />
        </Board>
      </Col>
    </Row>
  );
};

export default React.memo(MiddleChart);
