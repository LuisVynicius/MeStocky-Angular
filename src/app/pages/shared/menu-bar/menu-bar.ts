import { Component } from '@angular/core';
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
export class MenuBar {

}
