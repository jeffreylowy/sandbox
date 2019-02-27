import { Action } from '@ngrx/store';

export enum ActionTypes {
  Increment = '[Counter Component] Increment',
  Decrement = '[Counter Component] Decrement',
  Reset = '[Counter Component] Reset',
}

export enum ActionTypes2 {
  Increment2 = '[Counter Component 2] Increment',
}

export class Increment implements Action {
  readonly type = ActionTypes.Increment;
}

export class Increment2 implements Action {
  readonly type = ActionTypes2.Increment2;
}

export class Decrement implements Action {
  readonly type = ActionTypes.Decrement;
}

export class Reset implements Action {
  readonly type = ActionTypes.Reset;
}

export const initialState = 0;

export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Increment:
      return state + 1;

    case ActionTypes.Decrement:
      return state - 1;

    case ActionTypes.Reset:
      return 0;

    default:
      return state;
  }
}

export function counterReducer2(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes2.Increment2:
      console.log('state', state);
      return state + 1;
    default:
      return state;
  }
}
