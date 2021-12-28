import React, { ReactNode } from 'react';
import cx from 'classnames';
import { Tabs } from 'tdesign-react';
import { TabsProps, TabPanelProps } from 'tdesign-react/es/tabs';
import { getPrefixCls } from 'utils/utils';
import Grid from './Grid';
import './index.less';

const { TabPanel } = Tabs;

export interface CardProps {
  title?: ReactNode;
  extra?: ReactNode;
  actions?: React.ReactNode[];
  children?: React.ReactNode;
  tabProps?: TabsProps;
  tabList?: TabPanelProps[];
  onTapChange?: TabsProps['onChange'];
  className?: string;
  prefixCls?: string;
  borded?: boolean;
  style?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  headStyle?: React.CSSProperties;
}

export interface CardInterface extends React.FC<CardProps> {
  Grid: typeof Grid;
}

const Card: CardInterface = (props: CardProps) => {
  const {
    title,
    extra,
    actions,
    tabList,
    tabProps,
    onTapChange,
    className,
    prefixCls,
    borded,
    style,
    headStyle,
    bodyStyle,
  } = props;

  const cls = getPrefixCls('card', prefixCls);
  const borderCls = `${cls}-borderd`;

  const tabs = tabList?.length ? (
    <Tabs {...(tabProps || {})} onChange={onTapChange}>
      {tabList?.map((tab) => (
        <TabPanel key={tab.value} {...tab}></TabPanel>
      ))}
    </Tabs>
  ) : null;

  const hasHead = Boolean(title || extra || tabs);

  return (
    <div style={style} className={cx(cls, className, { [borderCls]: borded })}>
      {hasHead && (
        <div className={cx(`${cls}-head`)} style={headStyle}>
          <div className={cx(`${cls}-head-wrapper`)}>
            {title && <div className={cx(`${cls}-head-title`)}>{title}</div>}
            {extra && <div className={cx(`${cls}-head-extra`)}>{extra}</div>}
          </div>
          {tabs}
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

Card.Grid = Grid;

export default Card;
