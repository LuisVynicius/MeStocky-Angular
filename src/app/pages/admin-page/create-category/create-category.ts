import { Component, EventEmitter, Output } from '@angular/core';
import { FormInput } from '../../shared/form-input/form-input';
import { Button } from '../../shared/button/button';
import { FormsModule, NgForm } from '@angular/forms';
import { CategoryService } from '../../../services/category-service';
import { CategoryCreateShape } from '../../../shape/categoryShape';

@Component({
  selector: 'app-create-category',
  imports: [
    FormInput,
    Button,
    FormsModule
  ],
  templateUrl: './create-category.html',
  styleUrl: './create-category.css',
})
export class CreateCategory {

  @Output()
  clicked = new EventEmitter<void>();
  
  constructor(
    private categoryService: CategoryService
  ) { }

  onClick() {
    this.clicked.emit();
  }

  insertCategory(form: NgForm) {

    const category: CategoryCreateShape = {
      name: form.value.name
    };

    this.categoryService.createCategory(category).subscribe({
            next: (success) => {
              window.location.reload();
            },
            error: (error) => {
              alert(error.error)
            }
        });
      }

}
