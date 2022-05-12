import { Injectable } from '@angular/core';
import { Iproduct } from '../ViewModel/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiseService {

  private ProductList:Iproduct[]
  constructor() 
  {
    this.ProductList=[{id:1,name:"Chocolate",quantity:1,price:10,img:"/assets/chocolate.jpg",categoryId:1}
    ,{id:2,name:"Chips",quantity:9,price:5,img:"/assets/chips.png",categoryId:1}
  ,{id:3,name:"cocacola",quantity:20,price:7,img:"/assets/cocacola.png",categoryId:2},
  {id:4,name:"orange Juice",quantity:0,price:7,img:"/assets/juice.jpg",categoryId:2}
]
  }
  GetAllProduct():Iproduct[]
  {
    return this.ProductList
  }
  GetByProductCategory(CatId:number):Iproduct[]
  {
    if (CatId==0)
    {
      return this.ProductList
    }
    else{
     return this.ProductList.filter(p=>p.categoryId==CatId)
    }
   
  }
  GetProductById(proid:number):Iproduct|undefined
  {
      return this.ProductList.find(p=>p.id==proid)
  }
  AddNewProduct(pro:Iproduct)
  {
    this.ProductList.push(pro); 
  }

  getPrdIDsList(): number[]
  {
    return this.ProductList.map(prd=>prd.id);
  }
}
