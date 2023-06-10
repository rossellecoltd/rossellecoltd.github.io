import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: "products", component: ProductsComponent},
  {path: '**', pathMatch: "full", redirectTo: 'about'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
