import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
//import { CartComponent } from './Components/product/cart/cart.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  { path:'', redirectTo:'/home' , pathMatch:'full'},
  { path:'home', component:HomeComponent },
  { path:'ContactUs', component:ContactUsComponent },
  //{ path:'products', component:cartcomponrnt},
  {path:'aboutUs', component:AboutUsComponent},
  {
    path: 'product', 
    loadChildren: () => import('src/app/Components/product/product.module').then(m => m.ProductModule)
  },
  {path:'**',component:NotFoundComponent},
  
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
