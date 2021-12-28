import React, { memo, useState } from 'react';
import { Row, Col, DatePicker, Radio, Table } from '@tencent/tdesign-react';
import { Icon } from '@tencent/tdesign-icons-react';
import { Tvision2Area, Tvision2Line, Tvision2Bar, Tvision2Pie } from '@tencent/react-tvision2';
import classnames from 'classnames';

import {
  PANE_LIST,
  MICRO_CHART_OPTIONS_LINE,
  MICRO_CHART_OPTIONS_BAR,
  SALE_COLUMNS,
  SALE_Trend_LIST,
} from './constant';
import type { DashboardPanel } from './constant';
import { getLineChartOptions, getPieChartOptions } from './chart';

import { RECENT_7_DAYS } from '../common/date';

import Board from 'pages/Dashboard/components/Board';
import Trend from '../components/Trend';

import Style from './index.module.less';

const gutter = [16, 16];

const asideList: Array<React.ReactElement> = [
  <div key='dashboard-line-chart' className={Style.paneLineChart}>
    <Tvision2Line
      style={{ height: 56 }}
      option={{
        dataset: [[]],
        injectOption: (option) => ({ ...option, ...MICRO_CHART_OPTIONS_LINE }),
      }}
    ></Tvision2Line>
  </div>,
  <div key='dashboard-column-chart' className={Style.paneColumnChart}>
    <Tvision2Bar
      style={{ height: 36 }}
      option={{
        dataset: [[]],
        injectOption: (option) => ({ ...option, ...MICRO_CHART_OPTIONS_BAR }),
      }}
    ></Tvision2Bar>
  </div>,
  <div key='dashboard-user-icon' className={Style.iconWrap}>
    <Icon name='usergroup' className={Style.svgIcon} />
  </div>,
  <div key='dashboard-order-icon' className={Style.iconWrap}>
    <Icon name='file' className={Style.svgIcon} />
  </div>,
];

const PaneBox = ({ value, dark = false, index = 0 }: { value: DashboardPanel; dark: boolean; index: number }) => (
  <div className={classnames(Style.paneBox, { [Style.paneBox_dark]: dark })}>
    <div className={Style.paneTop}>
      <span>{value.number}</span>
    </div>
    <div className={Style.paneSide}>{asideList[index]}</div>
    <div className={Style.paneBottom}>
      <div className={Style.bottomBar}>
        自从上周以来
        <Trend
          type={value.upTrend ? 'up' : 'down'}
          isReverseColor={index === 0}
          description={value.upTrend || value.downTrend || ''}
        />
      </div>
      <Icon name='chevron-right' />
    </div>
  </div>
);

const DefaultDatePicker = (onChange: (value: Array<string>) => void) => (
  <DatePicker
    style={{ width: 240 }}
    mode='date'
    range
    placeholder="['开始时间', '结束时间']"
    defaultValue={RECENT_7_DAYS}
    onChange={(value: Array<string>) => onChange(value)}
  />
);

const DateRadioGroup = (
  <Radio.Group defaultValue='recent_week'>
    <Radio.Button value='recent_week'>本周</Radio.Button>
    <Radio.Button value='recent_month'>近三个月</Radio.Button>
  </Radio.Group>
);

// 4 pan in top banner
const TopPanel = () => (
  <Row gutter={gutter}>
    {PANE_LIST.map((item, index) => (
      <Col key={item.title} span={3}>
        <Board subtitle={item.title} dark={index === 0} size='small' style={{ height: 168 }}>
          <PaneBox value={item} dark={index === 0} index={index} />
        </Board>
      </Col>
    ))}
  </Row>
);

// line and pie chart in middle area
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
        <Board title=' 统计数据 ' description='(万元)' operation={DefaultDatePicker(onTimeChange)}>
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
        <Board title=' 销售渠道 ' description='2021-12'>
          <Tvision2Pie
            style={{ width: 280, height: 280, margin: '0 auto' }}
            option={{
              dataset: [[]],
              injectOption: (option) => ({ ...option, ...getPieChartOptions() }),
            }}
          />
        </Board>
      </Col>
    </Row>
  );
};

// rank list of sale order
const RankList = () => (
  <Row gutter={gutter} className={Style.rowContainer}>
    <Col span={6}>
      <Board title='销售订单排名' operation={DateRadioGroup}>
        <Table columns={SALE_COLUMNS} rowKey='productName' size='large' data={SALE_Trend_LIST}></Table>
      </Board>
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
