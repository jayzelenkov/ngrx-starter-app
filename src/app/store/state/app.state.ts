import {RouterReducerState } from '@ngrx/router-store';

import {IConfigState, initialConfigState} from './config.state';

export interface IAppState {
  router?: RouterReducerState;
  config: IConfigState;
}

export const initialAppState: IAppState = {
  config: initialConfigState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
