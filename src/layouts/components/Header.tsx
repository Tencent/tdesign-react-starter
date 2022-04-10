import React, { memo } from 'react';
import { Layout, Button, Row, Col, Input } from 'tdesign-react';
import { ViewListIcon, SearchIcon } from 'tdesign-icons-react';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { selectGlobal, toggleMenu } from 'modules/global';
import HeaderIcon from './HeaderIcon';
import { HeaderMenu } from './Menu';
import Style from './Header.module.less';

const { Header } = Layout;

interface IHeaderProps {
  showMenu?: boolean;
}

export default memo((props: IHeaderProps) => {
  const globalState = useAppSelector(selectGlobal);
  const dispatch = useAppDispatch();

  if (!globalState.showHeader) {
    return null;
  }

  let HeaderLeft;
  if (props.showMenu) {
    HeaderLeft = (
      <div>
        <HeaderMenu />
      </div>
    );
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
    <Header className={Style.headerPanel}>
      {HeaderLeft}
      <HeaderIcon />
    </Header>
  );
});
