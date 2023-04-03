import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { ErrorRes } from 'src/app/interfaces/users.interface';
import * as actionsUser from '../actions';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class userEffects {
  constructor(private _actions$: Actions, private _usersService: UserService) {}

  loadUser$ = createEffect(() =>
    this._actions$.pipe(
      ofType(actionsUser.loadUser),
      mergeMap(({ id }) =>
        this._usersService.getUserBy(id).pipe(
          map((user) => actionsUser.loadUserSuccess({ user: user })),
          catchError((err: ErrorRes) =>
            of(
              actionsUser.loadUserError({
                paylod: {
                  status: err.status,
                  url: err.url,
                  name: err.name,
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
