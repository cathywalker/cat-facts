import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatFactsComponent} from "./cat-facts/cat-facts.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {RainingCatsComponent} from "./raining-cats/raining-cats.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cat-facts',
    pathMatch: 'full'
  },
  {path: 'cat-facts', component: CatFactsComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'raining-cats', component: RainingCatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
