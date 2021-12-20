import React from 'react';
import cx from 'classnames';
import { getPrefixCls } from 'utils';

export interface GridProps {
  prefixCls?: string;
  hoverable?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Grid: React.FC<GridProps> = (props) => {
  const { hoverable, className, style, prefixCls } = props;

  const cls = `${getPrefixCls('card', prefixCls)}-grid`;
  const hoverableCls = `${cls}-hoverable`;

  return (
    <div
      style={style}
      className={cx(cls, className, {
        [hoverableCls]: hoverable,
      })}
    >
      {props.children}
    </div>
  );
};

export default React.memo(Grid);
