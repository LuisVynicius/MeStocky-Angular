import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Informations } from './informations/informations';
import { Button } from '../shared/button/button';
import { Product } from './product/product';
import { SearchBar } from './search-bar/search-bar';
import { CreateProduct } from './create-product/create-product';
import { StockShape } from '../../shape/productShape';
import { StockInformationShape } from '../../shape/InformationShape';
import { OptionsShape } from '../../shape/generics';
import { ProductService } from '../../services/product-service';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category-service';
import { EditProduct } from './edit-product/edit-product';

@Component({
  selector: 'app-stock-page',
  imports: [
    Informations,
    Button,
    Product,
    SearchBar,
    CreateProduct,
    EditProduct,
    FormsModule
],
  templateUrl: './stock-page.html',
  styleUrl: './stock-page.css',
})
export class StockPage implements OnInit {
  
  products: StockShape[] = [];
  categories: OptionsShape[] = [];
  popup_value: number = 0;
  product_id: number = 0;

  informations: StockInformationShape = {
    quantity: 0,
    total: 0,
    warnings: 0
  };

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (success) => {
        this.products = success;
        this.cdr.markForCheck();
      } 
    });

    this.categoryService.getAllCategories().subscribe({
      next: (success) => {
        this.categories = success;
        this.cdr.markForCheck();
      }
    });
    
    this.productService.getInformations().subscribe({
      next: (success) => {
        this.informations = success;
        this.cdr.markForCheck();
      }
    });
  }

  popup(value: number) {
    if (this.popup_value === value) {
      this.popup_value = 0;
    } else {
      this.popup_value = value;
    }
  }

  popup_edit(id: number) {
    this.popup(2);
    this.product_id = id;
  }

}
