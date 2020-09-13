import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wetherApp';
  onClick = false;
  login = false;
  logIn(){
    this.onClick= true;
    this.login = !this.login;
  }
}
