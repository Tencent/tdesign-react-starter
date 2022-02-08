export const XXLWIDTH = 1880;
export const XLWIDTH = 1400;
export const LGWIDTH = 1200;
export const MDWIDTH = 992;
export const SMWIDTH = 768;

// 获取类名前缀
export const getPrefixCls = (className: string, customPreClass?: string) => {
  if (customPreClass) {
    return `${customPreClass}-${className}`;
  }
  return `td-${className}`;
};

// 判断是否是数字
export const isNumber = (number?: number) => typeof number === 'number';

export interface GetWidthParams {
  span?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

// 按传入的顺序优先级获取响应式Col的值
export const getColValue = (values: (number | undefined)[]) => {
  for (const item of values) {
    if (isNumber(item)) {
      return item;
    }
  }
  return undefined;
};

// 获取不同分辨率下Col的值
export const getWidth = (params: GetWidthParams) => {
  const { xs, sm, md, lg, xl, xxl, span } = params;

  let width: number | undefined = span;

  const screenWidth = window.screen.width;

  if (screenWidth >= XXLWIDTH) {
    width = getColValue([xxl, xl, lg, md, sm, span]);
  } else if (screenWidth >= XLWIDTH) {
    width = getColValue([xl, lg, md, sm, span]);
  } else if (screenWidth >= LGWIDTH) {
    width = getColValue([lg, md, sm, span]);
  } else if (screenWidth >= MDWIDTH) {
    width = getColValue([md, sm, span]);
  } else if (screenWidth >= SMWIDTH) {
    width = getColValue([sm, span]);
  } else {
    width = getColValue([xs, span]);
  }

  return width === undefined ? 4 : width;
};
