import React from 'react';
import classnames from 'classnames';
import Style from './index.module.less';

interface IProps {
  isReverseColor?: boolean;
  type: 'up' | 'down';
  description: string | number;
}

const Trend = ({ isReverseColor = false, type = 'up', description = '' }: IProps) => (
  <div
    className={classnames(Style.trendItem, Style.trendBox, {
      [Style.trendBox_up]: type === 'up',
      [Style.trendBox_down]: type === 'down',
      [Style.trendBox_dark]: isReverseColor,
    })}
  >
    <span className={Style.trendIcon}>
      {type === 'up' && (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M4.5 8L8 4.5L11.5 8' stroke='currentColor' strokeWidth='1.5' />
          <path d='M8 5V12' stroke='currentColor' strokeWidth='1.5' />
        </svg>
      )}
      {type === 'down' && (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M11.5 8L8 11.5L4.5 8' stroke='currentColor' strokeWidth='1.5' />
          <path d='M8 11L8 4' stroke='currentColor' strokeWidth='1.5' />
        </svg>
      )}
    </span>
    <span>{description}</span>
  </div>
);

export default React.memo(Trend);
export type { IProps as TrendType };
