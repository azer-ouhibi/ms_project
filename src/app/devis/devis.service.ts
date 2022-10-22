import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Devis } from 'src/Models/devis';

@Injectable({
  providedIn: 'root'
})
export class DevisService {



  constructor(private http:HttpClient,private router:Router) 
  { }
  baseurl=environment.url;
  
  fetchDevis():Observable<Devis[]>
  {
    return this.http.get<Devis[]>(this.baseurl+"Devis");
  }
  fetchDevisById(id:any):Observable<Devis>
  {
    return this.http.get<Devis>(this.baseurl+"Devis/"+id);
  }
  
  addDevis(data:Devis)
  {
    return this.http.post(this.baseurl+"Devis",data);
  }
  
  
  deleteDevis(id:any){
    console.log(id);
    return this.http.delete(this.baseurl+"Devis/"+id);
  
  }
  UpdatDevis(data:Devis):Observable<Devis>
  {
    return this.http.put<Devis>(this.baseurl+"Devis/"+data.id,data);
  
  }
  
  
  }