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
import { CreateReason } from './create-reason/create-reason';
import { EditReason } from './edit-reason/edit-reason';
import { DeleteReason } from './delete-reason/delete-reason';

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
    CreateReason,
    
    EditCategory,
    EditReason,

    DeleteCategory,
    DeleteUser,
    DeleteReason
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
        this.users = success as UserAdminShape[];
        this.cdr.markForCheck();
      },
      error: (error) => {
        alert("Erro interno");
      }
    });

    this.categoryService.getAllCategoriesAdmin().subscribe({
      next: (success) => {
        this.categories = success as CategoryShape[];
        this.cdr.markForCheck();
      },
      error: (error) => {
        alert("Erro interno");
      }
    });

    this.reasonService.getAllReasons().subscribe({
      next: (success) => {
        this.reasons = success as ReasonShape[];
        this.cdr.markForCheck();
      },
      error: (error) => {
        alert("Erro interno");
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