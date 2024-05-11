import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { ProductDetailsService } from '../../services/product/product-details.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent {
  productId: number = 0;
  products: any;

  constructor(
    private productService: ProductDetailsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails(): void {
    this.products = this.productService.getProduct();
  }

  addToCart() {
    this.cartService.addToCart(this.products);
    console.log('Added to cart', this.products);
  }
}
