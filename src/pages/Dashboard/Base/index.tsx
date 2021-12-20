import React, { memo } from 'react';
import { Row, Col } from '@tencent/tdesign-react';

import Card from 'components/Card';

import style from './index.module.less';

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

export default memo(() => (
  <div className={style.viewDashboard}>
    <Row gutter={gutter}>
      <Col span={3}>
        <Card subtitle='总收入'></Card>
      </Col>
      <Col span={3}>
        <Card subtitle='总退款'></Card>
      </Col>
      <Col span={3}>
        <Card subtitle='活跃用户（个）'></Card>
      </Col>
      <Col span={3}>
        <Card subtitle='产生订单（个）'></Card>
      </Col>
    </Row>
    <Row gutter={gutter} className={style.rowContainer}>
      <Col span={9}>
        <Card title='统计数据' description='(万元)2021-12'></Card>
      </Col>
      <Col span={3}>
        <Card title='销售渠道' description='2021-12'></Card>
      </Col>
    </Row>
    <Row gutter={gutter} className={style.rowContainer}>
      <Col span={6}>
        <Card title='销售订单排名'></Card>
      </Col>
      <Col span={6}>
        <Card title='采购订单排名'></Card>
      </Col>
    </Row>
    <div className={style.overviewPanel}>
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
