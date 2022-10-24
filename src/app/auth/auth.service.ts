import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



constructor(private _http: HttpClient) { }

submitRegister(body:any){

  console.log("wsel")
  return this._http.post('http://localhost:5000/auth/signup',body,{
    observe:'body'
  });
}

login(body:any){
  return this._http.post('http://localhost:5000/auth/login', body,{
    observe:'body'
  });
}



}
