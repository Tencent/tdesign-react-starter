import React, { memo, ReactNode } from 'react';
import cx from 'classnames';
import { getPrefixCls } from 'utils';
import './index.less';

export interface CardProps {
  title?: ReactNode;
  extra?: ReactNode;
  actions?: React.ReactNode[];
  children?: React.ReactNode;
  className?: string;
  prefixCls?: string;
  borded?: boolean;
  style?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  headStyle?: React.CSSProperties;
}

const Card: React.FC<CardProps> = (props) => {
  const { title, extra, actions, className, prefixCls, borded, style, headStyle, bodyStyle } = props;

  const cls = getPrefixCls('card', prefixCls);
  const borderCls = `${cls}-borderd`;

  const hasHead = Boolean(title || extra);

  return (
    <div style={style} className={cx(cls, className, { [borderCls]: borded })}>
      {hasHead && (
        <div className={cx(`${cls}-head`)} style={headStyle}>
          {title && <div className={cx(`${cls}-head-title`)}>{title}</div>}
          {extra && <div className={cx(`${cls}-head-extra`)}>{extra}</div>}
        </div>
      )}
      <div className={cx(`${cls}-body`)} style={bodyStyle}>
        {props.children}
      </div>
      {actions?.length && (
        <ul className={cx(`${cls}-actions`)}>
          {actions.map((action, index) => (
            <li style={{ width: `${100 / actions.length}%` }} key={`action-${index}`}>
              <span>{action}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Card.defaultProps = {
  borded: true,
};

export default memo(Card);
