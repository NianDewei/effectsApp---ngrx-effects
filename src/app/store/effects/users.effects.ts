import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actionsUsers from '../actions';
import { map, mergeMap, tap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class usersEffects {
  constructor(private _actions$: Actions, private _usersService: UserService) {}

  loadUsers$ = createEffect(() =>
    this._actions$.pipe(
      ofType(actionsUsers.loadUsers),
      tap((data) => console.log('effect tap: ', data)),
      mergeMap(() =>
        this._usersService.getUsers().pipe(
          tap((data) => console.log('getUsers effects', data)),
          map((users) => actionsUsers.loadUsersSuccess({ users: users }))
        )
      )
    )
  );
}
