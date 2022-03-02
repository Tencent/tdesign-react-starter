import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Popup, Badge, Dropdown, Row, Col } from 'tdesign-react';
import { Icon, LogoGithubIcon, MailIcon, HelpCircleIcon, SettingIcon } from 'tdesign-icons-react';
import { useAppDispatch } from 'modules/store';
import { toggleSetting } from 'modules/global';
import Style from './HeaderIcon.module.less';

export default memo(() => {
  const dispatch = useAppDispatch();
  const history = useHistory();

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
    if (data.value === 1) {
      history.push('/user/index');
    }
  };

  return (
    <Row align='middle' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Col>
        <Button shape='square' size='large' variant='text'>
          <Badge count={6} style={{ zIndex: 1 }}>
            <MailIcon />
          </Badge>
        </Button>
      </Col>
      <Col>
        <Button shape='square' size='large' variant='text' onClick={gotoGitHub}>
          <Popup content='代码仓库' placement='bottom' showArrow destroyOnClose>
            <LogoGithubIcon />
          </Popup>
        </Button>
      </Col>
      <Col>
        <Button shape='square' size='large' variant='text' onClick={gotoWiki}>
          <Popup content='帮助文档' placement='bottom' showArrow destroyOnClose>
            <HelpCircleIcon />
          </Popup>
        </Button>
      </Col>
      <Col>
        <Dropdown className={Style.dropdown} options={options} trigger={'click'} onClick={clickHandler}>
          <Button variant='text'>
            <span style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
              <Icon name='user-circle' size='20' />
              <span style={{ display: 'inline-block', margin: '0 5px' }}>Tencent</span>
              <Icon name='chevron-down' size='20' />
            </span>
          </Button>
        </Dropdown>
      </Col>
      <Col>
        <Button shape='square' size='large' variant='text' onClick={() => dispatch(toggleSetting())}>
          <Popup content='页面设置' placement='bottom' showArrow destroyOnClose>
            <SettingIcon />
          </Popup>
        </Button>
      </Col>
    </Row>
  );
});
