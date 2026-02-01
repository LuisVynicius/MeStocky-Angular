import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-user-information',
  imports: [
    Button
  ],
  templateUrl: './user-information.html',
  styleUrl: './user-information.css',
})
export class UserInformation {

  @Input()
  id: number = 0;
  @Input()
  username: string = "";
  @Input()
  email: string = "";
  @Input()
  role: string = "";

  @Output()
  delete = new EventEmitter<number>();

  constructor() { }

  toDelete() {
    this.delete.emit(this.id);
  }

}
