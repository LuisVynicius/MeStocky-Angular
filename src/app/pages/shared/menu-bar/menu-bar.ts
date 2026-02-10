import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from "@angular/router";
import { User } from './user/user';

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
  ) { }

  ngOnInit(): void {

    const token = localStorage.getItem("token");
    
    if (token === null) {
      this.logout();
    }

    this.user_role = Number(localStorage.getItem("user_role")) || 0 ;
    this.username = localStorage.getItem("username") || "";
    this.rolename = localStorage.getItem("rolename") || "";
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

}
