import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductApiService } from 'src/app/Servise/product-api.service';
import { ProductServiseService } from 'src/app/Servise/product-servise.service';
import { cart } from 'src/app/ViewModel/cartview';
import { ICategory } from 'src/app/ViewModel/icategory';
import { Iproduct } from 'src/app/ViewModel/iproduct';
import { Store } from 'src/app/ViewModel/Store';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopDialogComponent } from '../pop-dialog/pop-dialog.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
   store:Store;
   ClientName:string;
   ProductList:Iproduct[]=[];
   NewProductList:Iproduct[]=[];
   pro:Iproduct|undefined=undefined;
  // category:ICategory[];
   date:Date=new Date();
   idNumber:string = "";
   cridet:string="";
   selectOptionDate:Date = new Date();
   isTableShowen:boolean=true;
   isPurshased:boolean=false;
   @Output() OnAddtoCart: EventEmitter<cart>;
   @Input() SelCatID:number=0;
  constructor( private productApiservece:ProductApiService,public dialog:MatDialog) { 
  // this.ProductList=this.productservice.GetAllProduct();
 // this.productApiservece.getAllproduts().subscribe(prdlist=>{this.ProductList=prdlist})
   // this.NewProductList=[]
    this.OnAddtoCart= new EventEmitter<cart>();
      this.store={
        Name:"kher Zaman",
        Logo:"/assets/lolo.svg.png",
        Branches:["Assiut","Cairo","Sohag"]
      };
      this.ClientName="Nermeen";
      // this.category=[
      //   {
      //     ID:1,
      //     Name:"Food"
      //   },
      //   {
      //     ID:2,
      //     Name:"Drinks"
      //   }
      // ]
     
  }
  ngOnChanges(changes: SimpleChanges): void
  {
    

  //  this.NewProductList=this.productservice.GetByProductCategory(this.SelCatID)
  this.productApiservece.getproductBycatId(this.SelCatID).subscribe(
    
    prdlist=>{this.NewProductList=prdlist
    console.log(this.NewProductList)})
  
  }

  ngOnInit(): void {

   // this.NewProductList=this.productservice.GetByProductCategory(this.SelCatID)
   this.productApiservece.getAllproduts().subscribe(
    
    prdlist=>{this.NewProductList=prdlist
    console.log(this.NewProductList)})
  }
  openPopDialog(prdid:number)
  {
    this.productApiservece.getProductByID(prdid).subscribe(
    
      prd=>{this.pro=prd
      console.log(this.NewProductList)})
    this.dialog.open(PopDialogComponent,{data:{img:this.pro?.img}});
  }
   toggletable()
    {
      this.isTableShowen=!this.isTableShowen;
      this.isPurshased=!this.isPurshased;
    }
    newList:any=[]
    showProd(ID:any)
    {
      this.newList=this.ProductList.filter(p=>p.categoryId===parseInt(ID))
    }
    DecreaseQuantity(prod:Iproduct)
    {
       prod.quantity-=1;
       
    }

    OnAddcart(product:Iproduct,count:number){
    
      var newadd:cart={
        
        "productName":product.name,
        "productId":product.id,
        "productprice":product.price,
        "count":count,
        "total":product.price*count
      }
      
      this.OnAddtoCart.emit(newadd);
      /* console.log("ggg"); */
      
    }

}
