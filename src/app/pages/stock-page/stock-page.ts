import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Informations } from './informations/informations';
import { Button } from '../shared/button/button';
import { Product } from './product/product';
import { SearchBar } from './search-bar/search-bar';
import { CreateProduct } from './create-product/create-product';
import { StockShape } from '../../shape/productShape';
import { StockInformationShape } from '../../shape/InformationShape';
import { optionsShape } from '../../shape/generics';
import { ProductService } from '../../services/product-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stock-page',
  imports: [
    Informations,
    Button,
    Product,
    SearchBar,
    CreateProduct,
    FormsModule
],
  templateUrl: './stock-page.html',
  styleUrl: './stock-page.css',
})
export class StockPage implements OnInit {
  
  products: StockShape[] = [];

  categories: optionsShape[] = [
    {
      id: 0,
      name: "Periféricos"
    },
    {
      id: 0,
      name: "Monitores"
    },
    {
      id: 0,
      name: "Armazenamento"
    },
    {
      id: 0,
      name: "Hardware"
    },
    {
      id: 0,
      name: "Áudio"
    }
  ];

  informations: StockInformationShape = {
    total: 7,
    products_quantity: 95,
    alerts: 2
  }

  create_product_popup: boolean = false;

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (success) => {
        this.products = success;
        this.cdr.markForCheck();
      } 
    })
  }

  create_product() {
    this.create_product_popup = !this.create_product_popup;
  }

}
