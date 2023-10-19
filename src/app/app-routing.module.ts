import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './components/template/header/views/home/home.component';
import { ProductCrudComponent} from './components/template/header/views/product-crud/product-crud.component';
import { ProductProductCreateComponent } from './components/product/product.product-create/product.product-create.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "products",
  component: ProductCrudComponent
},
{
  path: "products/create",
  component: ProductProductCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
