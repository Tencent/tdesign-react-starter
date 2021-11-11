import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

import global from './global';
import form from './form';
import stepForm from './stepForm';
import complexForm from './complexForm';
import customTable from './customTable';
import complexTable from './complexTable';
import chart from './chart';
import report from './report';

const reducer = combineReducers({
  global,
  form,
  stepForm,
  complexForm,
  customTable,
  complexTable,
  chart,
  report,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
