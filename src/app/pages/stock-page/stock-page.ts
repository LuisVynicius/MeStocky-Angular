import { Component } from '@angular/core';
import { Informations } from './informations/informations';
import { Button } from '../shared/button/button';
import { Product } from './product/product';
import { SearchBar } from './search-bar/search-bar';
import { CreateProduct } from './create-product/create-product';
import { StockShape } from '../../shape/productShape';
import { StockInformationShape } from '../../shape/InformationShape';

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
  products: StockShape[] = [
    {
        title: "Teclado Mecânico",
        category: "Periféricos",
        quantity: 25,
        min_quantity: 10,
    },
    {
        title: "Mouse Gamer",
        category: "Periféricos",
        quantity: 8,
        min_quantity: 15,
    },
    {
        title: "Monitor 24\"",
        category: "Monitores",
        quantity: 12,
        min_quantity: 5,
    },
    {
        title: "SSD 1TB",
        category: "Armazenamento",
        quantity: 4,
        min_quantity: 10,
    },
    {
        title: "Memória RAM 16GB",
        category: "Hardware",
        quantity: 18,
        min_quantity: 8,
    },
    {
        title: "Fonte 650W",
        category: "Hardware",
        quantity: 6,
        min_quantity: 6,
    },
    {
        title: "Headset",
        category: "Áudio",
        quantity: 22,
        min_quantity: 12,
    },
  ];

  informations: StockInformationShape = {
    total: 7,
    products_quantity: 95,
    alerts: 2
  }

  create_product_popup: boolean = false;

  create_product() {
    this.create_product_popup = !this.create_product_popup;
  }
}
