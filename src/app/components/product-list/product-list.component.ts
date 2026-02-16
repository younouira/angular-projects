import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, CurrencyPipe, NgIf, CommonModule } from '@angular/common';
import { finalize } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink, CurrencyPipe, CommonModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent implements OnInit {
  private productService = inject(ProductService);
  allProducts: Product[] = [];
  products: Product[] = [];
  categories: string[] = [];
  selectedCategory = 'Tous';
  isLoading = true;
  errorMessage: string | null = null;
  priceFilter = 5000;

  ngOnInit() {
    this.productService
      .getProducts()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (data) => {
          this.allProducts = data;
          this.products = data;
          this.loadCategories();
        },
        error: () => (this.errorMessage = 'Une erreur est survenue lors du chargement des produits.')
      });
  }

  loadCategories() {
    this.productService.getCategories().subscribe(cats => {
      this.categories = cats;
    });
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }

  applyFilters() {
    this.products = this.allProducts.filter(product => {
      const categoryMatch = this.selectedCategory === 'Tous' || product.category === this.selectedCategory;
      const priceMatch = product.price <= this.priceFilter;
      return categoryMatch && priceMatch;
    });
  }

  onPriceChange(event: any) {
    this.priceFilter = event.target.value;
    this.applyFilters();
  }

  trackById(_: number, item: Product) {
    return item.id;
  }
}