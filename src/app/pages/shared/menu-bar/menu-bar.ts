import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from "@angular/router";
import { User } from './user/user';
import { UserService } from '../../../services/user-service';

@Component({
  selector: 'app-menu-bar',
  imports: [
    RouterLink,
    RouterModule,
    User
  ],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.css',
})
export class MenuBar implements OnInit {
  @Input()
  loginPage: boolean = false;
  user_role: number = 0;
  username: string = "";
  rolename: string = "";

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {

    const token = localStorage.getItem("token");
    
    if (token === null) {
      localStorage.clear();
      return;
    }
    
    this.userService.validToken().subscribe({
      next: (success) => {
        this.user_role = Number(localStorage.getItem("user_role")) || 0 ;
        this.username = localStorage.getItem("username") || "";
        this.rolename = localStorage.getItem("rolename") || "";
      },
      error: (error) => {
        localStorage.clear();
        return;
      }
    });

    

  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

}
