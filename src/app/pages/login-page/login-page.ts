import { Component } from '@angular/core';
import { FormInput } from '../shared/form-input/form-input';
import { Button } from '../shared/button/button';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginShape } from '../../shape/userShape';

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
  login(form: NgForm) {
    let login: LoginShape = form.value;

    console.log(login);
  }
}
