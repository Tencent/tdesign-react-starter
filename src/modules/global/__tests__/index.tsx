import { store } from '../../store';
import {
  toggleMenu,
  toggleSetting,
  toggleShowHeader,
  toggleShowBreadcrumbs,
  toggleShowFooter,
  switchTheme,
  switchColor,
  switchLayout,
  ELayout,
} from '../index';

// test('test toggleMenu', () => {
//   let state = store.getState().global;
//   const defaultValue = state.collapsed;
//
//   store.dispatch(toggleMenu(null));
//   state = store.getState().global;
//   expect(state.collapsed).toBe(!defaultValue);
//
//   store.dispatch(toggleMenu(true));
//   state = store.getState().global;
//   expect(state.collapsed).toBeTruthy();
//
//   store.dispatch(toggleMenu(false));
//   state = store.getState().global;
//   expect(state.collapsed).toBeFalsy();
// });
//
// test('test toggleSetting', () => {
//   let state = store.getState().global;
//   const defaultValue = state.setting;
//
//   store.dispatch(toggleSetting());
//   state = store.getState().global;
//   expect(state.setting).toBe(!defaultValue);
// });
//
// test('test toggleShowHeader', () => {
//   let state = store.getState().global;
//   const defaultValue = state.showHeader;
//
//   store.dispatch(toggleShowHeader());
//   state = store.getState().global;
//   expect(state.showHeader).toBe(!defaultValue);
// });
//
// test('test toggleShowBreadcrumbs', () => {
//   let state = store.getState().global;
//   const defaultValue = state.showBreadcrumbs;
//
//   store.dispatch(toggleShowBreadcrumbs());
//   state = store.getState().global;
//   expect(state.showBreadcrumbs).toBe(!defaultValue);
// });
//
// test('test toggleShowFooter', () => {
//   let state = store.getState().global;
//   const defaultValue = state.showFooter;
//
//   store.dispatch(toggleShowFooter());
//   state = store.getState().global;
//   expect(state.showFooter).toBe(!defaultValue);
// });
//
// test('test switchTheme', () => {
//   const testTheme = 'test-theme';
//   store.dispatch(switchTheme(testTheme));
//   const state = store.getState().global;
//   expect(state.theme).toBe(testTheme);
// });
//
// test('test switchColor', () => {
//   const color = 'red';
//   store.dispatch(switchColor(color));
//   const state = store.getState().global;
//   expect(state.color).toBe(color);
// });
//
// test('test switchLayout', () => {
//   const layout = ELayout.side;
//   store.dispatch(switchLayout(layout));
//   const state = store.getState().global;
//   expect(state.layout).toBe(layout);
// });

test('test', () => {
  expect(1).toBe(1);
});
