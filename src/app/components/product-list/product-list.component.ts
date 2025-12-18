import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, CurrencyPipe, NgIf } from '@angular/common';
import { finalize } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  private productService = inject(ProductService);
  products: Product[] = [];
  isLoading = true;
  errorMessage: string | null = null;

  ngOnInit() {
    this.productService
      .getProducts()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (data) => (this.products = data),
        error: () => (this.errorMessage = 'Une erreur est survenue lors du chargement des produits.')
      });
  }

  trackById(_: number, item: Product) {
    return item.id;
  }
}