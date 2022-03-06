import React, { memo } from 'react';
import MonthPurchase from './components/MonthPurchase';
import PurchaseTrend from './components/PurchaseTrend';
import PurchaseSatisfaction from './components/Satisfaction';
import Style from './index.module.less';

export default memo(() => (
  <div className={Style.dashboardDetail}>
    <MonthPurchase />
    <PurchaseTrend />
    <PurchaseSatisfaction />
  </div>
));
