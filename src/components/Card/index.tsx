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
  isDark?: boolean;
}

const Card = ({
  title = '',
  subtitle = '',
  description = '',
  operation,
  isDark = false,
  children,
  ...others
}: IProps) => (
  <div className={classnames(Style.cardContainer, { [Style.mainColor]: isDark })} {...others}>
    <div className={Style.cardTitle}>
      <div className={classnames(Style.cardTitleText, { [Style.cardTitleTextSmall]: !!subtitle })}>
        {title}
        {subtitle && <span className={Style.cardSubtitle}>{subtitle}</span>}
        {description && <span className={Style.cardDescription}>{description}</span>}
      </div>
      {operation && <div className={Style.cardOption}></div>}
    </div>
    <div className={Style.cardContent}>{children}</div>
    <div className={Style.cardSpacer}></div>
  </div>
);

export default React.memo(Card);
