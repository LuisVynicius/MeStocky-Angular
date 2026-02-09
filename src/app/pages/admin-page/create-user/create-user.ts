import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormInput } from '../../shared/form-input/form-input';
import { Button } from '../../shared/button/button';
import { UserService } from '../../../services/user-service';
import { UserCreateShape } from '../../../shape/userShape';
import { SelectInput } from '../../shared/select-input/select-input';

@Component({
  selector: 'app-create-user',
  imports: [
    FormsModule,
    FormInput,
    SelectInput,
    Button
  ],
  templateUrl: './create-user.html',
  styleUrl: './create-user.css',
})
export class CreateUser {

  @Output()
  clicked = new EventEmitter<void>();
  
  constructor(
    private userService: UserService
  ) { }

  onClick() {
    this.clicked.emit();
  }

  insertUser(form: NgForm) {

    const user: UserCreateShape = {
      username: form.value.username,
      email: form.value.email,
      password: form.value.password,
      role: Number(form.value.role),
      phone: form.value.phone
    };

    this.userService.createUser(user).subscribe({
          next: (success) => {
            window.location.reload();
          },
          error: (error) => {
            alert(error.error)
          }
      });
    }

}
