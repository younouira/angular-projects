import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

interface DashboardStats {
    totalProducts: number;
    totalValue: number;
    avgRating: string;
    totalStock: number;
    categories: number;
    articles: number;
}

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
    stats!: DashboardStats;
    isLoading = true;

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.productService.getDashboardStats().subscribe(stats => {
            this.stats = stats;
            this.isLoading = false;
        });
    }

    formatPrice(value: number): string {
        return new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 0
        }).format(value);
    }
}
