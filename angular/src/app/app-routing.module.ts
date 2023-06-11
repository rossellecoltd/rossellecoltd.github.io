import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: "products", component: ProductsComponent},
  {path: "landing", component: LandingComponent},
  {path: '**', pathMatch: "full", redirectTo: 'landing'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
