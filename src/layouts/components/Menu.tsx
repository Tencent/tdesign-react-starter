import React, { memo, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, MenuValue } from 'tdesign-react';
import router, { IRouter } from 'router';
import { resolve } from 'utils/path';
import { useAppSelector } from 'modules/store';
import { selectGlobal } from 'modules/global';
import MenuLogo from './MenuLogo';
import Style from './Menu.module.less';

const { SubMenu, MenuItem, HeadMenu } = Menu;

interface IMenuProps {
  showLogo?: boolean;
  showOperation?: boolean;
}

const renderMenuItems = (menu: IRouter[], parentPath = '') =>
  menu.map((item) => {
    const navigate = useNavigate();
    const { children, meta, path } = item;

    if (!meta) {
      // 无meta信息，路由不显示为菜单
      return null;
    }

    const { Icon, title } = meta || {};
    const routerPath = resolve(parentPath, path);

    if (!children || children.length === 0) {
      return (
        <MenuItem
          key={routerPath}
          value={routerPath}
          icon={Icon ? <Icon /> : undefined}
          onClick={() => navigate(routerPath)}
        >
          {title}
        </MenuItem>
      );
    }

    return (
      <SubMenu key={routerPath} value={routerPath} title={title} icon={Icon ? <Icon /> : undefined}>
        {renderMenuItems(children, routerPath)}
      </SubMenu>
    );
  });

/**
 * 顶部菜单
 */
export const HeaderMenu = memo(() => {
  const globalState = useAppSelector(selectGlobal);
  const location = useLocation();
  const [active, setActive] = useState<MenuValue>(location.pathname); // todo

  return (
    <HeadMenu
      expandType='popup'
      style={{ marginBottom: 20 }}
      value={active}
      theme={globalState.theme}
      onChange={(v) => setActive(v)}
    >
      {renderMenuItems(router)}
    </HeadMenu>
  );
});

/**
 * 左侧菜单
 */
export default memo((props: IMenuProps) => {
  const location = useLocation();
  const globalState = useAppSelector(selectGlobal);

  const { version } = globalState;
  const bottomText = globalState.collapsed ? version : `TDesign Starter ${version}`;

  return (
    <Menu
      width='232px'
      style={{ flexShrink: 0, height: '100%' }}
      value={location.pathname}
      theme={globalState.theme}
      collapsed={globalState.collapsed}
      operations={props.showOperation ? <div className={Style.menuTip}>{bottomText}</div> : undefined}
      logo={props.showLogo ? <MenuLogo collapsed={globalState.collapsed} /> : undefined}
    >
      {renderMenuItems(router)}
    </Menu>
  );
});
