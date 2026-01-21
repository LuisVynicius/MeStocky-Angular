import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { StockPage } from './pages/stock-page/stock-page';
import { AdminPage } from './pages/admin-page/admin-page';
import { ProfilePage } from './pages/profile-page/profile-page';
import { ReportPage } from './pages/report-page/report-page';

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
    {
        path: "profile",
        pathMatch: "full",
        component: ProfilePage
    },
    {
        path: "report",
        pathMatch: "full",
        component: ReportPage
    },
];
