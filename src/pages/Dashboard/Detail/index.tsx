import React, { memo } from 'react';
import PageBox from 'components/PageBox';
import MonthPurchase from './components/MonthPurchase';
import PurchaseTrend from './components/PurchaseTrend';
import PurchaseSatisfaction from './components/Satisfaction';

export default memo(() => (
  <PageBox>
    <MonthPurchase />
    <PurchaseTrend />
    <PurchaseSatisfaction />
  </PageBox>
));
