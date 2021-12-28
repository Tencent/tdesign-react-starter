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
  AvatarGroup,
  Upload,
} from 'tdesign-react';
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

  const handleFail = ({ file }: { file: any }) => {
    console.error(`文件 ${file.name} 上传失败`);
  };

  return (
    <PageBox withPadding={false}>
      <div className={Style.formContainer}>
        <Form
          onSubmit={onSubmit}
          onReset={onReset}
          colon
          labelWidth={100}
          labelAlign={labelAlign}
          className={Style.baseForm}
        >
          <div className={Style.titleBox}>
            <div className={Style.titleText}>合同信息</div>
          </div>
          <Row gutter={[32, 24]}>
            <Col span={6}>
              <FormItem label='合同名称' name='name'>
                <Input placeholder='请输入内容' />
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label='合同类型' name='type'>
                <Select value='A' onChange={onSelectChange} placeholder='请选择类型'>
                  <Option key='A' label='类型A' value='A' />
                  <Option key='B' label='类型B' value='B' />
                  <Option key='C' label='类型C' value='C' />
                </Select>
              </FormItem>
            </Col>

            <Col span={12}>
              <FormItem label='合同收付类型' name='payment'>
                <Radio.Group>
                  <Radio value='0'>收款</Radio>
                  <Radio value='1'>付款</Radio>
                </Radio.Group>
                <Input placeholder='请输入金额' style={{ width: '25%' }} />
              </FormItem>
            </Col>

            <Col span={6}>
              <FormItem label='甲方' name='partyA'>
                <Select value='A' onChange={onSelectChange} placeholder='请选择类型'>
                  <Option key='A' label='公司A' value='A' />
                  <Option key='B' label='公司B' value='B' />
                  <Option key='C' label='公司C' value='C' />
                </Select>
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label='乙方' name='partyB'>
                <Select value='A' onChange={onSelectChange} placeholder='请选择类型'>
                  <Option key='A' label='公司A' value='A' />
                  <Option key='B' label='公司B' value='B' />
                  <Option key='C' label='公司C' value='C' />
                </Select>
              </FormItem>
            </Col>

            <Col span={6} className={Style.dateCol}>
              <FormItem label='合同签订日期' name='signDate'>
                <DatePicker mode='date' />
              </FormItem>
            </Col>
            <Col span={6} className={Style.dateCol}>
              <FormItem label='合同生效日期' name='effectiveDate'>
                <DatePicker mode='date' />
              </FormItem>
            </Col>
            <Col span={6} className={Style.dateCol}>
              <FormItem label='合同结束日期' name='endDate'>
                <DatePicker mode='date' />
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
        </Form>
      </div>
      <div className={Style.bottomContainer}>
        <div className={Style.uploadBox}>
          <Upload onFail={handleFail} tips='请上传pdf文件，大小在60M以内' action='' />
        </div>
        <div className={Style.buttonsBox}>
          <Button type='reset'>重置</Button>
          <Button type='submit'>提交</Button>
        </div>
      </div>
    </PageBox>
  );
});
