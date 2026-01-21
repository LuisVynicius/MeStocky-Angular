import { Component } from '@angular/core';
import { FormInput } from '../shared/form-input/form-input';
import { Button } from '../shared/button/button';
import { FormsModule, NgForm } from '@angular/forms';

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
  saveInformations(form: NgForm) {
    console.log(form.value);
  }

  saveCredentials(form: NgForm) {
    console.log(form.value);
  }
}
