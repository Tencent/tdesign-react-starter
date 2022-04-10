import React, { memo } from 'react';
import PageBox from 'components/PageBox';
import TopPanel from './components/TopPanel';
import MiddleChart from './components/MiddleChart';
import RankList from './components/RankList';
import Overview from './components/Overview';

const DashBoard = () => (
  <PageBox>
    <TopPanel />
    <MiddleChart />
    <RankList />
    <Overview />
  </PageBox>
);

export default memo(DashBoard);
