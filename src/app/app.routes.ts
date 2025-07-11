import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './produts/product.component';
import { Home } from './home/home';
import { Pdv } from './pdv/pdv';

export const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: '', component: Home, },
  { path: 'pdv', component: Pdv, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
