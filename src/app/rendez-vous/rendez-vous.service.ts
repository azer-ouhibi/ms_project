import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RendezVous } from 'src/Models/rendezVous';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {



  constructor(private http:HttpClient,private router:Router) 
  { }
  baseurl=environment.url;
  
  fetchRendezVouss():Observable<RendezVous[]>
  {
    return this.http.get<RendezVous[]>(this.baseurl+"RendezVous");
  }
  fetchRendezVousById(id:any):Observable<RendezVous>
  {
    return this.http.get<RendezVous>(this.baseurl+"RendezVous/"+id);
  }
  
  addRendezVous(data:RendezVous)
  {
    return this.http.post(this.baseurl+"RendezVous",data);
  }
  
  
  deleteRendezVous(id:any){
    console.log(id);
    return this.http.delete(this.baseurl+"RendezVous/"+id);
  
  }
  UpdatRendezVous(data:RendezVous):Observable<RendezVous>
  {
    return this.http.put<RendezVous>(this.baseurl+"RendezVous/"+data.id,data);
  
  }
  
   
   
  }