import { Component } from '@angular/core';
import { Button } from '../../shared/button/button';
import { Warning } from './warning/warning';

@Component({
  selector: 'app-product',
  imports: [
    Button,
    Warning
  ],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

}
