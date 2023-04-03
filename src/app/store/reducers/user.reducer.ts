import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { ErrorRes } from 'src/app/interfaces/users.interface';
import * as actions from '../actions';

export interface UserState {
  id: string | null;
  user: User | null;
  loading: boolean;
  loaded: boolean;
  error: ErrorRes | null;
}

export const userInitialState: UserState = {
  id: null,
  user: null,
  loading: false,
  loaded: false,
  error: null,
};

const _userReducer = createReducer(
  userInitialState,

  on(actions.loadUser, (state, { id }) => ({
    ...state,
    loading: true,
    id,
  })),

  on(actions.loadUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: { ...user },
  })),

  on(actions.loadUserError, (state, { paylod }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: paylod,
  }))
);

export const userReducer = (
  state: UserState = userInitialState,
  action: Action
) => _userReducer(state, action);
