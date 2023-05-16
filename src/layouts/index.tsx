import React, { memo, useEffect } from 'react';
import { Layout } from 'tdesign-react';
import throttle from 'lodash/throttle';
import { useAppSelector, useAppDispatch } from 'modules/store';
import { selectGlobal, toggleMenu, ELayout, switchTheme } from 'modules/global';
import Setting from './components/Setting';
import AppLayout from './components/AppLayout';
import Style from './index.module.less';

export default memo(() => {
  const globalState = useAppSelector(selectGlobal);
  const dispatch = useAppDispatch();

  const AppContainer = AppLayout[globalState.isFullPage ? ELayout.fullPage : globalState.layout];

  useEffect(() => {
    dispatch(switchTheme(globalState.theme));
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
    <Layout className={Style.panel}>
      <AppContainer />
      <Setting />
    </Layout>
  );
});
