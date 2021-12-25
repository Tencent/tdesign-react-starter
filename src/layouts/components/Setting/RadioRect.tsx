import React, { memo, useState } from 'react';
import Style from './RadioRect.module.less';

interface IOption {
  value: number | string;
  image: JSX.Element | string;
}

interface IProps {
  defaultValue?: number | string;
  onChange?: (value: number | string) => void;
  options: IOption[];
}

export default memo((props: IProps) => {
  const [selectValue, setSelectValue] = useState(props.defaultValue);

  const handleClick = (option: IOption) => {
    setSelectValue(option.value);
    props.onChange && props.onChange(option.value);
  };

  return (
    <div className={Style.radioRectPanel}>
      {props.options.map((item, index) => {
        return (
          <div
            className={Style.rectItem}
            key={index}
            onClick={() => handleClick(item)}
            style={{ borderColor: selectValue === item.value ? 'var(--td-brand-color)' : '#e3e6eb' }}
          >
            {item.image}
          </div>
        );
      })}
    </div>
  );
});
