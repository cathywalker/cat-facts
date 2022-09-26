import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatGridComponent } from './cat-grid/cat-grid.component';
import { HttpClientModule } from "@angular/common/http";
import { CatFactsComponent } from './cat-facts/cat-facts.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RainingCatsComponent } from './raining-cats/raining-cats.component';

@NgModule({
  declarations: [
    AppComponent,
    CatGridComponent,
    CatFactsComponent,
    SignUpComponent,
    NavBarComponent,
    RainingCatsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
