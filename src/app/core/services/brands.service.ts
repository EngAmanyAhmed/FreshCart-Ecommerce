import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { envirnment } from './environments/environment';
import { env } from 'process';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private _HttpClient:HttpClient) { }

  getAllBrands():Observable<any>{
    return this._HttpClient.get(`${envirnment.baseUrl}/api/v1/brands`)

  }
  getSpecificBrands(id:string):Observable<any>{
    return this._HttpClient.get(`${envirnment.baseUrl}/api/v1/brands/${id}`)
  }
}
