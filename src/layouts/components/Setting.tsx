import React, { memo } from 'react';
import { Row, Col, Switch, Radio } from 'tdesign-react';
import { useAppDispatch, useAppSelector } from 'modules/store';
import {
  selectGlobal,
  toggleFixedSidebar,
  toggleShowHeader,
  toggleShowBreadcrumbs,
  toggleShowFooter,
  switchTheme,
  switchColor,
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
      <Radio.Group size='small' onChange={(value) => dispatch(switchColor(value))}>
        <Radio value='rgb(0, 82, 217)'>1</Radio>
        <Radio value='rgb(131, 78, 194)'>2</Radio>
        <Radio value='rgb(5, 148, 250)'>3</Radio>
        <Radio value='rgb(0, 168, 112)'>4</Radio>
        <Radio value='rgb(235, 177, 5)'>5</Radio>
        <Radio value='rgb(237, 123, 47)'>6</Radio>
        <Radio value='rgb(227, 77, 89)'>7</Radio>
        <Radio value='rgb(237, 73, 180)'>8</Radio>
      </Radio.Group>

      <div className={Style.settingTitle}>导航布局</div>
      <Radio.Group size='small'>
        <Radio value='bj'>北京</Radio>
        <Radio value='sh'>上海</Radio>
        <Radio value='gz'>广州</Radio>
      </Radio.Group>

      <Row justify='space-between'>
        <Col>固定 Sidebar</Col>
        <Col>
          <Switch size='large' value={globalState.fixedSidebar} onChange={() => dispatch(toggleFixedSidebar())} />
        </Col>
      </Row>
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
