import React from 'react';
import { DatePicker } from '@tencent/tdesign-react';

import { RECENT_7_DAYS } from '../date';

const LastWeekDatePicker = (onChange: (value: Array<string>) => void) => (
  <DatePicker
    style={{ width: 240 }}
    mode='date'
    range
    placeholder="['开始时间', '结束时间']"
    defaultValue={RECENT_7_DAYS}
    onChange={(value: Array<string>) => onChange(value)}
  />
);

export default LastWeekDatePicker;
