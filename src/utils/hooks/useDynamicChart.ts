/* eslint-disable no-param-reassign */
import { useAppSelector } from 'modules/store';
import { selectGlobal } from 'modules/global';
import { getChartColor, LIGHT_CHART_COLORS } from 'configs/color';
import lodashSet from 'lodash/set';
import lodashMap from 'lodash/map';

export type TChartColorKey = keyof typeof LIGHT_CHART_COLORS;
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
  const { color } = useAppSelector(selectGlobal);
  const dynamicColor = getChartColor(color);

  if (options) {
    options = lodashSet(options, 'color', dynamicColor.colorList); // 设置动态的图表颜色
    lodashMap(configs, (config, configKey: TChartColorKey) => {
      // eslint-disable-next-line no-return-assign
      config?.map((v) => (options = lodashSet(options, `${v}`, dynamicColor[configKey])));
    });
    return { ...options };
  }
  return {};
}
