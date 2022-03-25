import React from 'react';
import { Layout } from 'tdesign-react';
import { ELayout } from 'modules/global';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import Content from './Content';

import Style from './Content.module.less';

const SideLayout = React.memo(() => (
  <Layout className={Style.sidePanel}>
    <Menu showLogo showOperation />
    <Layout className={Style.sideContainer}>
      <Header />
      <Content />
      <Footer />
    </Layout>
  </Layout>
));

const TopLayout = React.memo(() => (
  <Layout className={Style.topPanel}>
    <Header showMenu={true} />
    <Content />
    <Footer />
  </Layout>
));

const MixLayout = React.memo(() => (
  <Layout className={Style.mixPanel}>
    <Header />
    <Layout className={Style.mixMain}>
      <Menu />
      <Layout className={Style.mixContent}>
        <Content />
        <Footer />
      </Layout>
    </Layout>
  </Layout>
));

const FullPageLayout = React.memo(() => <Content />);

export default {
  [ELayout.side]: SideLayout,
  [ELayout.top]: TopLayout,
  [ELayout.mix]: MixLayout,
  [ELayout.fullPage]: FullPageLayout,
};
