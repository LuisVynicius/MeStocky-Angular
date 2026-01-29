import { Component } from '@angular/core';
import { FormInput } from '../shared/form-input/form-input';
import { Button } from '../shared/button/button';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginShape } from '../../shape/userShape';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';

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
    private userService: UserService,
    private router: Router
  ) { }
  
  login(form: NgForm) {
    let login: LoginShape = form.value;

    this.userService.login(login).subscribe({
      next: (success) => {
        localStorage.setItem("token", success.token);
        localStorage.setItem("user_role", String(success.role));
        localStorage.setItem("username", success.username);
        localStorage.setItem("rolename", success.rolename);

        this.router.navigate(["/stock"]);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
