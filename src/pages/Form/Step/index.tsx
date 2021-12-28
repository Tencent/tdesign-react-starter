import React, { memo } from 'react';
import PageBox from 'components/PageBox';
import { Steps, Alert, Button, MessagePlugin, Form, Select } from 'tdesign-react';
import Style from './index.module.less';

const { StepItem: Step } = Steps;
const { FormItem } = Form;
const { Option } = Select;

const steps = [
  {
    title: '申请提交',
    content: '申请提交已于12月21日提交',
  },
  {
    title: '电子发票',
    content: '预计1～3个工作日',
  },
  {
    title: '发票已邮寄',
    content: '电子发票开出后7个工作日内联系',
  },
  {
    title: '完成',
    content: '',
  },
];

const message = [
  '1、申请开票后，电子发票在1～3个工作日内开具；增值税专用发票（纸质）如资质审核通过，将在电子发票开具后10个工作日内为您寄出；',
  '2、开票金额为您实际支付金额；',
  '3、如有疑问请直接联系：13300001111。',
];

export default memo(() => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <PageBox>
      <>
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className='steps-content'>
          <div className={Style.alertBox}>
            <Alert theme='info' message={message} title='发票开具规则：' maxLine={3} close />
          </div>
          <Form labelWidth={100}>
            <FormItem
              label='合同名称'
              name='name'
              rules={[{ required: true, message: '请选择合同名称', type: 'error' }]}
            >
              <Select value='A' placeholder='请选择合同'>
                <Option key='A' label='合同A' value='A' />
                <Option key='B' label='合同B' value='B' />
                <Option key='C' label='合同C' value='C' />
              </Select>
            </FormItem>

            <FormItem
              label='发票类型'
              name='type'
              rules={[{ required: true, message: '请选择发票类型', type: 'error' }]}
            >
              <Select value='A' placeholder='请选择发票类型'>
                <Option key='A' label='类型A' value='A' />
                <Option key='B' label='类型B' value='B' />
                <Option key='C' label='类型C' value='C' />
              </Select>
            </FormItem>

            <FormItem label='开票金额' name='name'>
              <div>--</div>
            </FormItem>
          </Form>
        </div>
        <div className='steps-action' style={{ marginTop: '20px' }}>
          {current < steps.length - 1 && (
            <Button onClick={() => next()}>{current === 0 ? '提交申请' : '下一步'}</Button>
          )}
          {current === steps.length - 1 && <Button onClick={() => MessagePlugin.success('提交申请成功')}>完成</Button>}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              上一步
            </Button>
          )}
        </div>
      </>
    </PageBox>
  );
});
