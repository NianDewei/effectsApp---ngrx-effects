import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import * as actions from '../actions';

export interface UsersState {
  users: Array<User>;
  loading: boolean;
  loaded: boolean;
  error: any | null;
}

export const usersInitialState: UsersState = {
  users: [] as Array<User>,
  loading: false,
  loaded: false,
  error: null,
};

const _usersReducer = createReducer(
  usersInitialState,

  on(actions.loadUsers, (state) => ({ ...state, loading: true })),

  on(actions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...users],
  })),

  on(actions.loadUsersError, (state, { paylod }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: paylod,
  }))
);

export const usersReducer = (
  state: UsersState = usersInitialState,
  action: Action
) => _usersReducer(state, action);