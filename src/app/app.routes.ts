import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { StockPage } from './pages/stock-page/stock-page';

export const routes: Routes = [
    {
        path: "login",
        pathMatch: "full",
        component: LoginPage
    },
    {
        path: "stock",
        pathMatch: "full",
        component: StockPage
    }
];
