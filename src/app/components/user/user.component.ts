import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from "../../models/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input()
  user: IUser;

  @Output()
  userUp = new EventEmitter<IUser>();


 openUser() {
    this.userUp.emit(this.user);
 }

}
