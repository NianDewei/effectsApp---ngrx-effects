import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import * as actionsUsers from 'src/app/store/actions';
import { UsersState } from 'src/app/store/reducers';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  users$!: Observable<UsersState>;

  constructor(private _store: Store<AppState>) {}

  ngOnInit(): void {
    this._store.dispatch(actionsUsers.loadUsers());
    this.users$ = this._store.select('users');
  }
}
