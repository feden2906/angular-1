import {Component} from '@angular/core';
                                            // TODO в цій компоненті не вирівняний код  -  Ctrl + Alt + L
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

name: string = 'anonymous';

clickName(loginName: string) {
  this.name= loginName
}
                                            // TODO зайвий пробіл
}
