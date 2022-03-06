import React, { useState } from 'react';
import { Button, Col, Row } from 'tdesign-react';
import ReactEcharts from 'echarts-for-react';
import useDynamicChart from 'utils/hooks/useDynamicChart';
import Card from 'components/Card';
import Board from 'components/Board';
import LastWeekDatePicker from 'components/DatePicker';
import { getBarChartOptions } from '../chart';
import Style from './Overview.module.less';

const options = getBarChartOptions();
const Overview = (): React.ReactElement => {
  const [customOptions, setCustomOptions] = useState(options);
  const onTimeChange = (value: Array<string>) => {
    // eslint-disable-next-line no-shadow
    const options = getBarChartOptions(value);
    setCustomOptions(options);
  };

  const dynamicChartOption = useDynamicChart(customOptions, {
    placeholderColor: ['legend.textStyle.color', 'xAxis.axisLabel.color', 'yAxis.axisLabel.color'],
  });

  return (
    <div className={Style.overviewPanel}>
      <Row>
        <Col xs={12} xl={9} span={12}>
          <Card title=' 出入库概览 ' description='(件)' operation={LastWeekDatePicker(onTimeChange)}>
            <ReactEcharts
              option={dynamicChartOption} // option：图表配置项
              notMerge={true}
              lazyUpdate={true}
              style={{ height: 351 }}
            />
          </Card>
        </Col>
        <Col xs={12} xl={3} span={12}>
          <Card operation={<Button>导出数据</Button>}>
            <Row>
              <Col span={12}>
                <Board title='本月出库总计（件）' count='1726' trend='down' trendNum='20.3%' desc='自从上周以来' />
              </Col>
              <Col span={12}>
                <Board title='活跃用户（个）' count='1126' trend='down' trendNum='20.5%' desc='自从上周以来' />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default React.memo(Overview);
