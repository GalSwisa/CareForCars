import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() selectedCategory;
  constructor(private apiService: ApiService) {}
  products = [];
  checkAdd: boolean;
  selectedProduct: any;

  addCart(product) {
    this.checkAdd = true;
    this.selectedProduct = product;
    this.apiService.getSpecificItemFromCart(product).subscribe((data) => {
      if (data.length == 0) {
        this.apiService.addProductToCart(product).subscribe((data) => {
          console.log(data);
        });
      } else {
        this.apiService
          .updateProductFromCart(product, data[0])
          .subscribe((data) => {
            console.log(data);
          });
      }
    });
  }

  ngOnInit(): void {
    this.apiService.getProduct().subscribe((data) => {
      console.log;
      this.products = data;
    });
    this.selectedCategory = 'Weights';
    this.checkAdd = false;
    this.selectedProduct = '';
  }
}
