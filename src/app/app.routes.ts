import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './produts/product.component';
import { Home } from './home/home';

export const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: '', component: Home, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
