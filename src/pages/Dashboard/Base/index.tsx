import React, { memo, useState } from 'react';
import { Row, Col, DatePicker } from '@tencent/tdesign-react';
import { Tvision2Area } from '@tencent/react-tvision2';
import dayjs from 'dayjs';
import classnames from 'classnames';

import { PANE_LIST } from './constant';
import type { DashboardPanel } from './constant';
import { getLineChartOptions } from './chart';

import Board from 'pages/Dashboard/components/Board';
import Trend from '../components/Trend';

import Style from './index.module.less';

const gutter = [16, 16];

const PaneBox = ({ value, dark = false, index = 0 }: { value: DashboardPanel; dark: boolean; index: number }) => (
  <div className={classnames(Style.paneBox, { [Style.paneBoxDark]: dark })}>
    <div className={Style.paneTop}>
      <span>{value.number}</span>
    </div>
    <div className={Style.paneSide}></div>
    <div className={Style.paneBottom}>
      <div className={Style.bottomBar}>
        自从上周以来
        <Trend
          type={value.upTrend ? 'up' : 'down'}
          isReverseColor={index === 0}
          description={value.upTrend || value.downTrend || ''}
        />
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
    {PANE_LIST.map((item, index) => (
      <Col key={item.title} span={3}>
        <Board subtitle={item.title} dark={index === 0}>
          <PaneBox value={item} dark={index === 0} index={index} />
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
