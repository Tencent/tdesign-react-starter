import React from 'react';
import { Row, Col, Form, Input, Button } from 'tdesign-react';
const { FormItem } = Form;

const SearchForm: React.FC = () => (
  <div>
    <Form labelWidth={100}>
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
          <Button theme='primary' type='submit'>
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

export default SearchForm;
