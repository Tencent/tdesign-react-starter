import React, { useState, memo } from 'react';
import { Row, Col, Button, Dropdown, Tag } from '@tencent/tdesign-react';
import { Icon } from '@tencent/tdesign-icons-react';
import classnames from 'classnames';
import { Tvision2Line, Tvision2Scatter } from '@tencent/react-tvision2';

import Board from '../components/Board';
import Trend from '../components/Trend';
import type { TrendType } from '../components/Trend';

import PANE_LIST, { PRODUCT } from './constant';
import LastWeekDatePicker from '../components/DatePicker';
import { getLineChartOptions, getScatterChartOptions } from './chart';
import type { IProduct } from './constant';

import Style from './index.module.less';

interface IProps extends TrendType {
  count: number | string;
}

const PaneBox = ({ count = 0, type = 'up', description }: IProps): React.ReactElement => (
  <>
    <div className={Style.countValue}> {count}</div>
    <div className={Style.paneBtm}>
      <div>
        环比
        <Trend type={type} description={description}></Trend>
      </div>
      <Icon name='chevron-right' />
    </div>
  </>
);

const MonthPurchase = () => (
  <div className={Style.purchaseOverview}>
    <Board title='本月采购申请情况'>
      <Row gutter={16}>
        {PANE_LIST.map((pane) => (
          <Col key={pane.title} span={3}>
            <Board description={pane.title} size='small' border={true} style={{ height: 170 }}>
              <PaneBox
                count={pane.number}
                type={pane.upTrend ? 'up' : 'down'}
                description={pane.upTrend || pane.downTrend || ''}
              ></PaneBox>
            </Board>
          </Col>
        ))}
      </Row>
    </Board>
  </div>
);

const iconMap = [
  <Icon key='a' name='shop' />,
  <Icon key='b' name='calendar' />,
  <Icon key='c' name='service' />,
  <Icon key='d' name='user' />,
  <Icon key='e' name='laptop' />,
];
const ProductBoard = ({ type, isSetup, description, name }: IProduct): React.ReactElement => {
  const typeMap = ['A', 'B', 'C', 'D', 'E'];
  return (
    <div className={Style.productBoard}>
      <div className={Style.productInner}>
        <Row justify='space-between'>
          <div className={Style.productLogo}>{iconMap[type + 1]}</div>
          <Tag theme='success'>{isSetup ? '已启用' : '已停用'}</Tag>
        </Row>
        <p className={Style.productName}>{name}</p>
        <p className={Style.productDesc}>{description}</p>
        <Row justify='space-between' align='middle' className='cardControlClass'>
          <div className={Style.iconWrap}>
            <Button shape='circle' disabled={!isSetup}>
              {typeMap[type]}
            </Button>
            <Button shape='circle' disabled={!isSetup} className={Style.lightBtn}>
              <Icon name='add' />
            </Button>
          </div>
          <Dropdown
            disabled={!isSetup}
            options={[
              {
                content: '管理',
                value: 'manage',
                onClick: () => {},
              },
              {
                content: '删除',
                value: 'delete',
                onClick: () => {},
              },
            ]}
          >
            <Icon name='more' />
          </Dropdown>
        </Row>
      </div>
    </div>
  );
};

const PurchaseTrend = () => {
  const options = getLineChartOptions();
  const [customOptions, setCustomOptions] = useState(options);
  const onTimeChange = (value: Array<string>) => {
    const options = getLineChartOptions(value);
    setCustomOptions(options);
  };

  return (
    <Row className={classnames(Style.purchaseTrend, Style.boardMargin)} gutter={16}>
      <Col span={9}>
        <Board title='采购商品申请趋势' description='(件)' operation={LastWeekDatePicker(onTimeChange)}>
          <Tvision2Line
            style={{ height: 416 }}
            option={{
              dataset: [[]],
              injectOption: (option) => ({ ...option, ...customOptions }),
            }}
          />
        </Board>
      </Col>
      <Col span={3}>
        <ProductBoard {...PRODUCT} />
        <ProductBoard {...PRODUCT} />
      </Col>
    </Row>
  );
};

const PurchaseSatisfaction = () => {
  const options = getScatterChartOptions();
  const [customOptions, setCustomOptions] = useState(options);
  const onTimeChange = (value: Array<string>) => {
    const options = getScatterChartOptions(value);
    setCustomOptions(options);
  };

  const actionComp = (): React.ReactElement => (
    <>
      {LastWeekDatePicker(onTimeChange)}
      <Button className={Style.exportBtn}>导出数据</Button>
    </>
  );
  return (
    <div className={classnames(Style.purchaseSatisfaction, Style.boardMargin)}>
      <Board title='采购商品满意度分布' operation={actionComp()}>
        <Tvision2Scatter
          style={{ height: 374 }}
          option={{
            dataset: [[]],
            injectOption: (option) => ({ ...option, ...customOptions }),
          }}
        />
      </Board>
    </div>
  );
};

export default memo(() => (
  <div className={Style.dashboardDetail}>
    <MonthPurchase />
    <PurchaseTrend />
    <PurchaseSatisfaction />
  </div>
));
