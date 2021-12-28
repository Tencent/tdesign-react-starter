import React, { memo } from 'react';
import classnames from 'classnames';
import { Layout, Button, Row, Col, Input } from 'tdesign-react';
import { ViewListIcon, SearchIcon } from 'tdesign-icons-react';
import { useAppDispatch } from 'modules/store';
import { toggleMenu, TTheme } from 'modules/global';
import HeaderIcon from './HeaderIcon';
import { HeaderMenu } from './Menu';
import Style from './Header.module.less';

const { Header } = Layout;

interface IHeaderProps {
  fixed?: boolean;
  showMenu?: boolean;
  theme?: TTheme;
}

export default memo((props: IHeaderProps) => {
  const dispatch = useAppDispatch();
  let HeaderLeft;

  if (props.showMenu) {
    HeaderLeft = <HeaderMenu theme={props.theme} />;
  } else {
    HeaderLeft = (
      <Row gutter={16} align='middle'>
        <Col>
          <Button shape='square' size='large' variant='text' onClick={() => dispatch(toggleMenu(null))}>
            <ViewListIcon />
          </Button>
        </Col>
        <Col>
          <Input prefixIcon={<SearchIcon />} placeholder='请输入内容' />
        </Col>
      </Row>
    );
  }

  return (
    <Header
      className={classnames(
        Style.headerPanel,
        { [Style.headerFixed]: props.fixed },
        { [Style.headerPanelDark]: props.theme === 'dark' },
        { [Style.headerPanelLight]: props.theme === 'light' },
      )}
    >
      <Row justify='space-between'>
        <Col>{HeaderLeft}</Col>
        <Col>
          <HeaderIcon />
        </Col>
      </Row>
    </Header>
  );
});
