import React, { memo, useState } from 'react';
import { Form, Input, Radio, Button, DatePicker, Select, Textarea, Avatar, AvatarGroup } from 'tdesign-react';
import PageBox from 'components/PageBox';
import Style from './index.module.less';

const { FormItem } = Form;
const { Option } = Select;

export default memo(() => {
  const [labelAlign] = useState('top' as any);
  // const [layout] = useState('inline');
  const onSubmit = () => {};
  const onReset = () => {};
  const onSelectChange = () => {};
  const onRemarkChange = (value: any) => {
    console.log(value);
  };
  return (
    <PageBox>
      <div className={Style.formWrapper}>
        <div className={Style.titleBox}>
          <div className={Style.titleText}>合同信息</div>
        </div>
        <Form onSubmit={onSubmit} onReset={onReset} colon labelWidth={100} labelAlign={labelAlign}>
          <FormItem label='合同名称' name='name'>
            <Input placeholder='请输入内容' />
          </FormItem>
          <FormItem label='合同类型' name='type'>
            <Select value='A' onChange={onSelectChange} style={{ width: '40%' }} clearable placeholder='请选择类型'>
              <Option key='A' label='类型A' value='A' />
              <Option key='B' label='类型B' value='B' />
              <Option key='C' label='类型C' value='C' />
            </Select>
          </FormItem>

          <FormItem label='合同收付类型' name='payment'>
            <Radio.Group>
              <Radio value='0'>收款</Radio>
              <Radio value='1'>付款</Radio>
            </Radio.Group>
            <Input placeholder='请输入金额' style={{ width: '40%' }} />
          </FormItem>

          <FormItem label='甲方' name='partyA'>
            <Select value='A' onChange={onSelectChange} style={{ width: '40%' }} clearable placeholder='请选择类型'>
              <Option key='A' label='公司A' value='A' />
              <Option key='B' label='公司B' value='B' />
              <Option key='C' label='公司C' value='C' />
            </Select>
          </FormItem>

          <FormItem label='乙方' name='partyB'>
            <Select value='A' onChange={onSelectChange} style={{ width: '40%' }} clearable placeholder='请选择类型'>
              <Option key='A' label='公司A' value='A' />
              <Option key='B' label='公司B' value='B' />
              <Option key='C' label='公司C' value='C' />
            </Select>
          </FormItem>
          <FormItem label='合同签订日期' name='signDate'>
            <DatePicker mode='date' />
          </FormItem>

          <FormItem label='合同生效日期' name='effectiveDate'>
            <DatePicker mode='date' />
          </FormItem>

          <FormItem label='合同结束日期' name='endDate'>
            <DatePicker mode='date' />
          </FormItem>
        </Form>
      </div>
      <div className={Style.formWrapper}>
        <div className={Style.titleBox}>
          <div className={Style.titleText}>其他信息</div>
          <Form>
            <FormItem label='备注' name='remark'>
              <Textarea placeholder='请输入备注' value={'哈哈哈'} onChange={onRemarkChange} />
            </FormItem>

            <FormItem label='公证人' name='notary'>
              <AvatarGroup>
                <Avatar>D</Avatar>
                <Avatar>S</Avatar>
                <Avatar>+</Avatar>
              </AvatarGroup>
            </FormItem>
            <FormItem>
              <Button type='submit' theme='primary'>
                提交
              </Button>
              <Button type='reset' style={{ marginLeft: 12 }}>
                重置
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </PageBox>
  );
});
