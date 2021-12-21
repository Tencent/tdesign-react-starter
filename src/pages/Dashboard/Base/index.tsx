import React, { memo } from 'react';
import { Row, Col } from '@tencent/tdesign-react';

import Card from 'components/Card';

import Style from './index.module.less';

const gutter = [16, 16];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data: any = {
  summary: {
    revenue: '¥ 28,425.00',
    refund: '¥ 768.00',
    users: 1126,
    orders: 527,
  },
};

const Trend = ({ numValue = '' }: { numValue: string }) => (
  <div className={Style.trendBox}>
    <div className={Style.trendTop}>
      <span>{numValue}</span>
    </div>
    <div className={Style.trendSide}></div>
    <div className={Style.trendBottom}>
      <div className={Style.bottomBar}>
        自从上周以来
        <span className={Style.barChange}></span>
      </div>
    </div>
  </div>
);

export default memo(() => (
  <div className={Style.viewDashboard}>
    <Row gutter={gutter}>
      <Col span={3}>
        <Card subtitle='总收入' isDark={true}>
          <Trend numValue={data.summary.revenue} />
        </Card>
      </Col>
      <Col span={3}>
        <Card subtitle='总退款'>
          <Trend numValue={data.summary.refund} />
        </Card>
      </Col>
      <Col span={3}>
        <Card subtitle='活跃用户（个）'>
          <Trend numValue={data.summary.users} />
        </Card>
      </Col>
      <Col span={3}>
        <Card subtitle='产生订单（个）'>
          <Trend numValue={data.summary.orders} />
        </Card>
      </Col>
    </Row>
    <Row gutter={gutter} className={Style.rowContainer}>
      <Col span={9}>
        <Card title='统计数据' description='(万元)2021-12'></Card>
      </Col>
      <Col span={3}>
        <Card title='销售渠道' description='2021-12'></Card>
      </Col>
    </Row>
    <Row gutter={gutter} className={Style.rowContainer}>
      <Col span={6}>
        <Card title='销售订单排名'></Card>
      </Col>
      <Col span={6}>
        <Card title='采购订单排名'></Card>
      </Col>
    </Row>
    <div className={Style.overviewPanel}>
      <Row gutter={gutter}>
        <Col span={9}>
          <Card title='出入库概览' description='(件)'></Card>
        </Col>
        <Col span={3}>
          <Card></Card>
        </Col>
      </Row>
    </div>
  </div>
));
