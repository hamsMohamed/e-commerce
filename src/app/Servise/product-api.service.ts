import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../ViewModel/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  private httpOptions;

  constructor(private httpclient:HttpClient) {

    this.httpOptions={



      headers: new HttpHeaders({

        'Content-Type': 'application/json'

      })

    }



   }

  getAllproduts(): Observable<Iproduct[]>
  {
    return this.httpclient.get<Iproduct[]>('http://localhost:63654/api/Product')
  }
  
  getproductBycatId(catID: number): Observable<Iproduct[]>
  {
    if(catID==0){
      return this.httpclient.get<Iproduct[]>(`http://localhost:63654/api/Product`)
    }
    else{
    return this.httpclient.get<Iproduct[]>(`http://localhost:63654/api/Product/Catid?catID=${catID}`);
    }
  }
  getProductByID(prodId:number): Observable<Iproduct>
  {
    return this.httpclient.get<Iproduct>(`http://localhost:63654/api/Product${prodId}`)
  }
  addNewProduct(newprod:Iproduct): Observable<Iproduct>
  {
    return this.httpclient.post<Iproduct>('http://localhost:63654/api/Product',JSON.stringify(newprod),this.httpOptions)
  }
  updateProducts(prodId:number,newprod:Iproduct)
  {

  }
  deleteProducts(prodId:number)
  {

  }
}
