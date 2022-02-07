import React from 'react';
import { Col, Row } from 'tdesign-react';
import { PANE_LIST } from '../constant';
import Board from '../../common/Board';
import PaneBox from './PaneBox';

const gutter = [16, 16];

const TopPanel = () => (
  <Row gutter={gutter}>
    {PANE_LIST.map((item, index) => (
      <Col key={item.title} xs={6} xl={3} span={12}>
        <Board subtitle={item.title} dark={index === 0} size='small' style={{ height: 168 }}>
          <PaneBox value={item} dark={index === 0} index={index} />
        </Board>
      </Col>
    ))}
  </Row>
);

export default React.memo(TopPanel);
