import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const namespace = 'global';

export interface IGlobalState {
  loading: boolean;
  collapsed: boolean;
  setting: boolean;
  version: string;
}

const initialState: IGlobalState = {
  loading: true,
  collapsed: window.innerWidth < 1000, // 宽度小于1000 菜单闭合
  setting: false,
  version: '0.0.1',
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
  },
  extraReducers: () => {},
});

export const selectGlobal = (state: RootState) => state.global;
export const { toggleMenu, toggleSetting } = globalSlice.actions;
export default globalSlice.reducer;
