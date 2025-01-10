import {Component, computed, input, Input, signal} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) userName!: string;
  avatar = input.required<string>();
  imagePath = computed(() => '../../assets/users/' + this.avatar());



  onUserSelected() {
  }
}
