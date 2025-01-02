import {Component, computed, signal} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  randomIndex = Math.floor(Math.random() * (DUMMY_USERS.length));
  selectedUser = signal(DUMMY_USERS[this.randomIndex]);
  imagePath = computed(() => '../../assets/users/' + this.selectedUser().avatar);


  onUserSelected() {
    this.randomIndex = Math.floor(Math.random() * (DUMMY_USERS.length));
    this.selectedUser.set(DUMMY_USERS[this.randomIndex]);
  }
}