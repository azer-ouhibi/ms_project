import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dossier } from 'src/Models/dossier';

@Injectable({
  providedIn: 'root'
})
export class DossierService {



  constructor(private http:HttpClient,private router:Router) 
  { }
  baseurl=environment.url;
  
  fetchDossiers():Observable<Dossier[]>
  {
    return this.http.get<Dossier[]>(this.baseurl+"Dossier");
  }
  fetchDossierById(id:any):Observable<Dossier>
  {
    return this.http.get<Dossier>(this.baseurl+"Dossier/"+id);
  }
  
  addDossier(data:Dossier)
  {
    return this.http.post(this.baseurl+"Dossier",data);
  }
  
  
  deleteDossier(id:any){
  
    return this.http.delete(this.baseurl+"Dossier/"+id);
  
  }
  UpdatDossier(data:Dossier):Observable<Dossier>
  {
    return this.http.put<Dossier>(this.baseurl+"Dossier/"+data.id,data);
  
  }
  
   
   
  }