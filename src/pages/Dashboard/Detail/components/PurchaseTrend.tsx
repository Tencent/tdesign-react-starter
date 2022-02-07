import { getLineChartOptions } from '../chart';
import React, { useState } from 'react';
import { Button, Col, Dropdown, Row, Tag } from 'tdesign-react';
import classnames from 'classnames';
import Style from '../index.module.less';
import Board from '../../common/Board';
import LastWeekDatePicker from '../../common/DatePicker';
import ReactEcharts from 'echarts-for-react';
import { IProduct, PRODUCT } from '../constant';
import { Icon } from 'tdesign-icons-react';

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
      <Col xs={12} xl={9} span={12}>
        <Board title='采购商品申请趋势' description='(件)' operation={LastWeekDatePicker(onTimeChange)}>
          <ReactEcharts
            option={customOptions} // option：图表配置项
            notMerge={true}
            lazyUpdate={true}
            style={{ height: 416 }}
          />
        </Board>
      </Col>
      <Col xs={12} xl={3} span={12}>
        <ProductBoard {...PRODUCT} />
        <ProductBoard {...PRODUCT} />
      </Col>
    </Row>
  );
};

export default React.memo(PurchaseTrend);
