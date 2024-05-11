import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const cart = 'cart-products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProducts: any[] = [];
  private totalItemsSubject = new BehaviorSubject<number>(0);
  public totalItems$ = this.totalItemsSubject.asObservable();

  constructor() {}

  addToCart(product: any) {
    this.cartProducts = JSON.parse(localStorage.getItem(cart)) || [];
    const productsToAdd = Array.isArray(product) ? product : [product];
    const existingProduct = this.cartProducts.find(
      (item) => item.id === product.id
    );
    if (!existingProduct) {
      this.cartProducts.push(...productsToAdd);
      localStorage.setItem(cart, JSON.stringify(this.cartProducts));
    }
  }

  getCartProducts() {
    if (typeof localStorage !== 'undefined') {
      const products = localStorage.getItem(cart);
      this.cartProducts = products ? JSON.parse(products) : [];
    }
    return this.cartProducts;
  }

  removeFromCart(productId: number | string) {
    this.cartProducts = JSON.parse(localStorage.getItem(cart)) || [];
    this.cartProducts = this.cartProducts.filter(
      (item) => item.id !== productId
    );
    localStorage.setItem(cart, JSON.stringify(this.cartProducts));
  }
}
