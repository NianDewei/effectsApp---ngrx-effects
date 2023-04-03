import { createAction, props } from '@ngrx/store';
import { ErrorRes } from 'src/app/interfaces/users.interface';
import { User } from 'src/app/models/user.model';

export const loadUser = createAction(
  '[User] Load User',
  props<{ id: string }>()
);

export const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ user: User }>()
);

export const loadUserError = createAction(
  '[User] Load User Error',
  props<{ paylod: ErrorRes }>()
);
