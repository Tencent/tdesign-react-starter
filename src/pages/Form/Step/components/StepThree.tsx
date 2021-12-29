import React, { memo } from 'react';
import { Button, Form, Select, Input, Textarea } from 'tdesign-react';

const { FormItem } = Form;
const { Option } = Select;

export default memo((props: any) => {
  const [current, setCurrent] = React.useState(0);
  const { steps } = props;

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <Form labelWidth={100}>
      <FormItem label='收货人' name='receiver' rules={[{ required: true, message: '请输入收货人', type: 'error' }]}>
        <Input placeholder='请输入收货人' />
      </FormItem>

      <FormItem
        label='收货人手机号'
        name='receiverPhone'
        rules={[{ required: true, message: '请输入收货人手机号', type: 'error' }]}
      >
        <Input placeholder='请输入收货人手机号号' />
      </FormItem>

      <FormItem
        label='收货地址'
        name='receiverAddress'
        rules={[{ required: true, message: '请选择收货地址', type: 'error' }]}
      >
        <Select value='3' placeholder='请选择收货地址'>
          <Option key='0' label='广东省深圳市南山区' value='0' />
          <Option key='1' label='北京市海淀区' value='1' />
          <Option key='2' label='四川省成都市高新区' value='2' />
          <Option key='3' label='广东省广州市天河区' value='3' />
          <Option key='4' label='陕西省西安市高新区' value='4' />
        </Select>
      </FormItem>

      <FormItem
        label='详细地址'
        name='taxpayerId'
        rules={[{ required: true, message: '请输入详细地址', type: 'error' }]}
      >
        <Textarea placeholder='请输入详细地址' value={'哈哈哈'} />
      </FormItem>

      <FormItem>
        {current < steps.length - 1 && (
          <Button type='submit' onClick={() => next()}>
            下一步
          </Button>
        )}

        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            上一步
          </Button>
        )}
      </FormItem>
    </Form>
  );
});
