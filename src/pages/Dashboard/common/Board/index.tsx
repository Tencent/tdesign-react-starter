import React from 'react';
import classnames from 'classnames';
import Style from './index.module.less';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  border?: boolean;
  description?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
  dark?: boolean;
  operation?: React.ReactElement;
  size?: 'small' | 'default';
}

const Board = ({
  title = '',
  subtitle = '',
  description = '',
  operation,
  border = false,
  dark = false,
  compact = false,
  size = 'default',
  children,
  ...others
}: IProps) => (
  <div
    className={classnames(Style.boardContainer, {
      [Style.boardContainer_dark]: dark,
      [Style.boardContainer_compact]: compact,
      [Style.boardContainer_border]: border,
    })}
    {...others}
  >
    <div
      className={classnames(Style.boardTitle, {
        [Style.boardTitle_small]: size === 'small',
        [Style.boardTitle_default]: size === 'default',
      })}
    >
      <div
        className={classnames(Style.boardTitleText, {
          [Style.boardTitleText_small]: size === 'small',
          [Style.boardTitleText_default]: size === 'default',
        })}
      >
        {title}
        {subtitle && <span className={Style.boardSubtitle}>{subtitle}</span>}
        {description && <span className={Style.boardDescription}>{description}</span>}
      </div>
      {operation && <div className={Style.boardOption}>{operation}</div>}
    </div>
    <div className={Style.boardContent}>{children}</div>
    <div className={Style.boardSpacer}></div>
  </div>
);

export default React.memo(Board);
