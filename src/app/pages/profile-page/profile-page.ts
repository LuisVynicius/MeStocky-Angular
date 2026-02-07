import { Component } from '@angular/core';
import { FormInput } from '../shared/form-input/form-input';
import { Button } from '../shared/button/button';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { MenuBar } from '../shared/menu-bar/menu-bar';
import { Router } from '@angular/router';
import { UserCredentialsShape, UserInformationsShape } from '../../shape/userShape';

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

    const user: UserInformationsShape = form.value;

    this.userService.updateUserInformations(user).subscribe({
      next: (success) => {
        localStorage.clear();
        this.router.navigate(["/login"]);
      },
      error: (error) => {
        alert(error.error)
      }
    })

  }

  updateCredentials(form: NgForm) {

    const user: UserCredentialsShape = form.value;

    this.userService.updateUserCredentials(user).subscribe({
      next: (success) => {
        alert("Senha alterada");
      },
      error: (error) => {
        alert(error.error)
      }
    });

  }

}