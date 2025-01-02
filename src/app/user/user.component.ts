import {Component, computed, Input, signal} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() userName!: string;
  @Input() avatar!: string;

  get imagePath() {
    return '../../assets/users/' + this.avatar;
  }


  onUserSelected() {
  }
}
