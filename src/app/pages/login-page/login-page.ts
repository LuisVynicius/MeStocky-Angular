import { Component } from '@angular/core';
import { FormInput } from './form-input/form-input';
import { Button } from '../shared/button/button';

@Component({
  selector: 'app-login-page',
  imports: [
    FormInput,
    Button
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

}
