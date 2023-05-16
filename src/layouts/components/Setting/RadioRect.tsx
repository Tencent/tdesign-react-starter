import React, { memo, useState } from 'react';
import Style from './RadioRect.module.less';
import PickedIcon from 'assets/svg/assets-picked.svg?component';

interface IOption {
  value?: any;
  image: JSX.Element | string;
  name?: string;
}

interface IProps {
  defaultValue?: number | string;
  onChange: (value?: any) => void;
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
          ImageItem = <div className={Style.rectImg} style={{ backgroundImage: `url(${item.image})` }} />;
        }

        return (
          <div key={index}>
            <div className={Style.rectItem} onClick={() => handleClick(item)}>
              {ImageItem}
              {selectValue === item.value ? <PickedIcon className={Style.pickedItem} /> : null}
            </div>
            {item.name && <div className={Style.rectText}>{item.name}</div>}
          </div>
        );
      })}
    </div>
  );
});
