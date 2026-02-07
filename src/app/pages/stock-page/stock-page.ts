import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Informations } from './informations/informations';
import { Button } from '../shared/button/button';
import { Product } from './product/product';
import { SearchBar } from './search-bar/search-bar';
import { CreateProduct } from './create-product/create-product';
import { StockShape } from '../../shape/productShape';
import { StockInformationShape } from '../../shape/informationShape';
import { OptionsShape } from '../../shape/generics';
import { ProductService } from '../../services/product-service';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category-service';
import { EditProduct } from './edit-product/edit-product';
import { ChangeProduct } from './change-product/change-product';
import { DeleteProduct } from './delete-product/delete-product';
import { ReasonService } from '../../services/reason-service';
import { MenuBar } from '../shared/menu-bar/menu-bar';

@Component({
  selector: 'app-stock-page',
  imports: [
    Informations,
    Button,
    Product,
    SearchBar,
    CreateProduct,
    EditProduct,
    ChangeProduct,
    DeleteProduct,
    FormsModule,
    MenuBar
],
  templateUrl: './stock-page.html',
  styleUrl: './stock-page.css',
})
export class StockPage implements OnInit {
  
  products: StockShape[] = [];
  reasons: OptionsShape[] = [];
  categories: OptionsShape[] = [];
  popup_value: number = 0;
  product_id: number = 0;
  user_role: number = 0;

  informations: StockInformationShape = {
    quantity: 0,
    total: 0,
    warnings: 0
  };

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private reasonService: ReasonService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (success) => {
        this.products = success as StockShape[];
        this.cdr.markForCheck();
      },
      error: (error) => {
        alert("Erro interno");
      }
    });

    this.categoryService.getAllCategories().subscribe({
      next: (success) => {
        this.categories = success as OptionsShape[];
        this.cdr.markForCheck();
      },
      error: (error) => {
        alert("Erro interno");
      }
    });
    
    this.productService.getInformations().subscribe({
      next: (success) => {
        this.informations = success as StockInformationShape;
        this.cdr.markForCheck();
      },
      error: (error) => {
        alert("Erro interno");
      }
    });

    this.reasonService.getAllReasonsAsOptions().subscribe({
      next: (success) => {
        this.reasons = success as OptionsShape[];
        this.cdr.markForCheck();
      },
      error: (error) => {
        alert("Erro interno");
      }
    });

    this.user_role = Number(localStorage.getItem("user_role"));

  }

  popup(value: number) {
    if (this.popup_value === value) {
      this.popup_value = 0;
    } else {
      this.popup_value = value;
    }
  }

}
