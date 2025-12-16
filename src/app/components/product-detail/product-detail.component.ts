import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf, CurrencyPipe } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, RouterLink, CurrencyPipe],
  template: `
    <div class="container mt-4">
      <div *ngIf="product" class="row">
        <div class="col-md-6">
          <img [src]="product.imageUrl" class="img-fluid rounded" [alt]="product.name" />
        </div>
        <div class="col-md-6 d-flex flex-column">
          <h2>{{ product.name }}</h2>
          <p class="lead">{{ product.description }}</p>
          <h3 class="text-primary mt-3">{{ product.price | currency:'EUR' }}</h3>
          <button (click)="addToCart(product)" class="btn btn-success btn-lg mt-3">Ajouter au panier</button>
          <a routerLink="/" class="btn btn-outline-secondary mt-3">← Retour à la boutique</a>
        </div>
      </div>
      <div *ngIf="!product" class="alert alert-warning">
        <h4>Produit non trouvé</h4>
        <a routerLink="/" class="btn btn-primary">Retourner à l'accueil</a>
      </div>
    </div>
  `,
  styles: []
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  product: Product | undefined;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe(p => this.product = p);
  }

  addToCart(product: Product) {
    alert(`✅ "${product.name}" a été ajouté au panier !`);
  }
}