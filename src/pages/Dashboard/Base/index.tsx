import React, { memo, useState } from 'react';
import { Row, Col, DatePicker } from '@tencent/tdesign-react';
import { Tvision2Area } from '@tencent/react-tvision2';
import dayjs from 'dayjs';
import _ from 'lodash';

import Board from 'pages/Dashboard/components/Board';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PANE_LIST } from './constant';
import { getLineChartOptions } from './chart';

import Style from './index.module.less';

const gutter = [16, 16];

_.range(5, 10);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Trend = ({ numValue = '' }: { numValue: string | number }) => (
  <div className={Style.trendBox}>
    <div className={Style.trendTop}>
      <span>{numValue}</span>
    </div>
    <div className={Style.trendSide}></div>
    <div className={Style.trendBottom}>
      <div className={Style.bottomBar}>
        自从上周以来
        <span className={Style.barChange}></span>
      </div>
    </div>
  </div>
);

const DefaultDatePicker = (onChange: (value: Array<string>) => void) => (
  <DatePicker
    style={{ width: 240 }}
    mode='date'
    range
    placeholder="['开始时间', '结束时间']"
    defaultValue={[dayjs().subtract(6, 'day'), dayjs()]}
    onChange={(value: Array<string>) => onChange(value)}
  />
);

const TopPanel = () => (
  <Row gutter={gutter}>
    {PANE_LIST.map((item) => (
      <Col key={item.title} span={3}>
        <Board subtitle={item.title} dark={true}>
          <Trend numValue={item.number} />
        </Board>
      </Col>
    ))}
  </Row>
);

const MiddleChart = () => {
  const options = getLineChartOptions();
  const [customOptions, setCustomOptions] = useState(options);
  const onTimeChange = (value: Array<string>) => {
    const options = getLineChartOptions(value);
    setCustomOptions(options);
  };
  return (
    <Row gutter={gutter} className={Style.rowContainer}>
      <Col span={9}>
        <Board title='统计数据' description='(万元)' operation={DefaultDatePicker(onTimeChange)}>
          <Tvision2Area
            style={{ height: 280 }}
            option={{
              dataset: [[]],
              injectOption: (option) => ({ ...option, ...customOptions }),
            }}
          />
        </Board>
      </Col>
      <Col span={3}>
        <Board title='销售渠道' description='2021-12'></Board>
      </Col>
    </Row>
  );
};

const RankList = () => (
  <Row gutter={gutter} className={Style.rowContainer}>
    <Col span={6}>
      <Board title='销售订单排名'></Board>
    </Col>
    <Col span={6}>
      <Board title='采购订单排名'></Board>
    </Col>
  </Row>
);

const Overview = (): React.ReactElement => (
  <div className={Style.overviewPanel}>
    <Row gutter={gutter}>
      <Col span={9}>
        <Board title='出入库概览' description='(件)'></Board>
      </Col>
      <Col span={3}>
        <Board></Board>
      </Col>
    </Row>
  </div>
);

const DashBoard = () => (
  <div className={Style.dashboardPanel}>
    <TopPanel />
    <MiddleChart />
    <RankList />
    <Overview />
  </div>
);

export default memo(DashBoard);
