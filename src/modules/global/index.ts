import { createSlice } from '@reduxjs/toolkit';
import { COLOR_TOKEN, TColorSeries, TColorToken, LIGHT_CHART_COLORS, DARK_CHART_COLORS } from 'configs/color';
import { RootState } from '../store';
import { version } from '../../../package.json';

const namespace = 'global';

export enum ETheme {
  light = 'light',
  dark = 'dark',
}

export enum ELayout {
  side = 1,
  top,
  mix,
  fullPage,
}

export interface IGlobalState {
  loading: boolean;
  collapsed: boolean;
  setting: boolean;
  version: string;
  color: string;
  theme: ETheme;
  layout: ELayout;
  isFullPage: boolean;
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
  isFullPage: false,
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
      let finalTheme = action?.payload;
      if (!finalTheme) {
        // 跟随系统
        const media = window.matchMedia('(prefers-color-scheme:dark)');
        if (media.matches) {
          finalTheme = media.matches ? ETheme.dark : ETheme.light;
        }
      }
      // 切换 chart 颜色
      state.chartColors = finalTheme === ETheme.dark ? DARK_CHART_COLORS : LIGHT_CHART_COLORS;
      // 切换主题颜色
      state.theme = finalTheme;
      document.documentElement.setAttribute('theme-mode', finalTheme);
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
    switchFullPage: (state, action) => {
      state.isFullPage = !!action?.payload;
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
  switchFullPage,
} = globalSlice.actions;

export default globalSlice.reducer;
