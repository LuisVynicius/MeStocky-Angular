import { Component } from '@angular/core';
import { FormInput } from '../shared/form-input/form-input';
import { Button } from '../shared/button/button';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginShape } from '../../shape/userShape';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormInput,
    Button,
    FormsModule
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

  constructor(
    private userService: UserService
  ) { }
  
  login(form: NgForm) {
    let login: LoginShape = form.value;

    this.userService.login(login).subscribe({
      next: (success) => {
        localStorage.setItem("token", success.token);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
