import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reclamation } from 'src/Models/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {



  constructor(private http:HttpClient,private router:Router) 
  { }
  baseurl=environment.url;
  
  fetchReclamations():Observable<Reclamation[]>
  {
    return this.http.get<Reclamation[]>(this.baseurl+"Reclamation");
  }
  fetchReclamationById(id:any):Observable<Reclamation>
  {
    return this.http.get<Reclamation>(this.baseurl+"Reclamation/"+id);
  }
  
  addReclamation(data:Reclamation)
  {
    return this.http.post(this.baseurl+"Reclamation",data);
  }
  
  
  deleteReclamation(id:any){
    console.log(id);
    return this.http.delete(this.baseurl+"Reclamation/"+id);
  
  }
  UpdatReclamation(data:Reclamation):Observable<Reclamation>
  {
    return this.http.put<Reclamation>(this.baseurl+"Reclamation/"+data.id,data);
  
  }
  
   
   
  }