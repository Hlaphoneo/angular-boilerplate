import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ROUTES } from "../app-routes";
import { NavParams } from "./nav-params.service";

@Injectable()

export class NavigationService { 
    constructor(
        private router     :   Router,
        private navParams  : NavParams
    ) {}

    public goto (_route : string, _param? : any) {
        if(_param){
            this.parseParams(_param);
        }
        this.router.navigate([_route]);
    }

    private parseParams(_param) : void {
        this.navParams.add(_param);
    }  
}