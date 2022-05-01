import React, { memo } from 'react';
import PageBox from 'components/PageBox';
import MonthPurchase from './components/MonthPurchase';
import PurchaseTrend from './components/PurchaseTrend';
import PurchaseSatisfaction from './components/Satisfaction';
import Style from './index.module.less';

export default memo(() => (
  <PageBox className={Style.panel}>
    <MonthPurchase />
    <PurchaseTrend />
    <PurchaseSatisfaction />
  </PageBox>
));
