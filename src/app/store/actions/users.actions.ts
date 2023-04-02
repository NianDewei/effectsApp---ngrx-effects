import { createAction, props } from '@ngrx/store';
import { ErrorRes } from 'src/app/interfaces/user.interface';
import { User } from 'src/app/models/user.model';

export const loadUsers = createAction('[Users] Load Users');

export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ users: Array<User> }>()
);

export const loadUsersError = createAction(
  '[Users] Load Users Error',
  props<{ paylod: ErrorRes }>()
);
