import React from 'react';
import classnames from 'classnames';
import Style from './index.module.less';

export interface ICardProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  operation?: React.ReactNode;
  className?: string;
  border?: boolean;
  size?: 'small' | 'large';
  [key: string]: any;
}

const Card = ({
  title,
  description,
  operation,
  children,
  border,
  className,
  size,
  ...other
}: React.PropsWithChildren<ICardProps>) => (
  <div
    className={classnames(
      Style.cardPanel,
      {
        [Style.cardPanelBorder]: border,
      },
      className,
    )}
    {...other}
  >
    <div className={Style.top}>
      <div className={Style.left}>
        <div
          className={classnames(Style.cardTitle, {
            [Style.cardTitleSmall]: size === 'small',
          })}
        >
          {title}
        </div>
        <div className={Style.cardDescription}>{description}</div>
      </div>
      <div>{operation}</div>
    </div>
    <div className={Style.cardContainer}>{children}</div>
  </div>
);

export default React.memo(Card);
