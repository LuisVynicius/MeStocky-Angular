import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserInformation } from './user-information/user-information';
import { UserAdminShape } from '../../shape/userShape';
import { UserService } from '../../services/user-service';
import { MenuBar } from '../shared/menu-bar/menu-bar';
import { CategoryInformations } from './category-informations/category-informations';
import { CategoryService } from '../../services/category-service';
import { CategoryShape } from '../../shape/CategoryShape';
import { Button } from '../shared/button/button';
import { CreateCategory } from './create-category/create-category';
import { EditCategory } from './edit-category/edit-category';
import { CreateUser } from './create-user/create-user';

@Component({
  selector: 'app-admin-page',
  imports: [
    UserInformation,
    CategoryInformations,
    MenuBar,
    Button,
    CreateCategory,
    EditCategory,
    CreateUser
  ],
  templateUrl: './admin-page.html',
  styleUrl: './admin-page.css',
})
export class AdminPage implements OnInit {
  users: UserAdminShape[] = [];
  categories:CategoryShape[] = [];

  popup_value: number = 0;
  category_id: number = 0;

  constructor(
    private userService: UserService,
    private categoryService: CategoryService,
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

  }

  popup(value: number) {
    if (this.popup_value === value) {
      this.popup_value = 0;
    } else {
      this.popup_value = value;
    }
  }

  popup_edit(id: number) {
    this.popup(2);
    this.category_id = id;
  }

  popup_delete(id: number) {
    this.popup(3);
    this.category_id = id;  
  }

}
