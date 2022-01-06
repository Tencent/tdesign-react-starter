import React, { memo } from 'react';
import { Row, Col, Radio, Table } from 'tdesign-react';
// import classnames from 'classnames';

import Card from 'components/Card';
import { TABLE_COLUMNS } from './constant';
import type { TableModel } from './constant';

import Style from './index.module.less';

const getTableData = (): Array<TableModel> => {
  const list: Array<TableModel> = [];
  const names = [
    '沧州市办公用品采购项目',
    '红河哈尼族彝族自治州办公用品采购项目	',
    '铜川市办公用品采购项目',
    '陇南市办公用品采购项目	',
    '六安市办公用品采购项目	 ',
  ];
  const adminNames = ['顾娟	', '常刚', '郑洋'];
  for (let i = 0; i < 10; i++) {
    const randomNum = Math.random();
    list.push({
      name: names[randomNum * names.length],
      adminName: adminNames[randomNum * adminNames.length],
      telephone: '+86 13587609955',
      updateTime: '2020-05-30 10:02:57',
    });
  }
  return list;
};

const TopChart = () => {
  const tabChange = () => {
    console.log('aa');
  };

  return (
    <Row gutter={16}>
      <Col span={6}>
        <Card title='部署趋势'>
          <div className={Style.deployPanelLeft}>
            <div id='monitorContainer' style={{ width: '100%', height: 265 }}></div>
          </div>
        </Card>
      </Col>
      <Col span={6}>
        <Card title='告警情况'>
          <div slot='option'>
            <Radio.Group default-value='dateVal' onChange={tabChange}>
              <Radio value='dateVal'>本周</Radio>
              <Radio value='monthVal'>本月</Radio>
            </Radio.Group>
          </div>
          <div id='dataContainer' style={{ width: '100%', height: 265 }}></div>
        </Card>
      </Col>
    </Row>
  );
};

const BottomTable = () => {
  const pagination = {
    current: 1,
    pageSize: 10,
    total: 38,
    pageSizeOptions: [],
  };
  return (
    <Card title='项目列表'>
      <Table columns={TABLE_COLUMNS} rowKey='index' pagination={pagination} data={getTableData()}></Table>
    </Card>
  );
};

const DeployDetail = () => (
  <div className={Style.deployPanel}>
    <TopChart />
    <BottomTable />
  </div>
);

export default memo(DeployDetail);
