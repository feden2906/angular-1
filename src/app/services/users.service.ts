import { Injectable } from '@angular/core';                // TODO використовуй Ctrl + Alt + L
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
                                                           // TODO  пробіл
import {IUser} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.url);
  }
}
