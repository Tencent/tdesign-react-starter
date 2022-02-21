import React, { memo, useState } from 'react';
import Style from './RadioColor.module.less';

interface IProps {
  defaultValue?: number | string;
  options?: any;
  onChange: (color: string) => void;
}

const colors = ['#0052D9', '#0594FA', '#00A870', '#EBB105', '#ED7B2F', '#E34D59', '#ED49B4', '#834EC2'];

export default memo((props: IProps) => {
  const [selectedColor, setSelectedColor] = useState(props.defaultValue);

  const handleClick = (color: string) => {
    setSelectedColor(color);
    props?.onChange(color);
  };

  return (
    <div className={Style.radioColorPanel}>
      {colors.map((color, index) => (
        <div
          key={index}
          onClick={() => handleClick(color)}
          className={Style.colorItemBox}
          style={{ borderColor: selectedColor === color ? color : 'rgba(0,0,0,0)' }}
        >
          <div className={Style.colorItem} style={{ backgroundColor: color }}></div>
        </div>
      ))}
    </div>
  );
});
