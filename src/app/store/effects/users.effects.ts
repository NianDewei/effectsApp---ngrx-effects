import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actionsUsers from '../actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';
import { ErrorRes } from 'src/app/interfaces/user.interface';

@Injectable()
export class usersEffects {
  constructor(private _actions$: Actions, private _usersService: UserService) {}

  loadUsers$ = createEffect(() =>
    this._actions$.pipe(
      ofType(actionsUsers.loadUsers),
      mergeMap(() =>
        this._usersService.getUsers().pipe(
          map((users) => actionsUsers.loadUsersSuccess({ users: users })),
          catchError((err: ErrorRes) =>
            of(
              actionsUsers.loadUsersError({
                paylod: {
                  status: err.status,
                  url: err.url,
                  name: err.message,
                  message: err.message,
                },
              })
            )
          )
        )
      )
    )
  );
}
