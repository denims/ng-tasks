import {Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {DUMMY_USERS} from "./dummy-users";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  title = 'deni-2';

  onUserSelected(userId: string) {
    console.log(userId);
  }
}

