import React, { memo } from 'react';
import { Alert, Button, Form, Select } from 'tdesign-react';
import Style from '../index.module.less';

const { FormItem } = Form;
const { Option } = Select;

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

  return (
    <>
      <div className={Style.alertBox}>
        <Alert theme='info' message={message} title='发票开具规则：' maxLine={3} close />
      </div>
      <Form labelWidth={100}>
        <FormItem label='合同名称' name='name' rules={[{ required: true, message: '请选择合同名称', type: 'error' }]}>
          <Select value='A' placeholder='请选择合同'>
            <Option key='A' label='合同A' value='A' />
            <Option key='B' label='合同B' value='B' />
            <Option key='C' label='合同C' value='C' />
          </Select>
        </FormItem>

        <FormItem label='发票类型' name='type' rules={[{ required: true, message: '请选择发票类型', type: 'error' }]}>
          <Select value='A' placeholder='请选择发票类型'>
            <Option key='A' label='类型A' value='A' />
            <Option key='B' label='类型B' value='B' />
            <Option key='C' label='类型C' value='C' />
          </Select>
        </FormItem>

        <FormItem label='开票金额' name='name'>
          <div>--</div>
        </FormItem>
        <FormItem>
          <Button type='submit' onClick={() => next()}>
            提交申请
          </Button>
        </FormItem>
      </Form>
    </>
  );
});
