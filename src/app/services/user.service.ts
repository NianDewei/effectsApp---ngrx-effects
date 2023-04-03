import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UsersRes } from '../interfaces/users.interface';
import { UserRes } from '../interfaces/user.interface';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly _path: string = environment.url;
  constructor(private _http: HttpClient) {}

  // !methods
  getUsers(): Observable<Array<User>> {
    return this._http
      .get<UsersRes>(`${this._path}/users?per_page=6&delay=5`)
      .pipe(map((res) => res.data));
  }

  getUserBy(id: string): Observable<User> {
    return this._http
      .get<UserRes>(`${this._path}/users/${id}`)
      .pipe(map((res) => res.data));
  }
}
