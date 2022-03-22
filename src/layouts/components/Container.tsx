import React from 'react';
import { Layout } from 'tdesign-react';
import { ELayout } from 'modules/global';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

import Style from './Content.module.less';

const SideLayout = React.memo(({ children }: { children: React.ReactNode }) => (
  <Layout className={Style.sidePanel}>
    <Menu showLogo showOperation />
    <Layout className={Style.sideContainer}>
      <Header />
      {children}
      <Footer />
    </Layout>
  </Layout>
));

const TopLayout = React.memo(({ children }: { children: React.ReactNode }) => (
  <Layout className={Style.topPanel}>
    <Header showMenu={true} />
    {children}
    <Footer />
  </Layout>
));

const MixLayout = React.memo(({ children }: { children: React.ReactNode }) => (
  <Layout className={Style.mixPanel}>
    <Header />
    <Layout className={Style.mixMain}>
      <Menu />
      <Layout className={Style.mixContent}>
        {children}
        <Footer />
      </Layout>
    </Layout>
  </Layout>
));

export default {
  [ELayout.side]: SideLayout,
  [ELayout.top]: TopLayout,
  [ELayout.mix]: MixLayout,
};
