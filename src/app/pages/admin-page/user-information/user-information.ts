import { Component, Input } from '@angular/core';
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

  saveProduct() {
    console.log("Produto salvo: " + this.username + " " + this.email + " " + this.role);
  }

  removeProduct() {
    console.log("Produto removido: " + this.username + " " + this.email + " " + this.role);
  }
}
