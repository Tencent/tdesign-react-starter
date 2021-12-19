import React from 'react';
import { Layout, Row } from 'tdesign-react';

const { Footer } = Layout;

const LFooter = () => (
  <Footer>
    <Row justify='center'>Copyright @ 2021-2021 Tencent. All Rights Reserved</Row>
  </Footer>
);

export default React.memo(LFooter);
