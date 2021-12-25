import React, { memo } from 'react';
import { Button, Popup, Badge } from 'tdesign-react';
import { LogoGithubIcon, MailIcon, HelpCircleIcon, UserCircleIcon, SettingIcon } from 'tdesign-icons-react';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { selectGlobal, toggleSetting } from 'modules/global';

export default memo(() => {
  const dispatch = useAppDispatch();
  const globalState = useAppSelector(selectGlobal);
  if (!globalState.showHeader) {
    return null;
  }

  const gotoWiki = () => {
    window.open('https://tdesign.tencent.com/react/components/overview');
  };

  const gotoGitHub = () => {
    window.open('https://github.com/Tencent');
  };

  return (
    <>
      <Button shape='square' size='large' variant='text'>
        <Badge count={6} style={{ zIndex: 1 }}>
          <MailIcon />
        </Badge>
      </Button>
      <Popup content='代码仓库' placement='bottom' showArrow destroyOnClose>
        <Button shape='square' size='large' variant='text' onClick={gotoGitHub}>
          <LogoGithubIcon />
        </Button>
      </Popup>
      <Popup content='帮助文档' placement='bottom' showArrow destroyOnClose>
        <Button shape='square' size='large' variant='text' onClick={gotoWiki}>
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
