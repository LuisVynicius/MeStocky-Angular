import { Component } from '@angular/core';
import { Informations } from './informations/informations';
import { Button } from '../shared/button/button';
import { Product } from './product/product';
import { SearchBar } from './search-bar/search-bar';

@Component({
  selector: 'app-stock-page',
  imports: [
    Informations,
    Button,
    Product,
    SearchBar
],
  templateUrl: './stock-page.html',
  styleUrl: './stock-page.css',
})
export class StockPage {

}
