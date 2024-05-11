import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserStorageService } from '../../services/storage/user-storage.service';
import { Router } from '@angular/router';
import { ProductDetailsService } from '../../services/product/product-details.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  products = [
    {
      id: 1,
      name: 'Digital Prints',
      image: '../../assets/images/Digital.jpeg',
      description: 'Vibrant, Versatile, High-Quality Prints',
      quantity: 10,
      value: 10,
      price: 2,
      productPrice: 0,
      size: [
        {
          type: 'Small',
          value: 10,
        },
        {
          type: 'Medium',
          value: 20,
        },
        {
          type: 'Large',
          value: 30,
        },
      ],
    },
    {
      id: 2,
      name: 'Stickers & Labels',
      image: '../../assets/images/Stickers&Labels.jpg',
      description: 'Customizable, Durable, Adhesive, Eye-catching',
      quantity: 10,
      value: 10,
      price: 5,
      productPrice: 0,
      size: [
        {
          type: 'Small',
          value: 10,
        },
        {
          type: 'Medium',
          value: 20,
        },
        {
          type: 'Large',
          value: 30,
        },
      ],
    },
    {
      id: 3,
      name: 'Visiting Cards',
      image: '../../assets/images/VisitingCards.jpeg',
      description: 'Professional, Sleek, Customizable, Informative Cards',
      quantity: 10,
      value: 10,
      price: 2,
      productPrice: 0,
      size: [
        {
          type: 'Small',
          value: 10,
        },
        {
          type: 'Medium',
          value: 20,
        },
        {
          type: 'Large',
          value: 30,
        },
      ],
    },
    {
      id: 4,
      name: 'Flyers & Leaflets',
      image: '../../assets/images/Flyers&Leaflets.jpeg',
      description: 'Engaging, Informative, Customizable, Eye-catching Leaflets',
      quantity: 10,
      value: 10,
      price: 2,
      productPrice: 0,
      size: [
        {
          type: 'Small',
          value: 10,
        },
        {
          type: 'Medium',
          value: 20,
        },
        {
          type: 'Large',
          value: 30,
        },
      ],
    },
    {
      id: 5,
      name: 'Brochure',
      image: '../../assets/images/Brochure.jpeg',
      description: 'Informative, Stylish, Customizable, Professional Brochure',
      quantity: 10,
      value: 10,
      price: 2,
      productPrice: 0,
      size: [
        {
          type: 'Small',
          value: 10,
        },
        {
          type: 'Medium',
          value: 20,
        },
        {
          type: 'Large',
          value: 30,
        },
      ],
    },
    {
      id: 6,
      name: 'Poster',
      image: '../../assets/images/Poster.jpg',
      description: 'Vibrant, Bold, Captivating Designs poster',
      quantity: 10,
      value: 10,
      price: 2,
      productPrice: 0,
      size: [
        {
          type: 'Small',
          value: 10,
        },
        {
          type: 'Medium',
          value: 20,
        },
        {
          type: 'Large',
          value: 30,
        },
      ],
    },
    {
      id: 7,
      name: 'Banner',
      image: '../../assets/images/Banner.jpg',
      description: 'Eyecatching, Informative, Dynamic Graphics Banner',
      quantity: 10,
      value: 10,
      price: 2,
      productPrice: 0,
      size: [
        {
          type: 'Small',
          value: 10,
        },
        {
          type: 'Medium',
          value: 20,
        },
        {
          type: 'Large',
          value: 30,
        },
      ],
    },
    {
      id: 8,
      name: 'Letter Head',
      image: '../../assets/images/LetterHead.jpg',
      description: 'Professional, Elegant, Brand Identity Letter Head',
      quantity: 10,
      value: 10,
      price: 2,
      productPrice: 0,
      size: [
        {
          type: 'Small',
          value: 10,
        },
        {
          type: 'Medium',
          value: 20,
        },
        {
          type: 'Large',
          value: 30,
        },
      ],
    },
    {
      id: 9,
      name: 'Calendar',
      image: '../../assets/images/Calendar.jpg',
      description: 'Organized, Time Management Essential',
      quantity: 10,
      value: 10,
      price: 2,
      productPrice: 0,
      size: [
        {
          type: 'Small',
          value: 10,
        },
        {
          type: 'Medium',
          value: 20,
        },
        {
          type: 'Large',
          value: 30,
        },
      ],
    },
    {
      id: 10,
      name: 'T-Shirts Printing',
      image: '../../assets/images/T-ShirtsPrinting.jpg',
      description: 'Customized, High-Quality Apparel T-Shirts ',
      quantity: 10,
      value: 10,
      price: 2,
      productPrice: 0,
      size: [
        {
          type: 'Small',
          value: 10,
        },
        {
          type: 'Medium',
          value: 20,
        },
        {
          type: 'Large',
          value: 30,
        },
      ],
    },
    {
      id: 11,
      name: 'Booklets',
      image: '../../assets/images/Booklets.jpg',
      description: 'DInformative, Portable, Comprehensive Guides',
      quantity: 10,
      value: 10,
      price: 2,
      productPrice: 0,
      size: [
        {
          type: 'Small',
          value: 10,
        },
        {
          type: 'Medium',
          value: 20,
        },
        {
          type: 'Large',
          value: 30,
        },
      ],
    },
    {
      id: 12,
      name: 'Menu Cards',
      image: '../../assets/images/MenuCards.jpg',
      description: 'Delicious, Visual, Appetizing Menus,Menu Cards',
      quantity: 10,
      value: 10,
      price: 2,
      productPrice: 0,
      size: [
        {
          type: 'Small',
          value: 10,
        },
        {
          type: 'Medium',
          value: 20,
        },
        {
          type: 'Large',
          value: 30,
        },
      ],
    },

    // Add more products here...
  ];

  isUserLoggedIn: boolean = UserStorageService.isUserLoggedIn();
  isAdminLoggedIn: boolean = UserStorageService.isAdminLoggedIn();

  constructor(private router: Router, private service: ProductDetailsService) {}

  openSubProduct(product: any) {
    const subProductUrl = 'sub-product/' + product.id;
    try {
      this.service.setProduct(product);
      window.open(subProductUrl, '_parent');
    } catch (error) {
      console.error('Error opening sub-product:', error);
    }
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      this.isUserLoggedIn = UserStorageService.isUserLoggedIn();
      this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
    });
  }

  logout() {
    UserStorageService.signOut();
  }
}
