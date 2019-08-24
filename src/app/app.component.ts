import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw1';
  subtitle: string = 'step1';

  users: Array<any> = [
    {
      login: 'lolkek',
      pass: 'Maks228',
      email: 'lol228@g.com'
    },
    {
      login: 'cheburek',
      pass: '1111',
      email: 'kisa2005@g'
    }
  ];
  login: string;
  pass: string;
  email: string;
  num: number = 0;
  checker: boolean = true;

  public addUser(): void {
    let newUser = new Users(this.login, this.pass, this.email);
    this.users.push(newUser);
    this.login = '';
    this.pass = '';
    this.email = '';
  };

  public deleteUser(index: number): void {
    this.users.splice(index, 1);
  };
  public editUser(index: number): void {
    this.login = this.users[index].login;
    this.pass = this.users[index].pass;
    this.email = this.users[index].email;
    this.num = index;
    this.checker = false;
  };
  public editBtn(): void {
    this.users[this.num].login = this.login;
    this.users[this.num].pass = this.pass;
    this.users[this.num].email = this.email;
    this.checker = true;
    this.login = '';
    this.pass = '';
    this.email = '';
  }
}

function Users(login, pass, email) {
  this.login = login;
  this.pass = pass;
  this.email = email;
}