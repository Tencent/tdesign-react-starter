import React, { memo } from 'react';
import classnames from 'classnames';
import { Layout, Button, Row, Col, Input } from 'tdesign-react';
import {
  ViewListIcon,
  InternetIcon,
  LogoGithubIcon,
  MailIcon,
  HelpCircleIcon,
  UserCircleIcon,
  ViewModuleIcon,
  SearchIcon,
  SettingIcon,
} from '@tencent/tdesign-icons-react';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { selectGlobal, toggleMenu, toggleSetting } from 'modules/global';

import Style from './Header.module.less';

const { Header } = Layout;

export default memo(() => {
  const dispatch = useAppDispatch();
  const globalState = useAppSelector(selectGlobal);
  if (!globalState.showHeader) {
    return null;
  }
  return (
    <Header className={classnames(Style.headerPanel, { [Style.headerFixed]: globalState.fixedHeader })}>
      <Row justify='space-between'>
        <Col>
          <Row gutter={16} align='middle'>
            <Col>
              <Button shape='square' size='large' variant='text' onClick={() => dispatch(toggleMenu())}>
                <ViewListIcon />
              </Button>
            </Col>
            <Col>
              <Input prefixIcon={<SearchIcon />} placeholder='请输入内容' />
            </Col>
          </Row>
        </Col>
        <Col>
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
          <Button shape='square' size='large' variant='text'>
            <HelpCircleIcon />
          </Button>
          <Button shape='square' size='large' variant='text'>
            <UserCircleIcon />
          </Button>
          <Button shape='square' size='large' variant='text' onClick={() => dispatch(toggleSetting())}>
            <SettingIcon />
          </Button>
        </Col>
      </Row>
    </Header>
  );
});
