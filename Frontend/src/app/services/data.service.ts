import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
  ];

  cartItems: any[] = [];

  constructor() { }

  addToCart(product: any): void {
    this.cartItems.push(product);
  }

  removeFromCart(index: number): void {
    this.cartItems.splice(index, 1);
  }
}
