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
import RadioColor from './RadioColor';
import RadioRect from './RadioRect';
import { Dark, Light, System } from './Icons';
import Style from './index.module.less';

const themeList = [
  {
    value: 'light',
    image: Light,
  },
  {
    value: 'dark',
    image: Dark,
  },
  {
    value: 'system',
    image: System,
  },
];

export default memo(() => {
  const dispatch = useAppDispatch();
  const globalState = useAppSelector(selectGlobal);

  return (
    <div className={Style.settingPanel}>
      <div className={Style.settingTitle}>主题模式</div>
      <div>
        <RadioRect
          defaultValue={globalState.theme}
          onChange={(value) => dispatch(switchTheme(value))}
          options={themeList}
        />
      </div>

      <div className={Style.settingTitle}>主题色</div>
      <RadioColor defaultValue={globalState.color} onChange={(value) => dispatch(switchColor(value))}></RadioColor>

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
