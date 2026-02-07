import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../../shared/button/button';
import { FormInput } from '../../shared/form-input/form-input';
import { FormsModule, NgForm } from '@angular/forms';
import { CategoryService } from '../../../services/category-service';
import { CategoryUpdateShape } from '../../../shape/categoryShape';

@Component({
  selector: 'app-edit-category',
  imports: [
    Button,
    FormInput,
    FormsModule
  ],
  templateUrl: './edit-category.html',
  styleUrl: './edit-category.css',
})
export class EditCategory {
  @Input()
  category_id: number = 0;

  @Output()
  clicked = new EventEmitter<void>();

  constructor(
    private categoryService: CategoryService
  ) { }

  onClick() {
    this.clicked.emit();
  }

  editCategory(form: NgForm) {

    const category: CategoryUpdateShape = {
      id: this.category_id,
      name: form.value.name
    };

    this.categoryService.updateCategory(category).subscribe({
      next: (success) => {
        window.location.reload();
      },
      error: (error) => {
        alert(error.error)
      }
    })
  }

}
