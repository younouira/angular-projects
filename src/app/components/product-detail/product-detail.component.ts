import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf, CurrencyPipe } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, RouterLink, CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css']
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  product: Product | undefined;
  isLoading = true;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.isLoading = true;
      const id = Number(params.get('id'));
      this.productService.getProductById(id).subscribe({
        next: (p) => (this.product = p),
        complete: () => (this.isLoading = false)
      });
    });
  }

  addToCart(product: Product) {
    alert(`✅ "${product.name}" a été ajouté au panier !`);
  }
}