import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { components } from './app-routes';
import { AppRoutingModule } from './app-routing.module';
import { NavParams } from './services/nav-params.service';
import { NavigationService } from './services/navigation.service';

import { FormsModule  } from "@angular/forms";


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularMaterial } from './layout/angular-material.layout';







@NgModule({
  declarations: [
    ...components,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ...AngularMaterial //import all angular material modules
  ],
  providers: [
    NavParams,
    NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
