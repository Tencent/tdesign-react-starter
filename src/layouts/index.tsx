import React, { memo, useEffect, useState, useMemo } from 'react';
import { Drawer, Layout } from 'tdesign-react';
import throttle from 'lodash/throttle';
import { useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'modules/store';
import { selectGlobal, toggleSetting, toggleMenu, ELayout } from 'modules/global';
import Setting from './components/Setting';
import LayoutMap from './components/Container';
import { routes } from 'configs/routes';

import Style from './index.module.less';

export default memo(() => {
  const globalState = useAppSelector(selectGlobal);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [isFullPage, toggleFullPage] = useState(false);

  const fullPageList = useMemo(() => routes.filter((route) => route.isFullPage).map((route) => route.path), []);

  useEffect(() => {
    toggleFullPage(fullPageList.includes(location.pathname));
  }, [location]);

  const Container = LayoutMap[isFullPage ? ELayout.fullPage : globalState.layout];

  useEffect(() => {
    const handleResize = throttle(() => {
      if (window.innerWidth < 900) {
        dispatch(toggleMenu(true));
      } else if (window.innerWidth > 1000) {
        dispatch(toggleMenu(false));
      }
    }, 100);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout className={Style.mainPanel}>
      <Container />
      <Drawer
        destroyOnClose
        visible={globalState.setting}
        size='458px'
        footer={false}
        header={<div>页面配置</div>}
        onClose={() => dispatch(toggleSetting())}
      >
        <Setting />
      </Drawer>
    </Layout>
  );
});
