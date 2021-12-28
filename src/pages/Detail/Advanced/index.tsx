import React, { memo } from 'react';
import { Steps, Row, Col, Progress } from 'tdesign-react';
import classnames from 'classnames';
import { generateIdArray } from 'utils/utils';
import PageBox from 'components/PageBox';
import CardBox from 'components/CardBox';
import Style from './index.module.less';

const { StepItem } = Steps;

// Mock Data of 基本信息
interface InfoItem {
  id: number;
  name: string;
  value: string;
  type?: string;
}
const dataInfo: InfoItem[] = generateIdArray([
  { name: '合同名称', value: '总部办公用品采购项目' },
  { name: '合同状态', value: '履行中', type: 'status' },
  { name: '合同编号', value: 'BH00010' },
  { name: '合同类型', value: '主合同' },
  { name: '合同收付类型', value: '付款' },
  { name: '合同金额', value: '5,000,000元' },
  { name: '甲方', value: '腾讯科技（深圳）有限公司' },
  { name: '乙方', value: '欧尚' },
  { name: '合同签订日期', value: '2020-12-20' },
  { name: '合同生效日期', value: '2021-01-20' },
  { name: '合同结束日期', value: '2022-12-20' },
  { name: '合同附件', value: '总部办公用品采购项目合同.pdf', type: 'link' },
  { name: '备注', value: '--' },
  { name: '创建时间', value: '2020-12-22 10:00:00' },
]);

// Mock Data of 变更记录
interface IStepItem {
  id: number;
  name: string;
  detail?: string;
}
const dataStep: IStepItem[] = generateIdArray([
  { name: '申请提交', detail: '已于12月21日提交' },
  { name: '电子发票', detail: '预计1～3个工作日' },
  { name: '发票已邮寄', detail: '电子发票开出后7个工作日内联系' },
  { name: '完成', detail: '' },
]);
const stepCurrent = 2;

export default memo(() => (
  <PageBox withColor={false} withPadding={false}>
    <CardBox title='基本信息'>
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
    </CardBox>
    <CardBox title='发票进度' className={Style.logBox}>
      <div>
        <Steps current={stepCurrent}>
          {dataStep.map((item) => (
            <StepItem key={item.id} title={item.name} content={item.detail} />
          ))}
        </Steps>
      </div>
    </CardBox>
    <CardBox title='产品目录' className={Style.logBox}>
      <div className={classnames(Style.categoryBox)}>
        <Row gutter={16}>
          <Col span={4}>
            <div className={classnames(Style.productAdd)}>
              <div className={classnames(Style.productSub)}>
                <svg className={classnames(Style.productSubIcon, 't-icon', 't-icon-add', 't-size-m')}>
                  <use href='#t-icon-add'></use>
                </svg>
                <span>新增产品</span>
              </div>
            </div>
          </Col>
          <Col span={4}>
            <div className={classnames(Style.operaterBox, Style.operaterGap)}>
              <div className={classnames(Style.operaterContent)}>
                <div className={classnames(Style.Title)}>
                  <svg className={classnames(Style.Icon, 't-icon', 't-icon-cart', 't-size-m')}>
                    <use href='#t-icon-cart'></use>
                  </svg>
                  <h1>MacBook Pro 2021</h1>
                  <div className={classnames(Style.Tags)}>
                    <span className={classnames(Style.Tag, 't-tag', 't-tag--success', 't-size-s', 't-tag--dark')}>
                      13.3 英寸
                    </span>
                    <span className={classnames(Style.Tag, 't-tag', 't-tag--default', 't-size-s', 't-tag--dark')}>
                      Apple M1
                    </span>
                    <span className={classnames(Style.Tag, 't-tag', 't-tag--default', 't-size-s', 't-tag--dark')}>
                      RAM 16GB
                    </span>
                  </div>
                </div>
                <div className={classnames(Style.Item)}>
                  <span className={classnames(Style.Info)}>
                    最高可选配 16GB 内存 · 最高可选配 2TB 存储设备 电池续航最长达 18 小时
                  </span>
                  <svg className={classnames(Style.Icon, 't-icon', 't-icon-chevron-right', 't-size-s')}>
                    <use href='#t-icon-chevron-right'></use>
                  </svg>
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
                  <svg className={classnames(Style.Icon, 't-icon', 't-icon-cart', 't-size-m')}>
                    <use href='#t-icon-cart'></use>
                  </svg>
                  <h1>Surface Laptop Go</h1>
                  <div className={classnames(Style.Tags)}>
                    <span className={classnames(Style.Tag, 't-tag', 't-tag--success', 't-size-s', 't-tag--dark')}>
                      12.4 英寸
                    </span>
                    <span className={classnames(Style.Tag, 't-tag', 't-tag--default', 't-size-s', 't-tag--dark')}>
                      Core i7
                    </span>
                    <span className={classnames(Style.Tag, 't-tag', 't-tag--default', 't-size-s', 't-tag--dark')}>
                      RAM 16GB
                    </span>
                  </div>
                </div>
                <div className={classnames(Style.Item)}>
                  <span className={classnames(Style.Info)}>常规使用 Surface，续航时间最长可达13小时 随时伴您工作</span>
                  <svg className={classnames(Style.Icon, 't-icon', 't-icon-chevron-right', 't-size-s')}>
                    <use href='#t-icon-chevron-right'></use>
                  </svg>
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
    </CardBox>
    <CardBox title='产品采购明细' className={Style.logBox}>
      <div></div>
    </CardBox>
  </PageBox>
));
