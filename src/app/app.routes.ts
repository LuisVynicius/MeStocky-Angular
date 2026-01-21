import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { StockPage } from './pages/stock-page/stock-page';
import { AdminPage } from './pages/admin-page/admin-page';

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
    },
    {
        path: "admin",
        pathMatch: "full",
        component: AdminPage
    },
];
