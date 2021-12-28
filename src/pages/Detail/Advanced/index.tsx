import React, { memo } from 'react';
import { Steps, Row, Col, Progress, Table, Button, Tag } from 'tdesign-react';
import { ChevronRightIcon, AddIcon, CartIcon } from '@tencent/tdesign-icons-react';
import classnames from 'classnames';
import PageBox from 'components/PageBox';
import Card from 'components/Card';
import { dataInfo, dataStep, stepCurrent, dataBuyList, total } from './consts';
import Style from './index.module.less';

const { StepItem } = Steps;

export default memo(() => (
  <PageBox withColor={false} withPadding={false}>
    <Card borded={false} title='基本信息'>
      <div className={classnames(Style.infoBox)}>
        {dataInfo.map((item) => (
          <div key={item.id} className={classnames(Style.infoBoxItem)}>
            <h1>{item.name}</h1>
            <span
              className={classnames({
                [Style.inProgress]: item.type === 'status',
                [Style.pdf]: item.type === 'link',
              })}
            >
              {item.type === 'status' && <i></i>}
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </Card>
    <Card borded={false} title='发票进度' className={Style.logBox}>
      <div>
        <Steps current={stepCurrent}>
          {dataStep.map((item) => (
            <StepItem key={item.id} title={item.name} content={item.detail} />
          ))}
        </Steps>
      </div>
    </Card>
    <Card borded={false} title='产品目录' className={Style.logBox}>
      <div className={classnames(Style.categoryBox)}>
        <Row gutter={16}>
          <Col span={4}>
            <div className={classnames(Style.productAdd)}>
              <div className={classnames(Style.productSub)}>
                <AddIcon className={classnames(Style.productSubIcon)} />
                <span>新增产品</span>
              </div>
            </div>
          </Col>
          <Col span={4}>
            <div className={classnames(Style.operaterBox, Style.operaterGap)}>
              <div className={classnames(Style.operaterContent)}>
                <div className={classnames(Style.Title)}>
                  <CartIcon className={classnames(Style.Icon)} />
                  <h1>MacBook Pro 2021</h1>
                  <div className={classnames(Style.Tags)}>
                    <Tag className={classnames(Style.Tag)} theme='success' variant='dark' size='small'>
                      13.3 英寸
                    </Tag>
                    <Tag className={classnames(Style.Tag)} variant='dark' size='small'>
                      Apple M1
                    </Tag>
                    <Tag className={classnames(Style.Tag)} variant='dark' size='small'>
                      RAM 16GB
                    </Tag>
                  </div>
                </div>
                <div className={classnames(Style.Item)}>
                  <span className={classnames(Style.Info)}>
                    最高可选配 16GB 内存 · 最高可选配 2TB 存储设备 电池续航最长达 18 小时
                  </span>
                  <ChevronRightIcon className={classnames(Style.Icon)} />
                </div>
                <div className={classnames(Style.Footer)}>
                  <span className={classnames(Style.Percentage)}>1420 / 1500（台）</span>
                  <div className={classnames(Style.Progress)}>
                    <Progress percentage={90} label={false} trackColor='#D4E3FC'></Progress>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={4}>
            <div className={classnames(Style.operaterBox, Style.operaterGap)}>
              <div className={classnames(Style.operaterContent)}>
                <div className={classnames(Style.Title)}>
                  <CartIcon className={classnames(Style.Icon)} />
                  <h1>Surface Laptop Go</h1>
                  <div className={classnames(Style.Tags)}>
                    <Tag className={classnames(Style.Tag)} theme='success' variant='dark' size='small'>
                      12.4 英寸
                    </Tag>
                    <Tag className={classnames(Style.Tag)} variant='dark' size='small'>
                      Core i7
                    </Tag>
                    <Tag className={classnames(Style.Tag)} variant='dark' size='small'>
                      RAM 16GB
                    </Tag>
                  </div>
                </div>
                <div className={classnames(Style.Item)}>
                  <span className={classnames(Style.Info)}>常规使用 Surface，续航时间最长可达13小时 随时伴您工作</span>
                  <ChevronRightIcon className={classnames(Style.Icon)} />
                </div>
                <div className={classnames(Style.Footer)}>
                  <span className={classnames(Style.Percentage)}>120 / 2000（台）</span>
                  <div className={classnames(Style.Progress)}>
                    <Progress percentage={90} label={false} color='#E24D59' trackColor='#FCD4D4'></Progress>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Card>
    <Card borded={false} title='产品采购明细' className={Style.logBox}>
      <div>
        <Table
          data={dataBuyList}
          columns={[
            {
              align: 'left',
              width: 300,
              minWidth: 300,
              ellipsis: true,
              colKey: 'number',
              title: '申请号',
            },
            {
              align: 'left',
              width: 200,
              minWidth: 200,
              ellipsis: true,
              colKey: 'name',
              title: '产品名称',
              cell({ row }) {
                return <Tag theme='primary'>{row.tag}</Tag>;
              },
            },
            {
              align: 'left',
              width: 200,
              minWidth: 200,
              ellipsis: true,
              colKey: 'code',
              title: '产品编号',
            },
            {
              align: 'left',
              width: 200,
              minWidth: 200,
              ellipsis: true,
              colKey: 'amount',
              title: '采购数量',
              cell({ row }) {
                return <>{row.money}</>;
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
              width: 300,
              minWidth: 300,
              ellipsis: true,
              colKey: 'createtime',
              title: '创建时间',
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
                      管理
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
          tableLayout='auto'
          verticalAlign='top'
          hover
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
      </div>
    </Card>
  </PageBox>
));
