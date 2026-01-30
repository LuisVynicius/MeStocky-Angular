import { Component, Input } from '@angular/core';
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

  a() {

  }
}
