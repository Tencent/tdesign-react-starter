import React, { memo, useState, useEffect } from 'react';
import { Row, Col, Radio, Table, Dialog } from 'tdesign-react';
import type { TableSort, TdPrimaryTableProps } from 'tdesign-react/es/table';
import ReactEcharts from 'echarts-for-react';
import classnames from 'classnames';

import request from 'utils/request';

import Card from 'components/Card';
import { TABLE_COLUMNS, BASE_INFO_DATA } from './constant';
import { getLineOptions, getBarOptions } from './chart';

import Style from './index.module.less';
import type { EChartOption } from 'echarts';
import useDynamicChart from 'utils/hooks/useDynamicChart';

const DynamicLineChart = () => {
  const [lineOptions, setLineOptions] = useState<EChartOption>(getLineOptions());
  const dynamicLineChartOptions = useDynamicChart(lineOptions, {
    placeholderColor: ['legend.textStyle.color', 'xAxis.axisLabel.color', 'yAxis.axisLabel.color'],
  });

  useEffect(() => {
    const timer = setInterval(() => setLineOptions(getLineOptions()), 3000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <ReactEcharts
      option={dynamicLineChartOptions} // option：图表配置项
      notMerge={true}
      lazyUpdate={true}
      style={{ height: 265 }}
    />
  );
};

const TopChart = () => {
  const [barOptions, setBarOptions] = useState<EChartOption>(getBarOptions());

  const tabChange = (isMonth: boolean) => {
    setBarOptions(getBarOptions(isMonth));
  };
  const dynamicBarChartOptions = useDynamicChart(barOptions, {
    placeholderColor: ['legend.textStyle.color', 'xAxis.0.axisLabel.color', 'yAxis.0.axisLabel.color'],
  });
  return (
    <Row gutter={16}>
      <Col span={6}>
        <Card title='部署趋势'>
          <div className={Style.deployPanelLeft}>
            <DynamicLineChart />
          </div>
        </Card>
      </Col>
      <Col span={6}>
        <Card
          title='告警情况'
          operation={
            <Radio.Group defaultValue='week' onChange={(val) => tabChange(val === 'month')}>
              <Radio.Button value='week'>本周</Radio.Button>
              <Radio.Button value='month'>本月</Radio.Button>
            </Radio.Group>
          }
        >
          <ReactEcharts
            option={dynamicBarChartOptions} // option：图表配置项
            notMerge={true}
            lazyUpdate={true}
            style={{ height: 265 }}
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
  const [{ tableData }, setTableData] = useState({ tableData: [] });
  const pagination = {
    pageSize: 10,
    total: tableData.length,
    pageSizeOptions: [],
  };

  useEffect(() => {
    request.get('/api/get-project-list').then((res: any) => {
      if (res.code === 0) {
        const { list = [] } = res.data;
        setTableData({ tableData: list });
      }
    });
  }, []);

  const removeRow = (rowIndex: number) => {
    console.log(' rowIndex = ', rowIndex);
    console.log(' tableData = ', tableData);

    tableData.splice(rowIndex, 1);
    setTableData({ tableData });
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

  return (
    <>
      <Card title='项目列表' style={{ marginTop: 16 }}>
        <Table
          columns={getTableColumns(TABLE_COLUMNS)}
          rowKey='index'
          pagination={pagination}
          data={tableData}
          sort={sort}
          onSortChange={(newSort: TableSort) => setSort(newSort)}
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
