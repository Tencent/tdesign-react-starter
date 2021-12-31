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
  { name: '上传合同附件', detail: '这里是提示文字' },
  { name: '修改合同金额', detail: '这里是提示文字' },
  { name: '新建合同', detail: '2020-12-01 15:00:00 管理员-李川操作' },
]);
export const stepCurrent = 1;
