import { Component } from '@angular/core';
import { FormInput } from '../shared/form-input/form-input';
import { FormsModule, NgForm } from '@angular/forms';
import { Button } from '../shared/button/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  imports: [
    FormInput,
    FormsModule,
    Button,
  ],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {

  constructor(private router: Router) {
    
  }

  updateProduct(Form: NgForm) {
    console.log(Form.value)
  }

  goStock() {
    this.router.navigate(["/stock"]);
  }

}
