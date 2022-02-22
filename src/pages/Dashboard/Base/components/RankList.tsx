import React from 'react';
import { Col, Radio, Row, Table } from 'tdesign-react';
import { TdPrimaryTableProps } from 'tdesign-react/es/table';
import classnames from 'classnames';
import Board from '../../common/Board';
import Trend from '../../common/Trend';
import { PURCHASE_COLUMNS, PURCHASE_TREND_LIST, SALE_COLUMNS, SALE_TREND_LIST } from '../constant';
import Style from '../index.module.less';

const gutter = [16, 16];

const DateRadioGroup = (
  <Radio.Group defaultValue='recent_week'>
    <Radio.Button value='recent_week'>本周</Radio.Button>
    <Radio.Button value='recent_month'>近三个月</Radio.Button>
  </Radio.Group>
);

const getTableColumns = (columns: TdPrimaryTableProps['columns']): TdPrimaryTableProps['columns'] => {
  if (columns) {
    columns[0].render = (context) => {
      const { type, rowIndex } = context;
      if (type === 'title') return '排名';
      return <span className={classnames(Style.rankNO, { [Style.rankNO_top]: rowIndex < 3 })}>{rowIndex + 1}</span>;
    };
    columns[2].render = (context) => {
      const { type, row } = context;
      if (type === 'title') return '较上周';
      return <Trend type={row.growUp > 0 ? 'up' : 'down'} description={Math.abs(row.growUp)} />;
    };
    columns[5].render = (context) => {
      const { type, row } = context;
      if (type === 'title') return '操作';
      return (
        <a className={Style.linkBtn} onClick={() => console.log(row)}>
          操作
        </a>
      );
    };
  }
  return columns;
};

const RankList = () => (
  <Row gutter={gutter} className={Style.rowContainer}>
    <Col xs={12} xl={6} span={12}>
      <Board title='销售订单排名' operation={DateRadioGroup}>
        <Table
          columns={getTableColumns(SALE_COLUMNS)}
          rowKey='productName'
          size='medium'
          data={SALE_TREND_LIST}
        ></Table>
      </Board>
    </Col>
    <Col xs={12} xl={6} span={12}>
      <Board title='采购订单排名' operation={DateRadioGroup}>
        <Table
          columns={getTableColumns(PURCHASE_COLUMNS)}
          rowKey='productName'
          size='medium'
          data={PURCHASE_TREND_LIST}
        ></Table>
      </Board>
    </Col>
  </Row>
);

export default React.memo(RankList);
