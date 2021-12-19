import React from 'react';
import { Layout } from 'tdesign-react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Menu from './Menu';
import { TTheme } from 'modules/global';

import Style from './Content.module.less';

interface ILayoutProps {
  showHeader?: boolean;
  fixedHeader?: boolean;
  showFooter?: boolean;
  theme?: TTheme;
}

export const Layout1 = React.memo((props: ILayoutProps) => (
  <Layout className={Style.layout1Panel}>
    <Menu showLogo showOperation theme='dark' />
    <Layout className={Style.layout1Container}>
      <>{props.showHeader && <Header fixed={props.fixedHeader} theme={props.theme} />}</>
      <Content />
      <>{props?.showFooter && <Footer />}</>
    </Layout>
  </Layout>
));

export const Layout2 = React.memo((props: ILayoutProps) => (
  <Layout className={Style.layout2Panel}>
    <>{props.showHeader && <Header fixed={props.fixedHeader} theme='dark' showMenu={true} />}</>
    <Content />
    <>{props.showFooter && <Footer />}</>
  </Layout>
));

export const Layout3 = React.memo((props: ILayoutProps) => (
  <Layout className={Style.layout3Panel}>
    <>{props.showHeader && <Header fixed={props.fixedHeader} theme='dark' />}</>
    <Layout className={Style.layout3Main}>
      <Menu theme={props.theme} />
      <Layout className={Style.layout3Content}>
        <Content />
        <>{props.showFooter && <Footer />}</>
      </Layout>
    </Layout>
  </Layout>
));
