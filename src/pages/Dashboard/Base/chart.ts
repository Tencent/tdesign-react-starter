import dayjs from 'dayjs';
import type { EChartOption } from 'echarts';

import { CHART_LIST_COLOR } from './constant';

const getRandomArray = (num = 100): number => {
  let resultNum = Number((Math.random() * num).toFixed(0));

  if (resultNum <= 1) {
    resultNum = 1;
  }

  return resultNum;
};

type ChartValue = number | string;

const getLineChartDataSet = (dateTime: Array<string> = []): ChartValue[][] => {
  const divideNum = 10;
  const timeArray = [];
  const inArray = [];
  const outArray = [];
  for (let i = 0; i < divideNum; i++) {
    if (dateTime.length > 0) {
      const dateAbsTime: number = (new Date(dateTime[1]).getTime() - new Date(dateTime[0]).getTime()) / divideNum;
      const enhandTime: number = new Date(dateTime[0]).getTime() + dateAbsTime * i;
      timeArray.push(dayjs(enhandTime).format('MM-DD'));
    } else {
      timeArray.push(
        dayjs()
          .subtract(divideNum - i, 'day')
          .format('MM-DD'),
      );
    }

    inArray.push(getRandomArray().toString());
    outArray.push(getRandomArray().toString());
  }

  return [timeArray, inArray, outArray];
};

// line chart options
const getLineChartOptions = (dateTime: Array<string> = []): EChartOption => {
  const [timeArray, inArray, outArray] = getLineChartDataSet(dateTime);
  return {
    color: CHART_LIST_COLOR,
    tooltip: {
      trigger: 'item',
    },
    grid: {
      left: '0',
      right: '20px',
      top: '5px',
      bottom: '36px',
      containLabel: true,
    },
    legend: {
      left: 'center',
      bottom: '0',
      orient: 'horizontal', // legend 横向布局。
      data: ['本月', '上月'],
      textStyle: {
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.6)',
      },
    },
    xAxis: {
      type: 'category',
      data: timeArray,
      boundaryGap: false,
      axisLabel: {
        color: 'rgba(0, 0, 0, 0.4)',
      },
      axisLine: {
        lineStyle: {
          color: '#E3E6EB',
          width: 1,
        },
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: 'rgba(0, 0, 0, 0.4)',
      },
    },
    series: [
      {
        name: '本月',
        data: outArray,
        type: 'line',
        smooth: false,
        showSymbol: true,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          borderColor: '#ffffff',
          borderWidth: 1,
        },
        areaStyle: {
          color: '#0053D92F',
        },
      },
      {
        name: '上月',
        data: inArray,
        type: 'line',
        smooth: false,
        showSymbol: true,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          borderColor: '#ffffff',
          color: '#BCC4D0',
          lineStyle: {
            color: '#BCC4D0',
          },
          borderWidth: 1,
        },
      },
    ],
  };
};

export { getLineChartOptions };
