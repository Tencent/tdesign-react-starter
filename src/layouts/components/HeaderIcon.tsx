import React, { memo } from 'react';
import { Button, Popup } from 'tdesign-react';
import {
  InternetIcon,
  LogoGithubIcon,
  MailIcon,
  HelpCircleIcon,
  UserCircleIcon,
  ViewModuleIcon,
  SettingIcon,
} from '@tencent/tdesign-icons-react';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { selectGlobal, toggleSetting } from 'modules/global';

export default memo(() => {
  const dispatch = useAppDispatch();
  const globalState = useAppSelector(selectGlobal);
  if (!globalState.showHeader) {
    return null;
  }
  return (
    <>
      <Button shape='square' size='large' variant='text'>
        <MailIcon />
      </Button>
      <Button shape='square' size='large' variant='text'>
        <InternetIcon />
      </Button>
      <Button shape='square' size='large' variant='text'>
        <ViewModuleIcon />
      </Button>
      <Button shape='square' size='large' variant='text'>
        <LogoGithubIcon />
      </Button>
      <Popup content='帮助文档' placement='bottom' showArrow destroyOnClose>
        <Button shape='square' size='large' variant='text'>
          <HelpCircleIcon />
        </Button>
      </Popup>
      <Popup content='个人中心' placement='bottom' showArrow destroyOnClose>
        <Button shape='square' size='large' variant='text'>
          <UserCircleIcon />
        </Button>
      </Popup>
      <Popup content='页面设置' placement='bottom' showArrow destroyOnClose>
        <Button shape='square' size='large' variant='text' onClick={() => dispatch(toggleSetting())}>
          <SettingIcon />
        </Button>
      </Popup>
    </>
  );
});
