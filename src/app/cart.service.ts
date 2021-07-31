import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private currentCart: item[];
  private totalPrice: number;
  constructor() {
    this.currentCart = [];
    this.totalPrice = 0;
  }
  add(product) {
    if (
      this.currentCart.find(
        (i) => i.product.SerialNumber === product.SerialNumber
      )
    ) {
      this.currentCart[
        this.currentCart.findIndex(
          (i) => i.product.SerialNumber === product.SerialNumber
        )
      ].increaseAmount();
    } else {
      // this.currentCart.push(new item(product));
    }
    this.totalPrice += product.Price;
  }

  remove(product) {
    if (
      this.currentCart.find(
        (i) => i.product.SerialNumber === product.SerialNumber
      ).amount > 1
    ) {
      this.currentCart[
        this.currentCart.findIndex(
          (i) => i.product.SerialNumber === product.SerialNumber
        )
      ].decreaseAmount();
    } else {
      this.currentCart.splice(
        this.currentCart.findIndex(
          (i) => i.product.SerialNumber === product.SerialNumber
        ),
        1
      );
    }
    this.totalPrice -= product.Price;
  }

  returnCart() {
    return this.currentCart;
  }

  returnTotalPrice() {
    return this.totalPrice;
  }
}

class item {
  product: any;
  amount: number;
  constructor(product, user) {
    this.product = product;
    this.amount = 1;
  }
  increaseAmount() {
    this.amount++;
  }
  decreaseAmount() {
    this.amount--;
  }
}
