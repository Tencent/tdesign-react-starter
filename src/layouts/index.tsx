import React, { memo, useEffect } from 'react';
import { Drawer, Layout } from 'tdesign-react';
import throttle from 'lodash/throttle';
import { useAppSelector, useAppDispatch } from 'modules/store';
import { selectGlobal, toggleSetting, toggleMenu } from 'modules/global';
import Setting from './components/Setting';
import { Layout1, Layout2, Layout3 } from './components/Container';
import Style from './index.module.less';

export default memo(() => {
  const globalState = useAppSelector(selectGlobal);
  const dispatch = useAppDispatch();

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

  let Component;
  if (globalState.layout === 'layout1') {
    Component = Layout1;
  } else if (globalState.layout === 'layout2') {
    Component = Layout2;
  } else {
    Component = Layout3;
  }

  const handleClose = () => {
    dispatch(toggleSetting());
  };

  return (
    <Layout className={Style.mainPanel}>
      <Component showHeader={globalState.showHeader} theme={globalState.theme} showFooter={globalState.showFooter} />
      <Drawer
        destroyOnClose
        visible={globalState.setting}
        size='458px'
        footer={false}
        header={<div>页面配置</div>}
        onClose={handleClose}
      >
        <Setting />
      </Drawer>
    </Layout>
  );
});
