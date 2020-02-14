declare module 'redux-types' {
  import { StateType, ActionType } from 'typesafe-actions';
  export type RootState = StateType<typeof import('../store/reducer').default>;
}
