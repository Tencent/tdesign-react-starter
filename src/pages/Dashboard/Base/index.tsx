import React, { memo, useState } from 'react';
import { Row, Col, Radio, Table, Button } from 'tdesign-react';
import { Icon } from 'tdesign-icons-react';
import { Tvision2Bar, Tvision2Pie } from '@tencent/react-tvision2';
import { Tvision2Line, Tvision2Area } from 'components/Charts';
import type { TdPrimaryTableProps } from 'tdesign-react/es/table';
import classnames from 'classnames';

import {
  PANE_LIST,
  MICRO_CHART_OPTIONS_LINE,
  MICRO_CHART_OPTIONS_BAR,
  SALE_COLUMNS,
  SALE_Trend_LIST,
  PURCHASE_COLUMNS,
  PURCHASE_TREND_LIST,
  INVENTORY_OVERVIEW,
} from './constant';
import type { DashboardPanel } from './constant';
import { getBarChartOptions, getLineChartOptions, getPieChartOptions } from './chart';

import Board from 'pages/Dashboard/common/Board';
import Trend from '../common/Trend';
import LastWeekDatePicker from '../common/DatePicker';

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
  <div key='dashboard-bar-chart' className={Style.paneBarChart}>
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

interface IPros extends React.HTMLAttributes<HTMLElement> {
  value: DashboardPanel;
  dark?: boolean;
  index: number;
}

const PaneBox = ({ value, dark = false, index = 0 }: IPros) => (
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
      <Icon name='chevron-right' className={Style.rightMore} />
    </div>
  </div>
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
      <Col key={item.title} xs={6} xl={3} span={12}>
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
      <Col xs={12} xl={9} span={12}>
        <Board title=' 统计数据 ' description='(万元)' operation={LastWeekDatePicker(onTimeChange)}>
          <Tvision2Area
            style={{ height: 280 }}
            option={{
              dataset: [[]],
              injectOption: (option) => ({ ...option, ...customOptions }),
            }}
          />
        </Board>
      </Col>
      <Col xs={12} xl={3} span={12}>
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

const getTableColumns = (columns: TdPrimaryTableProps['columns']): TdPrimaryTableProps['columns'] => {
  if (columns) {
    columns[0].render = (context) => {
      const { type, rowIndex } = context;
      if (type === 'title') return '排名';
      return <span className={classnames(Style.rankNO, { [Style.rankNO_top]: rowIndex < 3 })}>{rowIndex + 1}</span>;
    };
    columns[2].render = (context) => {
      const { type, row } = context;
      if (type === 'title') return '较上周';
      return <Trend type={row.growUp > 0 ? 'up' : 'down'} description={Math.abs(row.growUp)} />;
    };
    columns[5].render = (context) => {
      const { type, row } = context;
      if (type === 'title') return '操作';
      return (
        <a className={Style.linkBtn} onClick={() => console.log(row)}>
          操作
        </a>
      );
    };
  }
  return columns;
};

// rank list of sale order
const RankList = () => (
  <Row gutter={gutter} className={Style.rowContainer}>
    <Col xs={12} xl={6} span={12}>
      <Board title='销售订单排名' operation={DateRadioGroup}>
        <Table
          columns={getTableColumns(SALE_COLUMNS)}
          rowKey='productName'
          size='medium'
          data={SALE_Trend_LIST}
        ></Table>
      </Board>
    </Col>
    <Col xs={12} xl={6} span={12}>
      <Board title='采购订单排名' operation={DateRadioGroup}>
        <Table
          columns={getTableColumns(PURCHASE_COLUMNS)}
          rowKey='productName'
          size='medium'
          data={PURCHASE_TREND_LIST}
        ></Table>
      </Board>
    </Col>
  </Row>
);

const Overview = (): React.ReactElement => {
  const options = getBarChartOptions();
  const [customOptions, setCustomOptions] = useState(options);
  const onTimeChange = (value: Array<string>) => {
    const options = getBarChartOptions(value);
    setCustomOptions(options);
  };
  return (
    <div className={classnames(Style.overviewPanel, Style.rowContainer)}>
      <Row>
        <Col xs={12} xl={9} span={12}>
          <Board title=' 出入库概览 ' description='(件)' operation={LastWeekDatePicker(onTimeChange)}>
            <Tvision2Bar
              style={{ height: 351 }}
              option={{
                dataset: [[]],
                injectOption: (option) => ({ ...option, ...customOptions }),
              }}
            ></Tvision2Bar>
          </Board>
        </Col>
        <Col xs={12} xl={3} span={12}>
          <Board operation={<Button>导出数据</Button>}>
            <Row gutter={0}>
              <Col span={12}>
                <Board subtitle='' description='本月出库总计（件）' size='small'>
                  <PaneBox value={INVENTORY_OVERVIEW.inbound} index={4}></PaneBox>
                </Board>
              </Col>
              <Col span={12}>
                <Board subtitle='' description='本月入库总计（件）' size='small'>
                  <PaneBox value={INVENTORY_OVERVIEW.outbound} index={5}></PaneBox>
                </Board>
              </Col>
            </Row>
          </Board>
        </Col>
      </Row>
    </div>
  );
};

const DashBoard = () => (
  <div className={Style.dashboardPanel}>
    <TopPanel />
    <MiddleChart />
    <RankList />
    <Overview />
  </div>
);

export default memo(DashBoard);
