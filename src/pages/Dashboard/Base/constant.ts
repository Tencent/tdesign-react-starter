import type { TdPrimaryTableProps } from '@tencent/tdesign-react/es/table';
import type { EChartOption } from 'echarts';

export interface DashboardPanel {
  title: string;
  number: string | number;
  leftType: string;
  upTrend?: string;
  downTrend?: string;
}

interface TrendItem {
  growUp?: number;
  productName: string;
  count: number;
  date: string;
}

export const PANE_LIST: Array<DashboardPanel> = [
  {
    title: '总收入',
    number: '¥ 28,425.00',
    upTrend: '20.5%',
    leftType: 'echarts-line',
  },
  {
    title: '总退款',
    number: '¥ 768.00',
    downTrend: '20.5%',
    leftType: 'echarts-bar',
  },
  {
    title: '活跃用户（个）',
    number: '1126',
    downTrend: '20.5%',
    leftType: 'icon-usergroup',
  },
  {
    title: '产生订单（个）',
    number: 527,
    downTrend: '20.5%',
    leftType: 'icon-file-paste',
  },
];

export const SALE_Trend_LIST: Array<TrendItem> = [
  {
    growUp: 1,
    productName: '国家电网有限公司',
    count: 7059,
    date: '2021-09-01',
  },
  {
    growUp: -1,
    productName: '深圳燃气集团股份有限公司',
    count: 6437,
    date: '2021-09-01',
  },
  {
    growUp: 4,
    productName: '国家烟草专卖局',
    count: 4221,
    date: '2021-09-01',
  },
  {
    growUp: 3,
    productName: '中国电信集团有限公司',
    count: 3317,
    date: '2021-09-01',
  },
  {
    growUp: -3,
    productName: '中国移动通信集团有限公司',
    count: 3015,
    date: '2021-09-01',
  },
  {
    growUp: -3,
    productName: '新余市办公用户采购项目',
    count: 2015,
    date: '2021-09-12',
  },
];

export const BUY_TREND_LIST: Array<TrendItem> = [
  {
    growUp: 1,
    productName: '腾讯科技（深圳）有限公司',
    count: 3015,
    date: '2021-09-01',
  },
  {
    growUp: -1,
    productName: '大润发有限公司',
    count: 2015,
    date: '2021-09-01',
  },
  {
    growUp: 6,
    productName: '四川海底捞股份有限公司',
    count: 1815,
    date: '2021-09-11',
  },
  {
    growUp: -3,
    productName: '索尼（中国）有限公司',
    count: 1015,
    date: '2021-09-21',
  },
  {
    growUp: -4,
    productName: '松下电器（中国）有限公司',
    count: 445,
    date: '2021-09-19',
  },
  {
    growUp: -3,
    productName: '新余市办公用户采购项目',
    count: 2015,
    date: '2021-09-12',
  },
];

export const SALE_COLUMNS: TdPrimaryTableProps['columns'] = [
  {
    align: 'center',
    colKey: 'index',
    title: '排名',
    width: 80,
    fixed: 'left',
    render(context) {
      const { type, rowIndex } = context;
      if (type === 'title') return '排名';
      return rowIndex + 1;
    },
  },
  {
    align: 'left',
    ellipsis: true,
    colKey: 'productName',
    title: '客户名称',
    minWidth: 200,
  },
  {
    align: 'center',
    colKey: 'growUp',
    width: 100,
    title: '较上周',
  },
  {
    align: 'center',
    colKey: 'count',
    title: '订单量',
    width: 100,
  },
  {
    align: 'center',
    colKey: 'date',
    width: 140,
    fixed: 'right',
    title: '合同签订日期',
  },
  {
    align: 'center',
    colKey: 'operation',
    title: '操作',
    width: 76,
  },
];

export const BUY_COLUMNS: TdPrimaryTableProps['columns'] = [
  {
    align: 'center',
    colKey: 'index',
    title: '排名',
    width: 64,
  },
  {
    align: 'left',
    ellipsis: true,
    colKey: 'productName',
    title: '供应商名称',
    width: 276,
  },
  {
    align: 'center',
    colKey: 'growUp',
    width: 100,
    title: '较上周',
  },
  {
    align: 'center',
    colKey: 'count',
    title: '订单量',
    width: '100',
  },
  {
    align: 'center',
    colKey: 'date',
    width: 132,
    title: '合同签订日期',
  },
  {
    align: 'center',
    colKey: 'operation',
    title: '操作',
    width: 76,
  },
];

const ONE_WEEK_LIST: Array<string> = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

export const CHART_LIST_COLOR = ['#0052D9', '#BCC4D0', '#7D46BD', '#0594FA', '#ED7B2F'];

export const MICRO_CHART_OPTIONS_LINE: EChartOption = {
  xAxis: {
    type: 'category',
    show: false,
    data: ONE_WEEK_LIST,
  },
  yAxis: {
    show: false,
    type: 'value',
  },
  grid: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    tooltip: {
      show: false,
    },
  },
  color: ['#fff'],
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
      showSymbol: false,
    },
  ],
};

export const MICRO_CHART_OPTIONS_BAR: EChartOption = {
  xAxis: {
    type: 'category',
    show: false,
    data: ONE_WEEK_LIST,
  },
  yAxis: {
    show: false,
    type: 'value',
  },
  grid: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    tooltip: {
      show: false,
    },
  },
  color: CHART_LIST_COLOR,
  series: [
    {
      data: [
        100,
        130,
        184,
        218,
        {
          value: 135,
          itemStyle: {
            color: CHART_LIST_COLOR[1],
          },
        },
        {
          value: 118,
          itemStyle: {
            color: CHART_LIST_COLOR[1],
          },
        },
        {
          value: 60,
          itemStyle: {
            color: CHART_LIST_COLOR[1],
          },
        },
      ],
      type: 'bar',
      barWidth: 9,
    },
  ],
};
