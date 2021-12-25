import React, { memo } from 'react';
import { Steps } from 'tdesign-react';
import classnames from 'classnames';
import { generateIdArray } from 'utils/utils';
import PageBox from 'components/PageBox';
import CardBox from 'components/CardBox';
import Style from './index.module.less';

const { StepItem } = Steps;

// Mock Data of 基本信息
interface InfoItem {
  id: number;
  name: string;
  value: string;
  type?: string;
}
const dataInfo: InfoItem[] = generateIdArray([
  { name: '合同名称', value: '总部办公用品采购项目' },
  { name: '合同状态', value: '履行中', type: 'status' },
  { name: '合同编号', value: 'BH00010' },
  { name: '合同类型', value: '主合同' },
  { name: '合同收付类型', value: '付款' },
  { name: '合同金额', value: '5,000,000元' },
  { name: '甲方', value: '腾讯科技（深圳）有限公司' },
  { name: '乙方', value: '欧尚' },
  { name: '合同签订日期', value: '2020-12-20' },
  { name: '合同生效日期', value: '2021-01-20' },
  { name: '合同结束日期', value: '2022-12-20' },
  { name: '合同附件', value: '总部办公用品采购项目合同.pdf', type: 'link' },
  { name: '备注', value: '--' },
  { name: '创建时间', value: '2020-12-22 10:00:00' },
]);

// Mock Data of 变更记录
interface IStepItem {
  id: number;
  name: string;
  detail?: string;
}
const dataStep: IStepItem[] = generateIdArray([
  { name: '上传合同附件', detail: '这里是提示文字' },
  { name: '修改合同金额', detail: '这里是提示文字' },
  { name: '新建合同', detail: '2020-12-01 15:00:00 管理员-李川操作' },
]);
const stepCurrent = 1;

export default memo(() => (
  <PageBox withColor={false} withPadding={false}>
    <CardBox title='基本信息'>
      <div className={classnames(Style.infoBox)}>
        {dataInfo.map((item) => (
          <div key={item.id} className={classnames(Style.infoBoxItem)}>
            <h1>{item.name}</h1>
            <span
              className={classnames({
                [Style.inProgress]: item.type === 'status',
                [Style.pdf]: item.type === 'link',
              })}
            >
              {item.type === 'status' && <i></i>}
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </CardBox>
    <CardBox title='变更记录' className={Style.logBox}>
      <div>
        <Steps layout='vertical' theme='dot' current={stepCurrent}>
          {dataStep.map((item) => (
            <StepItem key={item.id} title={item.name} content={item.detail} />
          ))}
        </Steps>
      </div>
    </CardBox>
  </PageBox>
));
