import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-category-informations',
  imports: [
    Button
  ],
  templateUrl: './category-informations.html',
  styleUrl: './category-informations.css',
})
export class CategoryInformations {
  @Input()
  id: number = 0;
  @Input()
  name: string = "";
  @Input()
  quantity: number = 0;

  @Output()
  edit = new EventEmitter<number>();

  @Output()
  change = new EventEmitter<number>();

  @Output()
  delete = new EventEmitter<number>();

  constructor() { }

  toEdit() {
    this.edit.emit(this.id);
  }

  toChange() {
    this.change.emit(this.id);
  }

  toDelete() {
    this.delete.emit(this.id);
  }

}
