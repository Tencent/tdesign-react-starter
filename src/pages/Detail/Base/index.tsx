import React, { memo } from 'react';
import classnames from 'classnames';
import PageBox from 'components/PageBox';
import CardBox from 'components/CardBox';
import Style from './index.module.less';

// Mock Data
interface InfoItem {
  name: string;
  value: string;
  type?: string;
}
const data: InfoItem[] = [
  { name: '合同名称', value: '总部办公用品采购项目' },
  { name: '合同状态', value: '履行中', type: 'status' },
  { name: '合同编号', value: 'BH00010' },
  { name: '合同类型', value: '主合同' },
  { name: '合同类型', value: '主合同' },
  { name: '合同类型', value: '主合同' },
];

export default memo(() => {
  const temp = 'Hello';
  return (
    <PageBox withColor={false} withPadding={false}>
      <CardBox titleName='基本信息' withMarginTop={false}>
        <div className={classnames(Style.infoBox)}>
          {data.map((item, index: number) => (
            <div key={index} className={classnames(Style.infoBoxItem)}>
              <h1>{item.name}</h1>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </CardBox>
      <CardBox titleName='变更记录'>
        <div>{temp}</div>
      </CardBox>
    </PageBox>
  );
});
