import { useMemo } from 'react';
import { useAppSelector } from 'modules/store';
import { selectGlobal } from 'modules/global';
import { getChartColor } from 'utils/color';
import { CHART_COLORS } from 'configs/color';
import lodashSet from 'lodash/set';
import lodashMap from 'lodash/map';
import { ETheme } from '../types';

export type TChartColorKey = keyof typeof CHART_COLORS[ETheme.light];
/**
 * 根据当前主题色返回动态的图表颜色列表
 * @param options 图表的固定配置
 * @param configs 需要动态变换颜色的字段
 * @returns string[]
 */
export default function useDynamicChart(
  options: Record<string, any>,
  configs?: Partial<Record<TChartColorKey, Array<string>>>,
) {
  const { theme, color } = useAppSelector(selectGlobal);
  const dynamicColor = useMemo(() => getChartColor(theme, color), [theme, color]);
  if (options) {
    // 设置动态的图表颜色
    lodashSet(options, 'color', dynamicColor.colorList);
    lodashMap(configs, (config, configKey: TChartColorKey) => {
      config?.map((val) => lodashSet(options, val, dynamicColor[configKey]));
    });
  }

  return {
    ...options,
  };
}
