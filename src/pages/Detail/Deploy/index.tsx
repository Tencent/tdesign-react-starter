import React, { memo, useState, useEffect } from 'react';
import { Row, Col, Radio, Table, Dialog } from 'tdesign-react';
import type { TableSort, TdPrimaryTableProps } from 'tdesign-react/es/table';
import { Tvision2Line, Tvision2Bar } from 'components/Charts/Tvision';
import classnames from 'classnames';

import Card from 'components/Card';
import { TABLE_COLUMNS, BASE_INFO_DATA } from './constant';
import type { TableModel } from './constant';
import { getLineOptions, getBarOptions } from './chart';

import Style from './index.module.less';
import type { EChartOption } from 'echarts';

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
      name: names[Math.floor(randomNum * names.length)],
      adminName: adminNames[Math.floor(randomNum * adminNames.length)],
      telephone: '+86 13587609955',
      updateTime: '2020-05-30 10:02:57',
    });
  }
  return list;
};

const TopChart = () => {
  const [lineOptions, setLineOptions] = useState<EChartOption>(getLineOptions);
  const [barOptions, setBarOptions] = useState<EChartOption>(getBarOptions);
  useEffect(() => {
    const timer = setInterval(() => setLineOptions(getLineOptions()), 3000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const tabChange = (isMonth: boolean) => {
    setBarOptions(getBarOptions(isMonth));
  };

  return (
    <Row gutter={16}>
      <Col span={6}>
        <Card title='部署趋势'>
          <div className={Style.deployPanelLeft}>
            <Tvision2Line
              style={{ height: 265 }}
              option={{
                dataset: [[]],
                injectOption: (option) => ({ ...option, ...lineOptions }),
              }}
            />
          </div>
        </Card>
      </Col>
      <Col span={6}>
        <Card
          title='告警情况'
          extra={
            <Radio.Group defaultValue='week' onChange={(val) => tabChange(val === 'month')}>
              <Radio.Button value='week'>本周</Radio.Button>
              <Radio.Button value='month'>本月</Radio.Button>
            </Radio.Group>
          }
        >
          <Tvision2Bar
            style={{ height: 265 }}
            option={{
              dataset: [[]],
              injectOption: (option) => ({ ...option, ...barOptions }),
            }}
          />
        </Card>
      </Col>
    </Row>
  );
};

interface IProps {
  visible: boolean;
}

const ManagementPopup = ({ visible }: IProps): React.ReactElement => {
  const [isShow, setVisible] = useState<boolean>(visible);
  const handleConfirm = () => setVisible(!isShow);

  return (
    <Dialog
      header='基本信息'
      visible={isShow}
      onClose={handleConfirm}
      onConfirm={handleConfirm}
      onCancel={handleConfirm}
    >
      <div>
        <div className={Style.popupBox}>
          {BASE_INFO_DATA.map((item, index) => (
            <div key={index} className={Style.popupItem}>
              <h1>{item.name}</h1>
              <p
                className={classnames({
                  [Style.popupItem_green]: item.type && item.type.value === 'green',
                  [Style.popupItem_blue]: item.type && item.type.value === 'blue',
                })}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Dialog>
  );
};

const BottomTable = () => {
  const [sort, setSort] = useState<TableSort>({ sortBy: 'name', descending: true });
  const [visible, setVisible] = useState(false);
  const [{ tableData }, setTableData] = useState({ tableData: getTableData() });
  const pagination = {
    pageSize: 10,
    total: 38,
    pageSizeOptions: [],
  };

  const getTableColumns = (columns: TdPrimaryTableProps['columns']): TdPrimaryTableProps['columns'] => {
    if (columns) {
      columns[4].cell = (context) => {
        const { rowIndex } = context;
        return (
          <>
            <a className={Style.operationLink} onClick={() => setVisible(!visible)}>
              管理
            </a>
            <a className={Style.operationLink} onClick={() => removeRow(rowIndex)}>
              删除
            </a>
          </>
        );
      };
    }
    return columns;
  };

  const removeRow = (rowIndex: number) => {
    tableData.splice(rowIndex, 1);
    setTableData({ tableData });
  };

  return (
    <>
      <Card title='项目列表' style={{ marginTop: 16 }}>
        <Table
          columns={getTableColumns(TABLE_COLUMNS)}
          rowKey='index'
          pagination={pagination}
          data={tableData}
          sort={sort}
          onSortChange={(sort: TableSort) => setSort(sort)}
        ></Table>
      </Card>
      {visible && <ManagementPopup visible={visible} />}
    </>
  );
};

const DeployDetail = () => (
  <div className={Style.deployPanel}>
    <TopChart />
    <BottomTable />
  </div>
);

export default memo(DeployDetail);
