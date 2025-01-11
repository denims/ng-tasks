import {Component, signal} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {DUMMY_USERS} from "./dummy-users";
import {NgForOf} from "@angular/common";
import {TasksComponent} from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, NgForOf, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  title = 'deni-2';
  selectedUser = signal<string>('Select a User');

  onUserSelected(userId: string) {
    this.selectedUser.set(this.users.find(e => e.id === userId)!.name);
  }
}

