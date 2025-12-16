import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Gaming PC RTX 4070',
      description: 'PC gamer haute performance : Ryzen 7, 32GB RAM, SSD 1To, RTX 4070',
      price: 1499,
      imageUrl: 'https://geekawhat.com/wp-content/uploads/2023/04/RTX-4070-Founders-Build-Feature.jpg'
    },
    {
      id: 2,
      name: 'Bureau PC Intel i5',
      description: 'PC bureautique fiable : Intel i5, 16GB RAM, SSD 1To',
      price: 699,
      imageUrl: 'https://www.togoinformatique.com/wp-content/uploads/2021/12/Bureau-i5-300x300.jpg'
    },
    {
      id: 3,
      name: 'PC Portable Ultra',
      description: 'Ultrabook léger : 14", 16GB RAM, SSD 512GB, longue autonomie',
      price: 899,
      imageUrl: 'https://www.tunisianet.com.tn/404049-large/pc-portable-hp-probook-440-g11-ultra-7-155u-16-go-ddr5-512-go-ssd-argent.jpg'
    }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }
}