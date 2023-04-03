import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, RouterModule } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import * as actionsUser from 'src/app/store/actions';
import { Observable } from 'rxjs';
import { UserState } from 'src/app/store/reducers';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user$!: Observable<UserState>;
  constructor(
    private _store: Store<AppState>,
    private _router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._router.params.subscribe({
      next: ({ id }) => {
        console.log(id);
        this._store.dispatch(actionsUser.loadUser({ id }));
      },
    });

    this.user$ = this._store.select('user');
  }
}
