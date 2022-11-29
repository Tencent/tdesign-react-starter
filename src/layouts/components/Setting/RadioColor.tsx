import React, { useState } from 'react';
import { defaultColor } from 'configs/color';
import { Popup, ColorPickerPanel } from 'tdesign-react';
import Style from './RadioColor.module.less';

interface IProps {
  defaultValue?: number | string;
  onChange: (color: string) => void;
}

const RadioColor = (props: IProps) => {
  const [isColoPickerDisplay, onPopupVisibleChange] = useState(false);

  return (
    <div className={Style.panel}>
      {defaultColor.map((color, index) => (
        <div
          key={index}
          onClick={() => props?.onChange(color)}
          className={Style.box}
          style={{ borderColor: props.defaultValue === color && !isColoPickerDisplay ? color : 'transparent' }}
        >
          <div className={Style.item} style={{ backgroundColor: color }} />
        </div>
      ))}

      <Popup
        trigger='click'
        placement='bottom-right'
        expandAnimation
        visible={isColoPickerDisplay}
        onVisibleChange={(v) => onPopupVisibleChange(v)}
        overlayInnerStyle={{ padding: 0 }}
        content={
          <ColorPickerPanel
            onChange={(v) => props?.onChange(v)}
            colorModes={['monochrome']}
            format='HEX'
            swatchColors={[]}
            defaultValue={props.defaultValue as string}
          />
        }
      >
        <div
          key='dynamic'
          className={Style.box}
          style={{
            borderColor:
              isColoPickerDisplay || defaultColor.indexOf(props.defaultValue as string) === -1
                ? (props.defaultValue as string)
                : 'transparent',
          }}
        >
          <div
            className={Style.item}
            style={{
              background:
                'conic-gradient(from 90deg at 50% 50%, #FF0000 -19.41deg, #FF0000 18.76deg, #FF8A00 59.32deg, #FFE600 99.87deg, #14FF00 141.65deg, #00A3FF 177.72deg, #0500FF 220.23deg, #AD00FF 260.13deg, #FF00C7 300.69deg, #FF0000 340.59deg, #FF0000 378.76deg)',
            }}
          />
        </div>
      </Popup>
    </div>
  );
};

export default React.memo(RadioColor);
