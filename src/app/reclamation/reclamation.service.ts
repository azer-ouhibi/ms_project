import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reclamation } from 'src/Models/Reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {



  constructor(private http:HttpClient,private router:Router) 
  { }
  baseurl=environment.url;
  
  fetchReclamations():Observable<Reclamation[]>
  {
    return this.http.get<Reclamation[]>(this.baseurl+"servlet/retrieveAllReclamations");
  }
  fetchReclamationById(id:any):Observable<Reclamation>
  {
    return this.http.get<Reclamation>(this.baseurl+"servlet/retrieveReclamation/"+id);
  }
  
  addReclamation(data:Reclamation)
  {
    return this.http.post(this.baseurl+"servlet/add-reclamation",data);
  }
  
  
  deleteReclamation(id:any){
  
    return this.http.delete(this.baseurl+"servlet/deleteReclamation/"+id);
  
  }
  UpdatReclamation(data:Reclamation):Observable<Reclamation>
  {
    return this.http.put<Reclamation>(this.baseurl+"servlet/modify-reclamation/",data);
  
  }
  
   
   
  }