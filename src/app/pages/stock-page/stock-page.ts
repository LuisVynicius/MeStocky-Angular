import { Component } from '@angular/core';
import { Informations } from './informations/informations';
import { Button } from '../shared/button/button';
import { Product } from './product/product';
import { SearchBar } from './search-bar/search-bar';
import { CreateProduct } from './create-product/create-product';

@Component({
  selector: 'app-stock-page',
  imports: [
    Informations,
    Button,
    Product,
    SearchBar,
    CreateProduct
],
  templateUrl: './stock-page.html',
  styleUrl: './stock-page.css',
})
export class StockPage {
  create_product_popup: boolean = false;

  create_product() {
    this.create_product_popup = !this.create_product_popup;
  }
}
