import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, CurrencyPipe } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, RouterLink, CurrencyPipe],
  template: `
    <div class="container mt-4">
      <h2 class="mb-4">Nos PCs en stock</h2>
      <div class="row">
        <div class="col-md-4 mb-4" *ngFor="let product of products">
          <div class="card h-100 shadow-sm">
            <img [src]="product.imageUrl" class="card-img-top" [alt]="product.name" style="height: 200px; object-fit: cover;" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text flex-grow-1">{{ product.description }}</p>
              <p class="text-primary fw-bold fs-5">{{ product.price | currency:'EUR' }}</p>
              <a [routerLink]="['/product', product.id]" class="btn btn-primary">Voir détail</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ProductListComponent {
  private productService = inject(ProductService);
  products: Product[] = [];

  constructor() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}