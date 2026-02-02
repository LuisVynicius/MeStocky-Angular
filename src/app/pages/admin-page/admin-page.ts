import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserInformation } from './user-information/user-information';
import { UserAdminShape } from '../../shape/userShape';
import { UserService } from '../../services/user-service';
import { MenuBar } from '../shared/menu-bar/menu-bar';
import { CategoryInformations } from './category-informations/category-informations';
import { CategoryService } from '../../services/category-service';
import { CategoryShape } from '../../shape/categoryShape';
import { Button } from '../shared/button/button';
import { CreateCategory } from './create-category/create-category';
import { EditCategory } from './edit-category/edit-category';
import { CreateUser } from './create-user/create-user';
import { DeleteCategory } from './delete-category/delete-category';
import { DeleteUser } from './delete-user/delete-user';
import { ReasonService } from '../../services/reason-service';
import { ReasonShape } from '../../shape/reasonShape';
import { ReasonInformations } from './reason-informations/reason-informations';

@Component({
  selector: 'app-admin-page',
  imports: [
    UserInformation,
    CategoryInformations,
    ReasonInformations,

    MenuBar,
    Button,
    
    CreateCategory,
    CreateUser,
    EditCategory,
    DeleteCategory,
    DeleteUser
  ],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.css',
})
export class AdminPage implements OnInit {
  users: UserAdminShape[] = [];
  categories: CategoryShape[] = [];
  reasons: ReasonShape[] = [];

  popup_value: number = 0;
  
  category_id: number = 0;
  user_id: number = 0;
  reason_id: number = 0;

  constructor(
    private userService: UserService,
    private categoryService: CategoryService,
    private reasonService: ReasonService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.userService.getAllUsersForAdmin().subscribe({
      next: (success) => {
        this.users = success;
        this.cdr.markForCheck();
      }
    });

    this.categoryService.getAllCategoriesAdmin().subscribe({
      next: (success) => {
        this.categories = success;
        this.cdr.markForCheck();
      }
    });

    this.reasonService.getAllReasons().subscribe({
      next: (success) => {
        this.reasons = success;
        console.log(this.reasons);
        this.cdr.markForCheck();
      }
    });

  }

  popup(value: number) {
    if (this.popup_value === value) {
      this.popup_value = 0;
    } else {
      this.popup_value = value;
    }
  }

}
