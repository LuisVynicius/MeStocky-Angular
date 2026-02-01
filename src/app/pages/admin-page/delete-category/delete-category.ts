import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../../shared/button/button';
import { CategoryService } from '../../../services/category-service';

@Component({
  selector: 'app-delete-category',
  imports: [
    Button
  ],
  templateUrl: './delete-category.html',
  styleUrl: './delete-category.css',
})
export class DeleteCategory {
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

  deleteCategory() {

    this.categoryService.deleteCategory(this.category_id).subscribe({
      next: (success) => {
        window.location.reload();
      },
      error: (error) => {
        alert("A categoria não pode ter nenhum produto relacionado");
      }
    });

  }

}
