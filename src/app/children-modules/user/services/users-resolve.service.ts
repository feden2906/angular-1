import {Injectable} from '@angular/core';
import {IUser} from "../models/User";
import {Resolve} from "@angular/router";
import {Observable} from 'rxjs';
import {UsersService} from "./users.service";

@Injectable({
  providedIn: 'root'
})
export class UsersResolveService implements Resolve<IUser[]> {

  constructor(private usersService: UsersService) {
  }

  resolve(): Observable<IUser[]> {
    return this.usersService.getUsers();
  }
}
