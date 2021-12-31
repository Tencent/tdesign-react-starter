import dayjs from 'dayjs';
import { RECENT_7_DAYS } from './date';

const CHART_LIST_COLOR = ['#0052D9', '#BCC4D0', '#7D46BD', '#0594FA', '#ED7B2F'];

const getRandomInt = (num = 100): number => {
  let resultNum = Number((Math.random() * num).toFixed(0));
  if (resultNum <= 1) {
    resultNum = 1;
  }

  return resultNum;
};

type ChartValue = number | string;

function getTimeArray(dateTime: string[] = [], divideNum = 10, format = 'MM-DD'): string[] {
  const timeArray: string[] = [];
  if (dateTime.length === 0) {
    dateTime.push(...RECENT_7_DAYS.map((item) => item.format(format)));
  }
  for (let i = 0; i < divideNum; i++) {
    const dateAbsTime: number = (new Date(dateTime[1]).getTime() - new Date(dateTime[0]).getTime()) / divideNum;
    const timeNode: number = new Date(dateTime[0]).getTime() + dateAbsTime * i;
    timeArray.push(dayjs(timeNode).format(format));
  }

  return timeArray;
}

const getChartDataSet = (dateTime: Array<string> = []): ChartValue[][] => {
  const divideNum = 10;
  const timeArray = getTimeArray(dateTime, divideNum);
  const inArray = [];
  const outArray = [];
  for (let index = 0; index < divideNum; index++) {
    inArray.push(getRandomInt().toString());
    outArray.push(getRandomInt().toString());
  }

  return [timeArray, inArray, outArray];
};

export default getChartDataSet;
export { CHART_LIST_COLOR, getTimeArray, getRandomInt };
