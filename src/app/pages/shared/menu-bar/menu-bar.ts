import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";
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
  logged: boolean = false;
  user_role: number = 0;
  username: string = "";
  rolename: string = "";

  ngOnInit(): void {

    this.logged = localStorage.getItem("token") !== null;
    this.user_role = Number(localStorage.getItem("user_role")) || 0 ;
    this.username = localStorage.getItem("username") || "";
    this.rolename = localStorage.getItem("rolename") || "";

  }

}
