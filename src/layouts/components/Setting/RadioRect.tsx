import React, { memo, useState } from 'react';
import classname from 'classnames';
import { ETheme, ELayout } from 'modules/global';
import Style from './RadioRect.module.less';

interface IOption {
  value?: ETheme | ELayout;
  image: JSX.Element | string;
  name?: string;
}

interface IProps {
  defaultValue?: number | string;
  onChange: (value?: ETheme | ELayout) => void;
  options: IOption[];
}

export default memo((props: IProps) => {
  const [selectValue, setSelectValue] = useState(props.defaultValue);

  const handleClick = (option: IOption) => {
    setSelectValue(option.value);
    props?.onChange(option.value);
  };

  return (
    <div className={Style.radioRectPanel}>
      {props.options.map((item, index) => {
        let ImageItem = item.image;
        if (typeof item.image === 'string') {
          ImageItem = <div className={Style.rectImg} style={{ backgroundImage: `url(${item.image})` }}></div>;
        }

        return (
          <div key={index}>
            <div
              className={classname(Style.rectItem, { [Style.rectItemSelected]: selectValue === item.value })}
              onClick={() => handleClick(item)}
            >
              {ImageItem}
            </div>
            {item.name && <div className={Style.rectText}>{item.name}</div>}
          </div>
        );
      })}
    </div>
  );
});
