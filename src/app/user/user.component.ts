import { Component } from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  randomIndex = Math.floor(Math.random() * (DUMMY_USERS.length));
  selectedUser = DUMMY_USERS[this.randomIndex];
}
