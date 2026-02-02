import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-reason-informations',
  imports: [
    Button
  ],
  templateUrl: './reason-informations.html',
  styleUrl: './reason-informations.css',
})
export class ReasonInformations {
  @Input()
  id: number = 0;
  @Input()
  name: string = "";

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
