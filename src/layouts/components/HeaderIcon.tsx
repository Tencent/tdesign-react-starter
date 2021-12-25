import React, { memo } from 'react';
import { Button, Popup, Badge, Dropdown } from 'tdesign-react';
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

  const options = [
    {
      content: '个人中心',
      value: 1,
    },
    {
      content: '推出登录',
      value: 2,
    },
  ];

  const clickHandler = (data: any) => {
    // MessagePlugin.success(`选中【${data.value}】`);
    console.log(data);
  };

  return (
    <>
      <Button shape='square' size='large' variant='text'>
        <Badge count={6} style={{ zIndex: 1 }}>
          <MailIcon />
        </Badge>
      </Button>
      <Button shape='square' size='large' variant='text' onClick={gotoGitHub}>
        <Popup content='代码仓库' placement='bottom' showArrow destroyOnClose>
          <LogoGithubIcon />
        </Popup>
      </Button>
      <Button shape='square' size='large' variant='text' onClick={gotoWiki}>
        <Popup content='帮助文档' placement='bottom' showArrow destroyOnClose>
          <HelpCircleIcon />
        </Popup>
      </Button>
      <Dropdown
        options={options}
        trigger={'click'}
        onClick={clickHandler}
        popupProps={{ overlayStyle: { padding: 4 } }}
      >
        <Button shape='square' size='large' variant='text'>
          <Popup content='个人中心' placement='bottom' showArrow>
            <UserCircleIcon />
          </Popup>
        </Button>
      </Dropdown>
      <Button shape='square' size='large' variant='text' onClick={() => dispatch(toggleSetting())}>
        <Popup content='页面设置' placement='bottom' showArrow destroyOnClose>
          <SettingIcon />
        </Popup>
      </Button>
    </>
  );
});
