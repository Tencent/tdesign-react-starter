import React, { useRef } from 'react';
import { Row, Col, Form, Input, Button, Message } from 'tdesign-react';
const { FormItem } = Form;

const SearchForm: React.FC = () => {
  const formRef = useRef();

  const onSubmit = (e: any) => {
    if (e.validateResult === true) {
      Message.info('提交成功');
    }
    console.log(formRef?.current.getAllFieldsValue());
  };

  const onReset = (e) => {
    console.log(e);
    Message.info('重置成功');
  };

  return (
    <div>
      <Form ref={formRef} onSubmit={onSubmit} onReset={onReset} labelWidth={100} colon>
        <Row>
          <Col span={10}>
            <Row gutter={16}>
              <Col flex='1'>
                <FormItem label='合同名称' name='name'>
                  <Input />
                </FormItem>
              </Col>
              <Col flex='1'>
                <FormItem label='合同状态' name='statu'>
                  <Input />
                </FormItem>
              </Col>
              <Col flex='1'>
                <FormItem label='合同编号' name='number'>
                  <Input />
                </FormItem>
              </Col>
              <Col flex='1'>
                <FormItem label='合同类型' name='type'>
                  <Input />
                </FormItem>
              </Col>
            </Row>
          </Col>
          <Col span={2}>
            <Button theme='primary' type='submit' style={{ marginLeft: '30px' }}>
              查询
            </Button>
            <Button type='reset' variant='base' theme='default'>
              重置
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchForm;
