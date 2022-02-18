import React, { memo, useState } from 'react';
import {
  Form,
  Row,
  Col,
  Input,
  Radio,
  Button,
  DatePicker,
  Select,
  Textarea,
  Avatar,
  Upload,
  MessagePlugin,
} from 'tdesign-react';
import PageBox from 'components/PageBox';
import Style from './index.module.less';

const { FormItem } = Form;
const { Option } = Select;
const { Group: AvatarGroup } = Avatar;

export default memo(() => {
  const [labelAlign] = useState('top' as any);

  const onSubmit = (e: any) => {
    if (e.validateResult === true) {
      MessagePlugin.info('提交成功');
    }
  };
  const onReset = () => {};
  const onSelectChange = () => {};
  const onRemarkChange = (value: any) => {
    console.log(value);
  };

  const handleFail = ({ file }: { file: any }) => {
    console.error(`文件 ${file.name} 上传失败`);
  };

  return (
    <PageBox withPadding={false}>
      <div className={Style.formContainer}>
        <Form onSubmit={onSubmit} onReset={onReset} labelWidth={100} labelAlign={labelAlign} className={Style.baseForm}>
          <div className={Style.titleBox}>
            <div className={Style.titleText}>合同信息</div>
          </div>
          <Row gutter={[32, 24]}>
            <Col span={6}>
              <FormItem
                label='合同名称'
                name='name'
                rules={[{ required: true, message: '合同名称必填', type: 'error' }]}
              >
                <Input placeholder='请输入内容' />
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem
                label='合同类型'
                name='type'
                rules={[{ required: true, message: '合同类型必填', type: 'error' }]}
              >
                <Select value='A' onChange={onSelectChange} placeholder='请选择类型'>
                  <Option key='A' label='类型A' value='A' />
                  <Option key='B' label='类型B' value='B' />
                  <Option key='C' label='类型C' value='C' />
                </Select>
              </FormItem>
            </Col>

            <Col span={12}>
              <FormItem label='合同收付类型' name='payment' rules={[{ required: true }]}>
                <Radio.Group>
                  <Radio value='0'>收款</Radio>
                  <Radio value='1'>付款</Radio>
                </Radio.Group>
                <Input placeholder='请输入金额' style={{ width: '25%' }} />
              </FormItem>
            </Col>

            <Col span={6}>
              <FormItem label='甲方' name='partyA' rules={[{ required: true }]}>
                <Select value='A' onChange={onSelectChange} placeholder='请选择类型'>
                  <Option key='A' label='公司A' value='A' />
                  <Option key='B' label='公司B' value='B' />
                  <Option key='C' label='公司C' value='C' />
                </Select>
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label='乙方' name='partyB' rules={[{ required: true }]}>
                <Select value='A' onChange={onSelectChange} placeholder='请选择类型'>
                  <Option key='A' label='公司A' value='A' />
                  <Option key='B' label='公司B' value='B' />
                  <Option key='C' label='公司C' value='C' />
                </Select>
              </FormItem>
            </Col>

            <Col span={6} className={Style.dateCol} rules={[{ required: true }]}>
              <FormItem label='合同签订日期' name='signDate'>
                <DatePicker mode='date' />
              </FormItem>
            </Col>
            <Col span={6} className={Style.dateCol} rules={[{ required: true }]}>
              <FormItem label='合同生效日期' name='effectiveDate'>
                <DatePicker mode='date' />
              </FormItem>
            </Col>
            <Col span={6} className={Style.dateCol} rules={[{ required: true }]}>
              <FormItem label='合同结束日期' name='endDate'>
                <DatePicker mode='date' />
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label='合同文件' name='endDate'>
                <Upload onFail={handleFail} tips='请上传pdf文件，大小在60M以内' action='' />
              </FormItem>
            </Col>
          </Row>
          <div className={Style.titleBox}>
            <div className={Style.titleText}>其他信息</div>
          </div>
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
    </PageBox>
  );
});
