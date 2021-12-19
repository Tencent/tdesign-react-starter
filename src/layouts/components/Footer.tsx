import React from 'react';
import { Layout, Row } from 'tdesign-react';
import { useAppSelector } from 'modules/store';
import { selectGlobal } from 'modules/global';

const { Footer } = Layout;

const LFooter = () => {
  const globalState = useAppSelector(selectGlobal);
  if (!globalState.showFooter) {
    return null;
  }
  return (
    <Footer>
      <Row justify='center'>Copyright @ 2021-2021 Tencent. All Rights Reserved</Row>
    </Footer>
  );
};

export default React.memo(LFooter);
