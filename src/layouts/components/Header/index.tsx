import React, { memo } from 'react';
import { Layout, Button, Space } from 'tdesign-react';
import { ViewListIcon } from 'tdesign-icons-react';
import { useAppDispatch, useAppSelector } from 'modules/store';
import { selectGlobal, toggleMenu } from 'modules/global';
import HeaderIcon from './HeaderIcon';
import { HeaderMenu } from '../Menu';
import Search from './Search';
import Style from './index.module.less';

const { Header } = Layout;

export default memo((props: { showMenu?: boolean }) => {
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
      <Space align='center'>
        <Button
          shape='square'
          size='large'
          variant='text'
          onClick={() => dispatch(toggleMenu(null))}
          icon={<ViewListIcon />}
        />
        <Search />
      </Space>
    );
  }

  return (
    <Header className={Style.panel}>
      {HeaderLeft}
      <HeaderIcon />
    </Header>
  );
});
