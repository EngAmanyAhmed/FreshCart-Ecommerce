import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { envirnment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private _HttpClient:HttpClient) { }
  wishlistIcone:string[]=[]

  


getProductWishlist(id:string):Observable<any>{
  return this._HttpClient.post(`${envirnment.baseUrl}/api/v1/wishlist`,{
    "productId": id
  })
}

getALlWishlist():Observable<any>{
  return this._HttpClient.get(`${envirnment.baseUrl}/api/v1/wishlist`)
}
removeFromWishlist(id:string):Observable<any>{
  return this._HttpClient.delete(`${envirnment.baseUrl}/api/v1/wishlist/${id}`)
}


}

