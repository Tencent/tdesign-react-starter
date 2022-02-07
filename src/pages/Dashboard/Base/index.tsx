import React, { memo } from 'react';
import TopPanel from './components/TopPanel';
import MiddleChart from './components/MiddleChart';
import RankList from './components/RankList';
import Overview from './components/Overview';

import Style from './index.module.less';

const DashBoard = () => (
  <div className={Style.dashboardPanel}>
    <TopPanel />
    <MiddleChart />
    <RankList />
    <Overview />
  </div>
);

export default memo(DashBoard);
