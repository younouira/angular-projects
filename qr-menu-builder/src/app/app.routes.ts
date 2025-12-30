import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { MenuEditor } from './components/menu-editor/menu-editor';
import { Preview } from './components/preview/preview';
import { QrCode } from './components/qr-code/qr-code';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'editor', component: MenuEditor },
    { path: 'preview', component: Preview },
    { path: 'qr-code', component: QrCode },
    { path: '**', redirectTo: 'home' },
];
