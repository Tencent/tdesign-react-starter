import React, { memo } from 'react';
import PageBox from 'components/PageBox';
import { Addon, Button, Col, Input, Row } from '@tencent/tdesign-react';
import styles from '../Base/index.module.less';
import { SearchIcon } from '@tencent/tdesign-icons-react';

export default memo(() => (
  <PageBox withColor={false}>
    <Row justify='space-between'>
      <Col>
        <Row gutter={16} className={styles.toolBar}>
          <Col>
            <Button>新建合同</Button>
          </Col>
          <Col>
            <Button theme='default'>导出合同</Button>
          </Col>
          <Col>已添加 项</Col>
        </Row>
      </Col>
      <Col>
        <Addon append={<SearchIcon />}>
          <Input placeholder='请输入你需要搜索的型号' />
        </Addon>
      </Col>
    </Row>
  </PageBox>
));
