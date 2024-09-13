import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { envirnment } from './environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriService  {

  constructor(private _HttpClient:HttpClient) { 
  
  }
  getCategori():Observable<any>{
    return this._HttpClient.get(`${envirnment.baseUrl}/api/v1/categories`)
   
  }

  getSpecificCategori(id:string):Observable<any>{
    return this._HttpClient.get(`${envirnment.baseUrl}/api/v1/categories/${id}/subcategories`)
   
  }
}
