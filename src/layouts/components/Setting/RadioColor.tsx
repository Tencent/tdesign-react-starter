import React, { memo, useState } from 'react';
import Style from './RadioColor.module.less';

interface IProps {
  defaultValue?: number | string;
  options?: any;
  onChange?: (color: string) => void;
}

const colors = ['#0152D9', '#844DC2', '#0794F9', '#05A86F', '#EBB102', '#E34D59', '#EC49B4', '#000'];

export default memo((props: IProps) => {
  const [selectedColor, setSelectedColor] = useState(props.defaultValue);

  const handleClick = (color: string) => {
    setSelectedColor(color);
    props.onChange && props.onChange(color);
  };

  return (
    <div className={Style.radioColorPanel}>
      {colors.map((color, index) => {
        return (
          <div
            key={index}
            onClick={() => handleClick(color)}
            className={Style.colorItemBox}
            style={{ borderColor: selectedColor === color ? color : 'rgba(0,0,0,0)' }}
          >
            <div className={Style.colorItem} style={{ backgroundColor: color }}></div>
          </div>
        );
      })}
    </div>
  );
});
