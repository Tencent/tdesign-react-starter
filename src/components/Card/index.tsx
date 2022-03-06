import React from 'react';
import classname from 'classnames';
import Style from './index.module.less';

export interface ICardProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  operation?: React.ReactNode;
  className?: string;
  border?: boolean;
  [key: string]: any;
}

const Card = ({
  title,
  description,
  operation,
  children,
  border,
  className,
  ...other
}: React.PropsWithChildren<ICardProps>) => (
  <div
    className={classname(
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
        <div className={Style.cardTitle}>{title}</div>
        <div className={Style.cardDescription}>{description}</div>
      </div>
      <div>{operation}</div>
    </div>
    <div className={Style.cardContainer}>{children}</div>
  </div>
);

export default React.memo(Card);
