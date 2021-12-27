import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import throttle from 'lodash/throttle';
import { getPrefixCls, getWidth } from 'utils/utils';

export interface GridProps {
  prefixCls?: string;
  hoverable?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  span?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

const Grid: React.FC<GridProps> = (props) => {
  const { hoverable, className, style, prefixCls, span, xs, sm, md, lg, xl, xxl } = props;

  const cls = `${getPrefixCls('card', prefixCls)}-grid`;
  const hoverableCls = `${cls}-hoverable`;
  const width = getWidth({ xs, sm, md, lg, xl, xxl, span });
  const [colValue, setColValue] = useState(width);

  const isEffectWidth = colValue !== undefined;

  useEffect(() => {
    const getColValue = throttle(() => {
      const width = getWidth({ xs, sm, md, lg, xl, xxl, span });
      setColValue(width);
    }, 500);
    window.addEventListener('resize', getColValue);
    return () => {
      window.removeEventListener('resize', getColValue);
    };
  }, []);

  return (
    <div
      style={style}
      className={cx(cls, className, {
        [hoverableCls]: hoverable,
        [`${cls}-${colValue}`]: isEffectWidth,
      })}
    >
      {props.children}
    </div>
  );
};

export default React.memo(Grid);
