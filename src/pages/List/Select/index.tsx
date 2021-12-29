import React, { useState } from 'react';
import { Table, Tag } from 'tdesign-react';
import SearchForm from './components/searchForm';
import Mock from 'mockjs';
import './index.less';

let data: any = [];
const total = 100;
const Mockdata = Mock.mock({
  'list|1-100': [
    {
      'index|+1': 1,
      'status|1': '@natural(0, 4)',
      no: 'BH00@natural(01, 100)',
      name: '@city()办公用品采购项目',
      'paymentType|1': '@natural(0, 1)',
      'contractType|1': '@natural(0, 2)',
      updateTime: '2020-05-30 @date("HH:mm:ss")',
      amount: '@natural(10, 500),000,000',
      adminName: '@cname()',
    },
  ],
});
data = Mockdata.list;
const selectTable: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>([0, 1]);
  function onSelectChange(value: (string | number)[]) {
    setSelectedRowKeys(value);
  }

  function rehandleClickOp(record: any) {
    console.log(record);
  }

  return (
    <div className='list-common-table'>
      <SearchForm
        onSubmit={async (value) => {
          console.log(value);
        }}
        onCancel={() => {}}
      />
      <Table
        data={data}
        columns={[
          {
            title: '合同名称',
            fixed: 'left',
            minWidth: '300',
            align: 'left',
            ellipsis: true,
            colKey: 'name',
          },
          {
            title: '合同状态',
            colKey: 'status',
            width: 200,
            cell({ row }) {
              switch (row?.status) {
                case 0:
                  return (
                    <Tag theme='danger' variant='light'>
                      审核失败
                    </Tag>
                  );
                case 1:
                  return (
                    <Tag theme='warning' variant='light'>
                      待审核
                    </Tag>
                  );
                case 2:
                  return (
                    <Tag theme='warning' variant='light'>
                      待履行
                    </Tag>
                  );
                case 3:
                  return (
                    <Tag theme='success' variant='light'>
                      审核成功
                    </Tag>
                  );
                case 4:
                  return (
                    <Tag theme='success' variant='light'>
                      已完成
                    </Tag>
                  );
                default:
                  return <div></div>;
              }
            },
          },
          {
            title: '合同编号',
            width: 200,
            ellipsis: true,
            colKey: 'no',
          },
          {
            title: '合同类型',
            width: 200,
            ellipsis: true,
            colKey: 'contractType',
            cell({ row }) {
              switch (row?.contractType) {
                case 0:
                  return <span>审核失败</span>;
                case 1:
                  return <span>待审核</span>;
                case 2:
                  return <span>待履行</span>;
                default:
                  return <div></div>;
              }
            },
          },
          {
            title: '合同收付类型',
            width: 200,
            ellipsis: true,
            colKey: 'paymentType',
            cell({ row }) {
              switch (row?.paymentType) {
                case 0:
                  return <span>收款</span>;
                case 1:
                  return <span>付款</span>;
                default:
                  return <div></div>;
              }
            },
          },
          {
            title: '合同金额 (元)',
            width: 200,
            ellipsis: true,
            colKey: 'amount',
          },
          {
            align: 'left',
            fixed: 'right',
            width: 200,
            colKey: 'op',
            title: '操作',
            cell(record) {
              return (
                <>
                  <a
                    className='list-common-table-btn'
                    onClick={() => {
                      rehandleClickOp(record);
                    }}
                  >
                    管理
                  </a>
                  <a
                    className='list-common-table-btn'
                    onClick={() => {
                      rehandleClickOp(record);
                    }}
                  >
                    删除
                  </a>
                </>
              );
            },
          },
        ]}
        rowKey='index'
        selectedRowKeys={selectedRowKeys}
        tableLayout='auto'
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
      ></Table>
    </div>
  );
};
export default selectTable;
