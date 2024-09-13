import { CartComponent } from './../../componets/cart/cart.component';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { envirnment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {


private readonly _HttpClient=inject(HttpClient)

CartNumber:BehaviorSubject<number>=new BehaviorSubject(0)

addProductTOcart(id:string):Observable<any>{
  return this._HttpClient.post(`${envirnment.baseUrl}/api/v1/cart`,
  {


    "productId": id

  },


);

}
getSpecificProductCart():Observable<any>{
  return this._HttpClient.get(`${envirnment.baseUrl}/api/v1/cart`,
  )

}
removeSpecificCart(idDelete:string,):Observable<any>{
  return this._HttpClient.delete(`${envirnment.baseUrl}/api/v1/cart/${idDelete}`)
}
updateCart(id:string, cont:number):Observable<any>{
  return this._HttpClient.put(`${envirnment.baseUrl}/api/v1/cart/${id}`,
  {
    "count": cont

  },
 
  )
}
clearCart():Observable<any>{
  return this._HttpClient.delete(`${envirnment.baseUrl}/api/v1/cart`)
}
 
}
