import React, { useState } from 'react';
import { Col, Dropdown, Row, Tag, Card, Avatar } from 'tdesign-react';
import { Icon, AddIcon } from 'tdesign-icons-react';
import ReactEcharts from 'echarts-for-react';
import LastWeekDatePicker from 'components/DatePicker';
import useDynamicChart from 'hooks/useDynamicChart';
import { PRODUCT_LIST } from '../constant';
import { getLineChartOptions } from '../chart';
import Style from './PurchaseThrend.module.less';

interface IProductTrendProps {
  description: string;
  isSetup: boolean;
  name: string;
  type: string;
  icon: string;
}

const ProductTrend = ({ type, isSetup, description, name, icon }: IProductTrendProps) => (
  <div className={Style.productTrendPanel}>
    <Row justify='space-between'>
      <div className={Style.productLogo}>
        <Icon name={icon} />
      </div>
      <Tag theme='success'>{isSetup ? '已启用' : '已停用'}</Tag>
    </Row>

    <p className={Style.productName}>{name}</p>
    <p className={Style.productDesc}>{description}</p>
    <Row justify='space-between' align='middle'>
      <Avatar.Group cascading='left-up' max={2}>
        <Avatar>{type}</Avatar>
        <Avatar icon={<AddIcon />}></Avatar>
      </Avatar.Group>
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
);

const options = getLineChartOptions();

const PurchaseTrend = () => {
  const [customOptions, setCustomOptions] = useState(options);

  const onTimeChange = (value: Array<string>) => {
    const options = getLineChartOptions(value);
    setCustomOptions(options);
  };

  const dynamicChartOptions = useDynamicChart(customOptions, {
    placeholderColor: ['legend.textStyle.color', 'xAxis.axisLabel.color', 'yAxis.axisLabel.color'],
  });

  return (
    <Row className={Style.purchaseTrendPanel} gutter={[16, 16]}>
      <Col xs={12} xl={9}>
        <Card title='采购商品申请趋势' subtitle='(件)' actions={LastWeekDatePicker(onTimeChange)} bordered={false}>
          <ReactEcharts
            option={dynamicChartOptions} // option：图表配置项
            notMerge={true}
            lazyUpdate={true}
            style={{ height: 453 }}
          />
        </Card>
      </Col>
      <Col xs={12} xl={3}>
        <Row gutter={[16, 16]}>
          {PRODUCT_LIST.map((item, index) => (
            <Col xs={12} key={index}>
              <ProductTrend
                type={item.type}
                isSetup={item.isSetup}
                description={item.description}
                name={item.name}
                icon={item.icon}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default React.memo(PurchaseTrend);
