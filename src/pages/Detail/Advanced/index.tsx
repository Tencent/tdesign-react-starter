import React, { memo } from 'react';
import PageBox from 'components/PageBox';
import Base from './components/Base';
import ProgressComp from './components/Progress';
import Product from './components/Product';
import Detail from './components/Detail';

export default memo(() => (
  <PageBox withColor={false} withPadding={false}>
    <Base />
    <ProgressComp />
    <Product />
    <Detail />
  </PageBox>
));
