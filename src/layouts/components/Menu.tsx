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

const { SubMenu, MenuItem } = Menu;

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

export default memo(() => {
  const location = useLocation();
  const globalState = useAppSelector(selectGlobal);
  const [active, setActive] = useState<MenuValue>(location.pathname); // todo
  const { version } = globalState;
  const bottomText = globalState.collapsed ? version : `TDesign Starter ${version}`;

  return (
    <Menu
      width='232px'
      style={{ flexShrink: 0, height: '100%' }}
      value={active}
      theme='dark'
      // expanded={['level1']}
      collapsed={globalState.collapsed}
      onChange={(v) => setActive(v)}
      operations={<div className={Style.menuTip}>{bottomText}</div>}
      logo={globalState.collapsed ? <MenuLogoMini /> : <MenuLogo />}
    >
      {renderMenuItems(menu)}
    </Menu>
  );
});
