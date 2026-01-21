import { Component } from '@angular/core';
import { UserInformation } from './user-information/user-information';

@Component({
  selector: 'app-admin-page',
  imports: [
    UserInformation
  ],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.css',
})
export class AdminPage {

}
