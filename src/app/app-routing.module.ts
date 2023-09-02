import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllProductComponent } from './products/components/all-product/all-product.component';

const routes: Routes = [
  {path:"products" , component: AllProductComponent},
  {path:"details", component: ProductDetailsComponent},
  {path:"cart", component: CartComponent},
  {path:"**", redirectTo:"products", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
