import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../models/User";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  singleUser: IUser;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(value => {
      this.userService.getUser(value.id).subscribe(data => this.singleUser = data)
    })
  }
}
