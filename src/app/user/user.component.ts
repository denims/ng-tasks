import {Component, computed, EventEmitter, input, Input, output, Output, signal} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  id = input.required<string>();
  @Input({required: true}) userName!: string;
  avatar = input.required<string>();
  imagePath = computed(() => '../../assets/users/' + this.avatar());
  // @Output() selectedUser = new EventEmitter<string>();
  selectedUser = output<string>();

  onUserSelected() {
    this.selectedUser.emit(this.id());
  }
}
