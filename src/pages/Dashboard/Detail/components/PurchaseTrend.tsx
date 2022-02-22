import React, { useState } from 'react';
import { Button, Col, Dropdown, Row, Tag } from 'tdesign-react';
import { Icon } from 'tdesign-icons-react';
import ReactEcharts from 'echarts-for-react';
import classnames from 'classnames';

import { getLineChartOptions } from '../chart';
import Board from '../../common/Board';
import LastWeekDatePicker from '../../common/DatePicker';
import { IProduct, PRODUCT } from '../constant';
import useDynamicChart from 'utils/hooks/useDynamicChart';

import Style from '../index.module.less';

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
    // eslint-disable-next-line no-shadow
    const options = getLineChartOptions(value);
    setCustomOptions(options);
  };
  const dynamicChartOptions = useDynamicChart(customOptions, {
    placeholderColor: ['legend.textStyle.color', 'xAxis.axisLabel.color', 'yAxis.axisLabel.color'],
  });

  return (
    <Row className={classnames(Style.purchaseTrend, Style.boardMargin)} gutter={16}>
      <Col xs={12} xl={9}>
        <Board title='采购商品申请趋势' description='(件)' operation={LastWeekDatePicker(onTimeChange)}>
          <ReactEcharts
            option={dynamicChartOptions} // option：图表配置项
            notMerge={true}
            lazyUpdate={true}
            style={{ height: 416 }}
          />
        </Board>
      </Col>
      <Col xs={12} xl={3}>
        <ProductBoard {...PRODUCT} />
        <ProductBoard {...PRODUCT} />
      </Col>
    </Row>
  );
};

export default React.memo(PurchaseTrend);
