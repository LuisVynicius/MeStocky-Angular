import { Component } from '@angular/core';
import { FormInput } from '../shared/form-input/form-input';
import { Button } from '../shared/button/button';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { MenuBar } from '../shared/menu-bar/menu-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  imports: [
    FormsModule,
    FormInput,
    Button,
    MenuBar
  ],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage {
  
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  updateInformations(form: NgForm) {
    const user = form.value;

    this.userService.updateUserInformations(user).subscribe({
      next: (success) => {
        localStorage.clear();
        this.router.navigate(["/login"]);
      }
    })
  }

  saveCredentials(form: NgForm) {
    console.log(form.value);
  }
}
