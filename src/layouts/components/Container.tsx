import React from 'react';
import { Layout } from 'tdesign-react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Menu from './Menu';

import Style from './Content.module.less';

export const MixNav = React.memo(() => (
  <Layout className={Style.content}>
    <Menu></Menu>
    <Layout className={Style.rightContainer}>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </Layout>
  </Layout>
));
