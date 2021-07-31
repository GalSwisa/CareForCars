import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  arr = [];
  empty: boolean;
  totalPrice = 0;
  currentUser: string;
  private router: Router;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    console.log(localStorage.getItem('currentUser'));
    let obsData = this.apiService.getCart().subscribe(async (data) => {
      this.calcStartingTotalPrice(data);
      this.arr = data;
    });
    console.log(obsData);
    console.log(this.arr);
    this.empty = this.checkEmpty();
  }

  checkEmpty() {
    if (this.arr == null) {
      return false;
    }
    return true;
  }

  checkCategoryRemove(product) {
    this.apiService.removeProductFromCart(product).subscribe((data) => {
      console.log(data);
    });
    this.reduceTotalPrice(product);
  }
  checkCategoryAdd(product) {
    this.apiService.addProductToCart(product).subscribe((data) => {
      console.log(data);
    });
    this.calcTotalPrice();
  }
  calcStartingTotalPrice(data) {
    for (let product of data) {
      this.totalPrice += product.Price * product.Amount;
    }
    console.log(this.totalPrice);
  }
  calcTotalPrice() {
    this.totalPrice = 0;
    for (let product of this.arr) {
      this.totalPrice += product.Price * product.Amount;
    }
    console.log(this.totalPrice);
  }
  reduceTotalPrice(product) {
    window.location.reload();
    console.log(product.Amount);
    if (product.Amount == 0) {
      console.log('test');
      this.router.navigateByUrl('register');
    }
    this.totalPrice -= product.Price;
  }
}
