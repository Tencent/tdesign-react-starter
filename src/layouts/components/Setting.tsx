import React, { memo } from 'react';
import { Row, Col, Switch, Radio } from 'tdesign-react';
import { useAppDispatch, useAppSelector } from 'modules/store';
import {
  selectGlobal,
  toggleFixedHeader,
  toggleShowHeader,
  toggleShowBreadcrumbs,
  toggleShowFooter,
  switchTheme,
  switchColor,
  switchLayout,
} from 'modules/global';

import Style from './Setting.module.less';

export default memo(() => {
  const dispatch = useAppDispatch();
  const globalState = useAppSelector(selectGlobal);
  return (
    <div className={Style.settingPanel}>
      <div className={Style.settingTitle}>主题模式</div>
      <div>
        <Radio.Group size='small' value={globalState.theme} onChange={(value) => dispatch(switchTheme(value))}>
          <Radio value='light'>明亮</Radio>
          <Radio value='dark'>黑暗</Radio>
        </Radio.Group>
      </div>

      <div className={Style.settingTitle}>主题色</div>
      <Radio.Group size='small' value={globalState.color} onChange={(value) => dispatch(switchColor(value))}>
        <Radio.Button value='rgb(0, 82, 217)'>1</Radio.Button>
        <Radio.Button value='rgb(131, 78, 194)'>2</Radio.Button>
        <Radio.Button value='rgb(5, 148, 250)'>3</Radio.Button>
        <Radio.Button value='rgb(0, 168, 112)'>4</Radio.Button>
        <Radio.Button value='rgb(235, 177, 5)'>5</Radio.Button>
        <Radio.Button value='rgb(237, 123, 47)'>6</Radio.Button>
        <Radio.Button value='rgb(227, 77, 89)'>7</Radio.Button>
        <Radio.Button value='rgb(237, 73, 180)'>8</Radio.Button>
      </Radio.Group>

      <div className={Style.settingTitle}>导航布局</div>
      <Radio.Group size='small' value={globalState.layout} onChange={(value) => dispatch(switchLayout(value))}>
        <Radio value='layout1'>layout1</Radio>
        <Radio value='layout2'>layout2</Radio>
        <Radio value='layout3'>layout3</Radio>
      </Radio.Group>

      <div className={Style.settingTitle}>元素开关</div>
      <Row justify='space-between'>
        <Col>
          <div className={Style.settingSubTitle}>显示 Header</div>
        </Col>
        <Col>
          <Switch size='large' value={globalState.showHeader} onChange={() => dispatch(toggleShowHeader())} />
        </Col>
      </Row>
      <Row justify='space-between'>
        <Col>
          <div className={Style.settingSubTitle}>固定 Header</div>
        </Col>
        <Col>
          <Switch size='large' value={globalState.fixedHeader} onChange={() => dispatch(toggleFixedHeader())} />
        </Col>
      </Row>
      <Row justify='space-between'>
        <Col>
          <div className={Style.settingSubTitle}>显示 Breadcrumbs</div>
        </Col>
        <Col>
          <Switch size='large' value={globalState.showBreadcrumbs} onChange={() => dispatch(toggleShowBreadcrumbs())} />
        </Col>
      </Row>
      <Row justify='space-between'>
        <Col>
          <div className={Style.settingSubTitle}>显示 Footer</div>
        </Col>
        <Col>
          <Switch size='large' value={globalState.showFooter} onChange={() => dispatch(toggleShowFooter())} />
        </Col>
      </Row>
    </div>
  );
});
