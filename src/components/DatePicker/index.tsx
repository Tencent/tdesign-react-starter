import React from 'react';
import { DatePicker } from 'tdesign-react';
import type { DateValue } from 'tdesign-react/es/date-picker';
import dayjs, { Dayjs } from 'dayjs';

const RECENT_7_DAYS: [Dayjs, Dayjs] = [dayjs().subtract(7, 'day'), dayjs().subtract(1, 'day')];

const LastWeekDatePicker = (onChange: (value: Array<string>) => void) => (
  <DatePicker
    style={{ width: 240 }}
    mode='date'
    range
    placeholder="['开始时间', '结束时间']"
    defaultValue={RECENT_7_DAYS.map((item) => item.toDate())}
    onChange={(value: DateValue) => onChange(value as string[])}
  />
);

export default LastWeekDatePicker;
