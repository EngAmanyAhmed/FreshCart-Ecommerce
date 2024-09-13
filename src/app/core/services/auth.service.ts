import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { envirnment } from './environments/environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private readonly _HttpClient= inject(HttpClient);
private readonly _Router=inject(Router)
userDate:any=null


setRegisterForm(date:object):Observable<any>
{
  return this._HttpClient.post(`${envirnment.baseUrl}/api/v1/auth/signup`,date)
}
setLoginForm(date:object):Observable<any>
{
  return this._HttpClient.post(`${envirnment.baseUrl}/api/v1/auth/signin`,date)
}

saveUserDate():void{
  if(localStorage.getItem('userName')!==null){


   this.userDate= jwtDecode(localStorage.getItem('userName')!)
  }
}
logOut():void{
  localStorage.removeItem("userName")
   this.userDate=null
  this._Router.navigate(["/login"])
 
}
 setEmailVerify(date:object):Observable<any>{
   return this._HttpClient.post(`${envirnment.baseUrl}/api/v1/auth/forgotPasswords`,date)
 }
 setCodeVerify(date:object):Observable<any>{
  return this._HttpClient.post(`${envirnment.baseUrl}/api/v1/auth/verifyResetCode`,date)
 }
 setResatPassword(date:object):Observable<any>{
  return this._HttpClient.put(`${envirnment.baseUrl}/api/v1/auth/resetPassword`,date)
 }


  
}
