import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatFactsComponent} from "./cat-facts/cat-facts.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cat-facts',
    pathMatch: 'full'
  },
  {path: 'cat-facts', component: CatFactsComponent},
  {path: 'sign-up', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
