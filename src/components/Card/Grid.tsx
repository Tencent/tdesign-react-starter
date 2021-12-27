import React from 'react';
import cx from 'classnames';
import { getPrefixCls, getWidth } from 'utils/utils';

export interface GridProps {
  prefixCls?: string;
  hoverable?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

const Grid: React.FC<GridProps> = (props) => {
  const { hoverable, className, style, prefixCls, xs, sm, md, lg, xl, xxl } = props;

  const cls = `${getPrefixCls('card', prefixCls)}-grid`;
  const hoverableCls = `${cls}-hoverable`;

  const width = getWidth({ xs, sm, md, lg, xl, xxl });
  const isEffectWidth = width !== undefined;

  return (
    <div
      style={style}
      className={cx(cls, className, {
        [hoverableCls]: hoverable,
        [`${cls}-${width}`]: isEffectWidth,
      })}
    >
      {props.children}
    </div>
  );
};

export default React.memo(Grid);
