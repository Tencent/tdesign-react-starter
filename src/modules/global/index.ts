import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const namespace = 'global';

export interface IGlobalState {
  loading: boolean;
  collapsed: boolean;
  setting: boolean;
  version: string;

  color: string;
  theme: 'light' | 'dark';
  fixedHeader: boolean;
  showHeader: boolean;
  showBreadcrumbs: boolean;
  showFooter: boolean;
}

const initialState: IGlobalState = {
  loading: true,
  collapsed: window.innerWidth < 1000, // 宽度小于1000 菜单闭合
  setting: false,
  version: '0.0.1',

  theme: 'light',
  color: 'rgb(0, 82, 217)',
  fixedHeader: false,
  showHeader: true,
  showBreadcrumbs: false,
  showFooter: true,
};

// 创建带有命名空间的reducer
const globalSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.collapsed = !state.collapsed;
    },
    toggleSetting: (state) => {
      state.setting = !state.setting;
    },

    toggleFixedHeader: (state) => {
      state.fixedHeader = !state.fixedHeader;
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
  },
  extraReducers: () => {},
});

export const selectGlobal = (state: RootState) => state.global;
export const {
  toggleMenu,
  toggleSetting,
  toggleFixedHeader,
  toggleShowHeader,
  toggleShowBreadcrumbs,
  toggleShowFooter,
  switchTheme,
  switchColor,
} = globalSlice.actions;
export default globalSlice.reducer;
