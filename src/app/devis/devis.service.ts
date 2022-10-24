import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Devis } from 'src/Models/Devis';

@Injectable({
  providedIn: 'root'
})
export class DevisService {



  constructor(private http:HttpClient,private router:Router) 
  { }
  baseurl="http://localhost:8084/api/Facture";
  
  fetchDevis():Observable<Devis[]>
  {
    return this.http.get<Devis[]>(this.baseurl);
  }
  fetchDevisById(id:any):Observable<Devis>
  {
    return this.http.get<Devis>(this.baseurl+"/"+id);
  }
  
  addDevis(data:Devis)
  {
    return this.http.post(this.baseurl,data);
  }
  
  
  deleteDevis(id:any){
  
    return this.http.delete(this.baseurl+"/"+id);
  
  }
  UpdatDevis(data:Devis):Observable<Devis>
  {
    return this.http.put<Devis>(this.baseurl+"/"+data.id,data);
  
  }
  
  
  }