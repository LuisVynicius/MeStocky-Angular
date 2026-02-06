import { Component, OnInit } from '@angular/core';
import { FormInput } from '../shared/form-input/form-input';
import { Button } from '../shared/button/button';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginShape, TokenShape } from '../../shape/userShape';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';
import { MenuBar } from '../shared/menu-bar/menu-bar';
import { AuthenticationShape } from '../../shape/generics';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormInput,
    Button,
    FormsModule,
    MenuBar
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }
  
  ngOnInit(): void {

    const token = localStorage.getItem("token");
    
    if (token === null) {
      localStorage.clear();
    }
    
    this.userService.validToken().subscribe({
      next: (success) => {
        this.router.navigate(["/stock"]);
      },
      error: (error) => {
        localStorage.clear();
      }
      }
    );

  }

  login(form: NgForm) {

    let login: LoginShape = form.value;

    this.userService.login(login).subscribe({
      next: (success) => {
        const authentication = success as AuthenticationShape
        localStorage.setItem("token", authentication.token);
        localStorage.setItem("user_role", String(authentication.role));
        localStorage.setItem("username", authentication.username);
        localStorage.setItem("rolename", authentication.rolename);

        this.router.navigate(["/stock"]);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
