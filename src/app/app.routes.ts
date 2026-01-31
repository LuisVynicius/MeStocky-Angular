import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { StockPage } from './pages/stock-page/stock-page';
import { AdminPage } from './pages/admin-page/admin-page';
import { ProfilePage } from './pages/profile-page/profile-page';
import { ReportPage } from './pages/report-page/report-page';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path: "login",
        pathMatch: "full",
        component: LoginPage
    },
    {
        path: "stock",
        pathMatch: "full",
        component: StockPage,
        canActivate: [
            authGuard
        ]
    },
    {
        path: "admin",
        pathMatch: "full",
        component: AdminPage,
        canActivate: [
            authGuard
        ]
    },
    {
        path: "profile",
        pathMatch: "full",
        component: ProfilePage,
        canActivate: [
            authGuard
        ]
    },
    {
        path: "report",
        pathMatch: "full",
        component: ReportPage,
        canActivate: [
            authGuard
        ]
    },
    {
        path: "**",
        redirectTo: "/login"
    }
];
