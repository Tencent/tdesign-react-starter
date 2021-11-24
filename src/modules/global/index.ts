import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const namespace = 'global';

export interface IAuth {
  id: number;
  name: string;
  auth_key: string;
  app_id: number;
}

export interface IGlobalState {
  loading: boolean;
  collapsed: boolean;
  auth: IAuth[];
}

const initialState: IGlobalState = {
  loading: true,
  collapsed: false,
  auth: [],
};

export const fetchAuth = createAsyncThunk(`${namespace}/leahAuth`, async () => {
  return [];
});

// 创建带有命名空间的reducer
const globalSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    toggleMenu: (state) => {
      return {
        ...state,
        collapsed: !state.collapsed,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAuth.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const selectGlobal = (state: RootState) => state.global;
export const { toggleMenu } = globalSlice.actions;
export default globalSlice.reducer;
