import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IUser} from "../../models/user";
import {UsersService, DataTransferService} from "../../services";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users: IUser[];
  userDetails: IUser;

  @Output()
  loginName = new EventEmitter<string>();

  constructor(private usersService: UsersService, private dataTransfer: DataTransferService) {
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(value => this.users = value)
  }

  showDetails(details: IUser) {
    this.userDetails = details
  }

  login() {
    this.dataTransfer.store.next(this.userDetails.username)
    this.loginName.emit(this.dataTransfer.store.getValue())
  }
}
