import React, { useState, memo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Menu } from 'tdesign-react';
import { MenuValue } from '@tencent/tdesign-react/es/_type/components/menu';
import { menu, IMenuItem } from 'configs/menu';
import { useAppSelector } from 'modules/store';
import { selectGlobal } from 'modules/global';
import MenuLogo from './MenuLogo';
import MenuLogoMini from './MenuLogoMini';

import Style from './Menu.module.less';

const { SubMenu, MenuItem, HeadMenu } = Menu;

const renderMenuItems = (menu: IMenuItem[]) =>
  menu.map((item) => {
    const history = useHistory();
    const { key, children, Icon, label, path } = item;
    if (!children || children.length === 0) {
      return (
        <MenuItem
          key={key}
          value={key}
          icon={Icon ? <Icon /> : undefined}
          onClick={() => {
            history.push(path as string);
          }}
        >
          {label}
        </MenuItem>
      );
    }

    return (
      <SubMenu key={key} value={key} title={label} icon={Icon ? <Icon /> : undefined}>
        {renderMenuItems(children)}
      </SubMenu>
    );
  });

export const HeaderMenu = memo((props: IMenuProps) => {
  const location = useLocation();
  const [active, setActive] = useState<MenuValue>(location.pathname); // todo
  return (
    <HeadMenu
      expandType='popup'
      style={{ marginBottom: 20 }}
      value={active}
      theme={props.theme}
      onChange={(v) => setActive(v)}
    >
      {renderMenuItems(menu)}
    </HeadMenu>
  );
});

interface IMenuProps {
  showLogo?: boolean;
  showOperation?: boolean;
  theme?: 'light' | 'dark';
}

export default memo((props: IMenuProps) => {
  const location = useLocation();
  const globalState = useAppSelector(selectGlobal);
  const [active, setActive] = useState<MenuValue>(location.pathname); // todo

  const { version } = globalState;
  const bottomText = globalState.collapsed ? version : `TDesign Starter ${version}`;
  const Logo = globalState.collapsed ? <MenuLogoMini /> : <MenuLogo />;

  return (
    <Menu
      width='232px'
      style={{ flexShrink: 0, height: '100%' }}
      value={active}
      theme={props.theme}
      // expanded={['level1']}
      collapsed={globalState.collapsed}
      onChange={(v) => setActive(v)}
      operations={props.showOperation ? <div className={Style.menuTip}>{bottomText}</div> : undefined}
      logo={props.showLogo ? Logo : undefined}
    >
      {renderMenuItems(menu)}
    </Menu>
  );
});
