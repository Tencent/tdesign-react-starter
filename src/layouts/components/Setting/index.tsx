import React, { memo, useEffect } from 'react';
import { Drawer } from 'tdesign-react';
import { useAppSelector, useAppDispatch } from 'modules/store';
import { selectGlobal, toggleSetting } from 'modules/global';
import PageConfig from './PageConfig';

export default memo(() => {
  const globalState = useAppSelector(selectGlobal);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const themeGenerator = document.querySelector('td-theme-generator');
    themeGenerator?.addEventListener('click-setting', () => {
      dispatch(toggleSetting());
    });
    themeGenerator?.addEventListener('panel-drawer-visible', (v) => {
      if ((v as CustomEvent)?.detail?.[0]) {
        dispatch(toggleSetting());
      }
    });
  }, []);
  return (
    <>
      <Drawer
        destroyOnClose
        visible={globalState.setting}
        size='348px'
        footer={false}
        header={false}
        closeBtn={false}
        onClose={() => dispatch(toggleSetting())}
      >
        <PageConfig />
      </Drawer>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <td-theme-generator props-top='0' show-setting='true' />
    </>
  );
});
