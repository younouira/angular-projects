import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ArticlesComponent } from './components/articles/articles.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: '**', redirectTo: '' }
];