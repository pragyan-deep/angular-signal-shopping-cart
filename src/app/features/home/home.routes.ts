import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";

export const HOME_ROUTES: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "shop",
        loadComponent: () => import ("./shop/shop.component").then(sc => sc.ShopComponent)
    },
    {
        path: "cart",
        loadComponent: () => import ("./cart/cart.component").then(sc => sc.CartComponent)
    },
    {
        path: "orders",
        loadComponent: () => import ("./orders/orders.component").then(sc => sc.OrdersComponent)
    }
]