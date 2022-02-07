import React from 'react';
import { Icon } from 'tdesign-icons-react';
import ReactEcharts from 'echarts-for-react';
import classnames from 'classnames';
import Trend from '../../common/Trend';
import { DashboardPanel, MICRO_CHART_OPTIONS_BAR, MICRO_CHART_OPTIONS_LINE } from '../constant';
import Style from '../index.module.less';

interface IPros extends React.HTMLAttributes<HTMLElement> {
  value: DashboardPanel;
  dark?: boolean;
  index: number;
}

const asideList: Array<React.ReactElement> = [
  <div key='dashboard-line-chart' className={Style.paneLineChart}>
    <ReactEcharts
      option={MICRO_CHART_OPTIONS_LINE} // option：图表配置项
      notMerge={true}
      lazyUpdate={true}
      style={{ height: 56 }}
    />
  </div>,
  <div key='dashboard-bar-chart' className={Style.paneBarChart}>
    <ReactEcharts
      option={MICRO_CHART_OPTIONS_BAR} // option：图表配置项
      notMerge={true}
      lazyUpdate={true}
      style={{ height: 36 }}
    />
  </div>,
  <div key='dashboard-user-icon' className={Style.iconWrap}>
    <Icon name='usergroup' className={Style.svgIcon} />
  </div>,
  <div key='dashboard-order-icon' className={Style.iconWrap}>
    <Icon name='file' className={Style.svgIcon} />
  </div>,
];

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

export default React.memo(PaneBox);
