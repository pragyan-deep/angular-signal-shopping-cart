import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "auth",
        loadChildren: () => import("./features/auth/auth.routes").then(sc => sc.AUTH_ROUTE)
    },
    {
        path: "home",
        loadChildren: () => import("./features/home/home.routes").then(sc => sc.HOME_ROUTES)
    },
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "**", redirectTo: "/home", pathMatch: "full"},
];
