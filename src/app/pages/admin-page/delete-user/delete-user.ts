import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../../shared/button/button';
import { UserService } from '../../../services/user-service';

@Component({
  selector: 'app-delete-user',
  imports: [
    Button
  ],
  templateUrl: './delete-user.html',
  styleUrl: './delete-user.css',
})
export class DeleteUser {

  @Input()
  user_id: number = 0;

  @Output()
  clicked = new EventEmitter<void>();
  
  constructor(
    private userService: UserService
  ) { }

  onClick() {
    this.clicked.emit();
  }

  deleteCategory() {

    this.userService.deleteUser(this.user_id).subscribe({
      next: (success) => {
        window.location.reload();
      }
    });

  }

}
