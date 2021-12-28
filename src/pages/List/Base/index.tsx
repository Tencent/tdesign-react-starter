import React, { useState, memo } from 'react';
import { Table, Tag, Row, Col, Button, Input } from 'tdesign-react';
import { ChevronUpCircleIcon, SearchIcon } from 'tdesign-icons-react';
import PageBox from 'components/PageBox';
import style from './index.module.less';

const data: any = [];
const total = 50;
for (let i = 0; i < total; i++) {
  data.push({
    index: i,
    name: '公有',
    status: '已完成',
    code: 'BH0001',
    type: '收款',
    department: '财务部',
    money: '120,000',
  });
}

export default memo(() => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>([0, 1]);
  function onSelectChange(value: (string | number)[]) {
    setSelectedRowKeys(value);
  }
  return (
    <PageBox>
      <Row justify='space-between' className={style.toolBar}>
        <Col>
          <Row gutter={8} align='middle'>
            <Col>
              <Button>新建合同</Button>
            </Col>
            <Col>
              <Button theme='default'>导出合同</Button>
            </Col>
            <Col>
              <div>已选 {selectedRowKeys?.length || 0} 项</div>
            </Col>
          </Row>
        </Col>
        <Col>
          <Input suffixIcon={<SearchIcon />} placeholder='请输入你需要搜索的型号' />
        </Col>
      </Row>

      <Table
        data={data}
        columns={[
          {
            colKey: 'row-select',
            fixed: 'left',
            type: 'multiple',
            width: 50,
          },
          {
            align: 'left',
            width: 300,
            minWidth: 300,
            ellipsis: true,
            colKey: 'name',
            title: '合同名称',
          },
          {
            align: 'left',
            width: 200,
            minWidth: 200,
            ellipsis: true,
            colKey: 'status',
            title: '合同状态',
            cell({ row }) {
              return <Tag theme='primary'>{row.status}</Tag>;
            },
          },
          {
            align: 'left',
            width: 200,
            minWidth: 200,
            ellipsis: true,
            colKey: 'code',
            title: '合同编号',
          },
          {
            align: 'left',
            width: 200,
            minWidth: 200,
            ellipsis: true,
            colKey: 'type',
            title: '合同付款类型',
            cell({ row }) {
              return (
                <>
                  {row.money}
                  <ChevronUpCircleIcon style={{ color: 'red' }} />
                </>
              );
            },
          },
          {
            align: 'left',
            width: 200,
            minWidth: 200,
            ellipsis: true,
            colKey: 'department',
            title: '申请部门',
          },
          {
            align: 'left',
            width: 200,
            minWidth: 200,
            ellipsis: true,
            colKey: 'money',
            title: '合同金额（元）',
          },
          {
            align: 'left',
            fixed: 'right',
            width: 200,
            minWidth: 200,
            colKey: 'op',
            title: '操作',
            cell() {
              return (
                <>
                  <Button theme='primary' variant='text'>
                    详情
                  </Button>
                  <Button theme='primary' variant='text'>
                    删除
                  </Button>
                </>
              );
            },
          },
        ]}
        rowKey='index'
        selectedRowKeys={selectedRowKeys}
        tableLayout='auto'
        verticalAlign='top'
        hover
        onSelectChange={onSelectChange}
        pagination={{
          pageSize: 10,
          total,
          current: 1,
          showJumper: true,
          onChange(pageInfo) {
            console.log(pageInfo, 'onChange pageInfo');
          },
          onCurrentChange(current, pageInfo) {
            console.log(current, 'onCurrentChange current');
            console.log(pageInfo, 'onCurrentChange pageInfo');
          },
          onPageSizeChange(size, pageInfo) {
            console.log(size, 'onPageSizeChange size');
            console.log(pageInfo, 'onPageSizeChange pageInfo');
          },
        }}
      />
    </PageBox>
  );
});
