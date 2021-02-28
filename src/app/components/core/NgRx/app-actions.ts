import {Action} from '@ngrx/store';
import {Color} from './app-interfaces';

export const CHANGE_THEME = 'CHANGE_THEME';

export class ChangeTheme implements Action {
  readonly type = CHANGE_THEME;
  constructor(public payload: Color) {}
}


export type AppActions = ChangeTheme;
