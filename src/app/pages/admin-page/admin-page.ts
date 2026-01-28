import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserInformation } from './user-information/user-information';
import { UserAdminShape } from '../../shape/userShape';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-admin-page',
  imports: [
    UserInformation
  ],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.css',
})
export class AdminPage implements OnInit {
  users: UserAdminShape[] = [];

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.userService.getAllUsersForAdmin().subscribe({
      next: (success) => {
        this.users = success;
        this.cdr.markForCheck();
      }
    });

  }

}
