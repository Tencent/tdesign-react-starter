import { generateIdArray } from 'utils/utils';

// Mock Data of 基本信息
interface InfoItem {
  id: number;
  name: string;
  value: string;
  type?: string;
}
export const dataInfo: InfoItem[] = generateIdArray([
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
export const dataStep: IStepItem[] = generateIdArray([
  { name: '申请提交', detail: '已于12月21日提交' },
  { name: '电子发票', detail: '预计1～3个工作日' },
  { name: '发票已邮寄', detail: '电子发票开出后7个工作日内联系' },
  { name: '完成', detail: '' },
]);
export const stepCurrent = 2;

// Mock Data of 产品采购明细
export const total = 36;
const listTables: any = [];
for (let i = 0; i < total; i++) {
  listTables.push({
    number: 'S20201228115950963',
    name: 'Macbook ',
    tag: '电子产品',
    code: 'p_tmp_60a637cd0d	',
    amount: 52,
    department: '财务部',
    createtime: '2021-12-30 10:43:56',
  });
}
export const dataBuyList = generateIdArray(listTables);
