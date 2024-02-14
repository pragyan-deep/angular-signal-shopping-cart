import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

export const AUTH_ROUTE: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "signup",
        loadComponent: () => import("./signup/signup.component").then(sc => sc.SignupComponent)
    },
]