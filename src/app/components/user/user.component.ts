import {Component, EventEmitter, Input, Output} from '@angular/core';
                                                                    // TODO роби пробіл між бібліотечними імпортами та своїми
import {IUser} from "../../models/user";                            // TODO додай індекс файл в моделі

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input()
  user: IUser;

  @Output()
  userUp = new EventEmitter<IUser>();                               // TODO навіщо це - <IUser> ?

                                                                    // TODO зайвий пробіл
 openUser() {
    this.userUp.emit(this.user);
 }

}
