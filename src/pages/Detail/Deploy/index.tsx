import React, { memo } from 'react';
import PageBox from 'components/PageBox';
import TopChart from './components/TopChart';
import BottomTable from './components/BottomTable';

const Deploy = () => (
  <PageBox>
    <TopChart />
    <BottomTable />
  </PageBox>
);

export default memo(Deploy);
