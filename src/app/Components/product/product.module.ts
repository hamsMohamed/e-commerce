import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ProductsComponent } from './Components/products/products.component';
import { ProductsComponent } from './products/products.component';
//import { CartComponent } from './Components/cart/cart.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { PopDialogComponent } from './pop-dialog/pop-dialog.component';

const material=[]
const routs:Routes=[
  {
    path:'products',component:ProductsComponent
   
  },
  {
    path:'cart', component:CartComponent
  }
]

@NgModule({
  declarations: [
   ProductsComponent,
    CartComponent,
    PopDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routs),
   
  ]
})
export class ProductModule { }
