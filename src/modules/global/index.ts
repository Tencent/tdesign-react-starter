import { createSlice } from '@reduxjs/toolkit';
import { COLOR_TOKEN, TColorSeries, TColorToken, LIGHT_CHART_COLORS } from 'configs/color';
import { RootState } from '../store';
import { version } from '../../../package.json';

const namespace = 'global';

export enum ETheme {
  light = 'light',
  dark = 'dark',
  // system = 'system',
}

export enum ELayout {
  side = 1,
  top,
  mix,
}

export interface IGlobalState {
  loading: boolean;
  collapsed: boolean;
  setting: boolean;
  version: string;
  color: string;
  theme: ETheme;
  layout: ELayout;
  showHeader: boolean;
  showBreadcrumbs: boolean;
  showFooter: boolean;
  colorList: TColorSeries;
  chartColors: TColorToken;
}

const initialState: IGlobalState = {
  loading: true,
  collapsed: window.innerWidth < 1000, // 宽度小于1000 菜单闭合
  setting: false,
  version,
  theme: ETheme.light,
  layout: ELayout.side,
  color: '#0052D9',
  showHeader: true,
  showBreadcrumbs: false,
  showFooter: true,
  colorList: COLOR_TOKEN,
  chartColors: LIGHT_CHART_COLORS,
};

// 创建带有命名空间的reducer
const globalSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    toggleMenu: (state, action) => {
      if (action.payload === null) {
        state.collapsed = !state.collapsed;
      } else {
        state.collapsed = !!action.payload;
      }
    },
    toggleSetting: (state) => {
      state.setting = !state.setting;
    },
    toggleShowHeader: (state) => {
      state.showHeader = !state.showHeader;
    },
    toggleShowBreadcrumbs: (state) => {
      state.showBreadcrumbs = !state.showBreadcrumbs;
    },
    toggleShowFooter: (state) => {
      state.showFooter = !state.showFooter;
    },
    switchTheme: (state, action) => {
      if (action?.payload) {
        state.theme = action?.payload;
        document.documentElement.setAttribute('theme-mode', action?.payload);
      }
    },
    switchColor: (state, action) => {
      if (action?.payload) {
        state.color = action?.payload;
        document.documentElement.style.setProperty(`--td-brand-color-8`, action?.payload);
      }
    },
    switchLayout: (state, action) => {
      if (action?.payload) {
        state.layout = action?.payload;
      }
    },
    switchChartColor(state, action) {
      if (action?.payload) {
        state.chartColors = action?.payload;
      }
    },
  },
  extraReducers: () => {},
});

export const selectGlobal = (state: RootState) => state.global;

export const {
  toggleMenu,
  toggleSetting,
  toggleShowHeader,
  toggleShowBreadcrumbs,
  toggleShowFooter,
  switchTheme,
  switchColor,
  switchLayout,
  switchChartColor,
} = globalSlice.actions;

export default globalSlice.reducer;
