import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envirnment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor( private readonly _HttpClient:HttpClient) { }



 checkOut(id:string,allDetails:object):Observable<any>{
  return this._HttpClient.post(`${envirnment.baseUrl}/api/v1/orders/checkout-session/${id}?url=${window.location.origin}`,{
    'shippingAddress':allDetails
  })
 }

 getUserOrders(idUser:string):Observable<any>{
  return this._HttpClient.get(`${envirnment.baseUrl}/api/v1/orders/user/${idUser}`)
 }
  
}
