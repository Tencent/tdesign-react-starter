import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Popup, Badge, Dropdown, Row, Col } from 'tdesign-react';
import {
  Icon,
  LogoGithubIcon,
  MailIcon,
  HelpCircleIcon,
  SettingIcon,
  PoweroffIcon,
  UserCircleIcon,
} from 'tdesign-icons-react';
import { useAppDispatch } from 'modules/store';
import { toggleSetting } from 'modules/global';
import { logout } from 'modules/user';
import Style from './HeaderIcon.module.less';

const { DropdownMenu, DropdownItem } = Dropdown;

export default memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const gotoWiki = () => {
    window.open('https://tdesign.tencent.com/react/overview');
  };

  const gotoGitHub = () => {
    window.open('https://github.com/Tencent/tdesign-react-starter');
  };

  const clickHandler = (data: any) => {
    if (data.value === 1) {
      navigate('/user/index');
    }
  };
  const handleLogout = async () => {
    await dispatch(logout());
    navigate('/login/index');
  };

  return (
    <Row align='middle' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Col>
        <Button shape='square' size='large' variant='text' className={Style.badgeBtn}>
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
        <Dropdown className={Style.dropdown} trigger={'click'} onClick={clickHandler}>
          <Button variant='text'>
            <span style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
              <Icon name='user-circle' size='20px' />
              <span style={{ display: 'inline-block', margin: '0 5px' }}>Tencent</span>
              <Icon name='chevron-down' size='20px' />
            </span>
          </Button>
          <DropdownMenu>
            <DropdownItem value={1}>
              <>
                <UserCircleIcon />
                个人中心
              </>
            </DropdownItem>
            <DropdownItem value={1} onClick={handleLogout}>
              <>
                <PoweroffIcon />
                退出登录
              </>
            </DropdownItem>
          </DropdownMenu>
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
