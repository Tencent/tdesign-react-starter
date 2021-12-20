import React, { ReactNode } from 'react';
import classnames from 'classnames';
import Style from './index.module.less';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  border?: false;
  description?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
  operation?: ReactNode;
}

const Card = ({ title = '', subtitle = '', description = '', operation, children, ...others }: IProps) => (
  <div className={classnames(Style.cardContainer)} {...others}>
    <div className={classnames(Style.cardTitle)}>
      <div className={classnames(Style.cardTitleText, { [Style.cardTitleTextSmall]: !!subtitle })}>
        {title}
        {subtitle && <span className={classnames(Style.cardSubtitle)}>{subtitle}</span>}
        {description && <span className={classnames(Style.cardDescription)}>{description}</span>}
      </div>
      {operation && <div className={classnames(Style.cardOption)}></div>}
    </div>
    <div className={classnames(Style.cardContent)}>{children}</div>
    <div className={classnames(Style.cardSpacer)}></div>
  </div>
);

export default React.memo(Card);
