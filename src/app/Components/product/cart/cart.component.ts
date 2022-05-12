import { Component, OnInit, ViewChild } from '@angular/core';
import { cart } from 'src/app/ViewModel/cartview';
import { ICategory } from 'src/app/ViewModel/icategory';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  category:ICategory[]=[];
  SelectedId:number=0;
  OrderTotalPrice:number=0;
  ArryCart: cart[]=[];
  totalAmount:number=0;
  CurrntId:number=0;
  constructor() {
    this.category=[
      {
        id:1,
        name:"Food"
      },
      {
        id:3,
        name:"Drink"
      }
    ]
   }

  ngOnInit(): void {

  }
  AddToCart(newitem:cart)
  {
    /* console.log("gggg") */
    console.log(newitem)
    
    this.ArryCart.push(newitem);
    //this.ArryCart=this.productservice.AddNewProduct(newitem)
     for (const item of this.ArryCart) {
     
      this.totalAmount += item.total;
    } 
  }
  
  @ViewChild(ProductsComponent ) productCom!: ProductsComponent 
  buy() {
    for (const item of this.ArryCart) {
      this.totalAmount += item.total;
    }
    for (const item of this.ArryCart) {
      for (const prd of this.productCom.ProductList) {
        if (item.productName == prd.name) {
          if (prd.quantity < item.count) {
              item.count = prd.quantity;
              prd.quantity = 0;
          }
          else {
            prd.quantity -= item.count;
            this.totalAmount +=item.total;
          }
        }
      }
      for (const item of this.ArryCart) {
        if(this.ArryCart.length ==0)
        {
           this.totalAmount =0;
        }
          this.ArryCart=[];
         
      }
    }
  }
    Remove()
   {
     this.ArryCart.pop();
     let index=this.ArryCart.findIndex((x)=>x.productId); 
     this.ArryCart.slice(index,1);
    // this.totalAmount-=this.totalAmount;
   }

}
