import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent, UserComponent, UsersComponent} from './components';
import {HttpClientModule} from "@angular/common/http";

// #Практическая
//
// все делаем без роутов...
// везде используем @Output
// в правом верхнем углу username меняется
// с помощью BehaviorSubject при нажатии на кнопку Login (по умолчанию 'anonymous')

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
