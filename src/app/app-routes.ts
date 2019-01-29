import { Route } from "@angular/router";
import { HomeComponent } from "./component/home/home.component";

export const ROUTES : Route[] = [
    { path : "",redirectTo : "/home",pathMatch: 'full'},
    { path : "home", component : HomeComponent}
]

export const components = [
    HomeComponent
]