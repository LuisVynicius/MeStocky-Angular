import { Component } from '@angular/core';
import { FormInput } from '../shared/form-input/form-input';
import { Button } from '../shared/button/button';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-profile-page',
  imports: [
    FormsModule,
    FormInput,
    Button
  ],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage {
  
  constructor(
    private userService: UserService
  ) { }

  updateInformations(form: NgForm) {
    const user = form.value;

    this.userService.updateUserInformations(user).subscribe({
      next: (success) => {
        alert("Nome e email atualizados");
      }
    })
  }

  saveCredentials(form: NgForm) {
    console.log(form.value);
  }
}
