import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { envirnment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private  readonly _HttpClient=inject(HttpClient)

getAllProducts():Observable<any>{
  return this._HttpClient.get(`${envirnment.baseUrl}/api/v1/products`)

}

getSpecificProducts(idProduct:string| null):Observable<any>{
  return this._HttpClient.get(`${envirnment.baseUrl}/api/v1/products/${idProduct}`)

}
 
}
