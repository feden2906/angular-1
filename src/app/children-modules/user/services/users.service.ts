import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IUser} from "../models/User";
import {HttpClient} from "@angular/common/http";
import {IPost} from "../../posts/models";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.url + '/users');
  }

  getUserPost(id: string): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.url + '/posts?userId=' + id)
  }
}





