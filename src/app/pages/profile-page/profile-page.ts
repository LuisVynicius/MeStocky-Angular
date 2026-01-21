import { Component } from '@angular/core';
import { FormInput } from '../shared/form-input/form-input';
import { Button } from '../shared/button/button';

@Component({
  selector: 'app-profile-page',
  imports: [
    FormInput,
    Button
  ],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage {

}
