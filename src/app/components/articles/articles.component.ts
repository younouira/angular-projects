import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Article } from '../../models/product.model';

@Component({
    selector: 'app-articles',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './articles.html',
    styleUrl: './articles.css'
})
export class ArticlesComponent implements OnInit {
    articles: Article[] = [];
    isLoading = true;
    selectedCategory = 'Tous';

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.loadArticles();
    }

    loadArticles(): void {
        this.productService.getArticles().subscribe(articles => {
            this.articles = articles;
            this.isLoading = false;
        });
    }

    get categories(): string[] {
        const cats = ['Tous', ...new Set(this.articles.map(a => a.category))];
        return cats;
    }

    get filteredArticles(): Article[] {
        if (this.selectedCategory === 'Tous') {
            return this.articles;
        }
        return this.articles.filter(a => a.category === this.selectedCategory);
    }

    filterByCategory(category: string): void {
        this.selectedCategory = category;
    }

    formatDate(date: Date): string {
        return new Intl.DateTimeFormat('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    }
}
