import React, { memo } from 'react';
import Style from './Menu.module.less';
import MiniLogo from 'assets/svg/assets-t-logo.svg';
import FullLogo from 'assets/svg/assets-logo-full.svg';
import { useNavigate } from 'react-router-dom';

interface IProps {
  collapsed?: boolean;
}

export default memo((props: IProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className={Style.menuLogo} onClick={handleClick}>
      {props.collapsed ? (
        <img src={MiniLogo} className={Style.menuMiniLogo} />
      ) : (
        <img src={FullLogo} className={Style.logoFull} />
      )}
    </div>
  );
});
